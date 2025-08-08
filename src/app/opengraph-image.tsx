import { ImageResponse } from "next/og";

export const alt = "jacque Goddess Winds of Change #1";
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
          alignItems: "center",
          justifyContent: "center",
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

        {/* Centered text only */}
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "800",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
            fontFamily: "system-ui, -apple-system, sans-serif",
            position: "relative",
            zIndex: 10,
          }}
        >
          jacque Goddess Winds of Change #1
        </h1>
      </div>
    ),
    {
      ...size,
    },
  );
}
