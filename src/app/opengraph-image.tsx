import { ImageResponse } from "next/og";
import {
  PROJECT_TITLE,
  PROJECT_DESCRIPTION,
  PROJECT_AVATAR_URL,
  PROJECT_CREATOR,
} from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0a0a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Clean gradient background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, #7C65C1 0%, #5B4A9C 50%, #3E2B6D 100%)",
          }}
        />

        {/* Centered content in 630x630 safe zone */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            padding: "85px 60px",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Creator avatar */}
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid rgba(255, 255, 255, 0.9)",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "32px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PROJECT_AVATAR_URL}
              alt="Creator avatar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Project title - mobile readable */}
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "800",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "24px",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {PROJECT_TITLE}
          </h1>

          {/* Project description - mobile readable */}
          <p
            style={{
              fontSize: "28px",
              fontWeight: "500",
              color: "rgba(255, 255, 255, 0.9)",
              textAlign: "center",
              marginBottom: "36px",
              lineHeight: 1.3,
              maxWidth: "500px",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {PROJECT_DESCRIPTION}
          </p>

          {/* Creator attribution */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 32px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "50px",
              border: "2px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#ffffff",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              by @{PROJECT_CREATOR}
            </span>
          </div>

          {/* NFT minting indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "28px",
              padding: "12px 24px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "30px",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "rgba(255, 255, 255, 0.8)",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              NFT Minting Experience
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
