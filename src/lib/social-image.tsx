import { ImageResponse } from "next/og";
import { brand } from "@/content/site";

export const socialImageAlt =
  "Zackary Brown Web Solutions builds modern websites for local service businesses.";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

const serviceHighlights = [
  "Custom websites",
  "Website redesigns",
  "Lead capture setup",
  "Ongoing support",
];

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "52px",
          background:
            "linear-gradient(135deg, #fafaf7 0%, #f2f0ec 50%, #e8f0f2 100%)",
          color: "#1A1A1A",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            borderRadius: "28px",
            padding: "40px",
            background: "rgba(255, 255, 255, 0.78)",
            border: "1px solid rgba(43, 95, 107, 0.14)",
            boxShadow: "0 24px 64px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <div
                style={{
                  display: "flex",
                  width: "18px",
                  height: "18px",
                  borderRadius: "4px",
                  background: "#2B5F6B",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", fontSize: "28px", fontWeight: 700 }}>
                  {brand.shortName}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#5B6671",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  {brand.tagline}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "999px",
                padding: "12px 18px",
                border: "1px solid rgba(43, 95, 107, 0.16)",
                background: "rgba(255, 255, 255, 0.7)",
                fontSize: "18px",
                fontWeight: 600,
                color: "#2B5F6B",
              }}
            >
              Colorado-based
            </div>
          </div>

          <div style={{ display: "flex", flex: 1, gap: "30px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "68%",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "54px",
                      height: "2px",
                      background: "#2B5F6B",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#2B5F6B",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Founder-led web design
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    maxWidth: "700px",
                    fontSize: "72px",
                    lineHeight: 1.02,
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                    marginBottom: "20px",
                  }}
                >
                  Modern websites that win trust and drive leads.
                </div>

                <div
                  style={{
                    display: "flex",
                    maxWidth: "660px",
                    fontSize: "28px",
                    lineHeight: 1.38,
                    color: "#555555",
                  }}
                >
                  Custom sites, redesigns, lead capture, and ongoing support for
                  local service businesses.
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontSize: "20px",
                  color: "#555555",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "12px",
                    height: "12px",
                    borderRadius: "999px",
                    background: "#2B5F6B",
                  }}
                />
                Based in Colorado, working locally and remotely.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "32%",
                borderRadius: "24px",
                padding: "26px",
                background: "rgba(232, 240, 242, 0.82)",
                border: "1px solid rgba(43, 95, 107, 0.14)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#2B5F6B",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    marginBottom: "18px",
                  }}
                >
                  Services
                </div>
                {serviceHighlights.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "22px",
                      color: "#1A1A1A",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "10px",
                        height: "10px",
                        borderRadius: "999px",
                        background: "#2B5F6B",
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  paddingTop: "18px",
                  borderTop: "1px solid rgba(43, 95, 107, 0.12)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#2B5F6B",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Built to earn trust
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: "20px",
                    lineHeight: 1.4,
                    color: "#555555",
                  }}
                >
                  Clean messaging, strong credibility, and an easier path to
                  inquiries.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
