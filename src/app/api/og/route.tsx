import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// Yêu cầu bắt buộc để tối ưu thời gian vẽ Image dưới 100 miliseconds (Mới share link lên nền tảng xã hội nhạy được)!
export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams, origin } = new URL(req.url);

    // KĨ THUẬT: Nhặt Param Mạng trên Dải URL để Sinh Ảnh theo Động Tùy Nghĩa!! 
    const title = searchParams.has("title") ? searchParams.get("title")?.slice(0, 100) : "Lan Anh";
    const desc = searchParams.has("desc") ? searchParams.get("desc")?.slice(0, 150) : "Web Developer";
    const category = searchParams.has("cat") ? searchParams.get("cat")?.slice(0, 100) : "Lan Anh";

    const avatarUrl = `${origin}/images/profile-placeholder.png`;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "80px 100px",
            background: "linear-gradient(135deg, #020617 0%, #0d505e 50%, #093740 100%)",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -100,
              left: -100,
              width: 400,
              height: 400,
              background: '#13FFAA',
              opacity: 0.15,
              filter: 'blur(100px)',
              borderRadius: '100%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -50,
              right: 0,
              width: 400,
              height: 400,
              background: '#CE84CF',
              opacity: 0.1,
              filter: 'blur(120px)',
              borderRadius: '100%',
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "65%"
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "10px 24px",
                background: "rgba(45, 212, 191, 0.1)",
                border: "2px solid rgba(45, 212, 191, 0.3)",
                borderRadius: "50px",
                alignSelf: "flex-start"
              }}
            >
              <span
                style={{
                  fontSize: 26,
                  fontWeight: 900,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#2DD4BF"
                }}
              >
                {category}
              </span>
            </div>

            <h1
              style={{
                fontSize: 75,
                fontWeight: 900,
                lineHeight: 1.1,
                color: "white",
                margin: "16px 0 0 0"
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 32,
                color: "#94a3b8",
                lineHeight: 1.5,
                margin: "10px 0 0 0",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}
            >
              {desc}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              position: "relative"
            }}
          >
            <img
              src={avatarUrl}
              width="380"
              height="380"
              style={{
                borderRadius: "100%",
                border: "10px solid #0f766e",
                objectFit: "cover",
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.7)",
                zIndex: 10,
              }}
              alt="Author Avatar"
            />
            <div style={{
              position: 'absolute',
              zIndex: -1,
              right: -15,
              bottom: -20,
              background: '#2dd4bf',
              opacity: 0.3,
              width: '110%',
              height: '110%',
              filter: 'blur(30px)',
              borderRadius: "100%"
            }} />
          </div>
        </div>
      ),
      {
        width: 1200, height: 630,
      }
    );
  } catch (e: any) {
    console.error("OG generation failed: ", e.message);
    return new Response("Image generation process failed!", { status: 500 });
  }
}
