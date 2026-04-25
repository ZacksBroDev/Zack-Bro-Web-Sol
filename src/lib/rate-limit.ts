import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const CONTACT_LIMIT = 3;
const CONTACT_WINDOW_MS = 60_000;

const upstashUrl = process.env.UPSTASH_REDIS_REST_URL?.trim();
const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();

const hasUpstashConfig = Boolean(upstashUrl && upstashToken);

let contactLimiter: Ratelimit | null = null;

if (hasUpstashConfig) {
  const redis = new Redis({
    url: upstashUrl as string,
    token: upstashToken as string,
  });

  contactLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(CONTACT_LIMIT, "60 s"),
    prefix: "ratelimit:contact",
    analytics: true,
  });
}

type MemoryEntry = { count: number; resetAt: number };
const memoryRateLimitMap = new Map<string, MemoryEntry>();

function pruneMemoryRateLimitMap(now: number): void {
  for (const [key, entry] of memoryRateLimitMap) {
    if (now > entry.resetAt) memoryRateLimitMap.delete(key);
  }
}

function applyMemoryRateLimit(identifier: string): RateLimitResult {
  const now = Date.now();
  pruneMemoryRateLimitMap(now);

  const current = memoryRateLimitMap.get(identifier);
  if (!current || now > current.resetAt) {
    memoryRateLimitMap.set(identifier, {
      count: 1,
      resetAt: now + CONTACT_WINDOW_MS,
    });

    return {
      success: true,
      remaining: CONTACT_LIMIT - 1,
      limit: CONTACT_LIMIT,
      resetAt: now + CONTACT_WINDOW_MS,
      provider: "memory",
    };
  }

  current.count += 1;
  const success = current.count <= CONTACT_LIMIT;

  return {
    success,
    remaining: Math.max(0, CONTACT_LIMIT - current.count),
    limit: CONTACT_LIMIT,
    resetAt: current.resetAt,
    provider: "memory",
  };
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  limit: number;
  resetAt: number;
  provider: "upstash" | "memory";
}

export async function limitContactByIdentifier(
  identifier: string,
): Promise<RateLimitResult> {
  if (contactLimiter) {
    const result = await contactLimiter.limit(identifier);

    return {
      success: result.success,
      remaining: result.remaining,
      limit: result.limit,
      resetAt: result.reset,
      provider: "upstash",
    };
  }

  return applyMemoryRateLimit(identifier);
}
