const COLS = 50;
const ROWS = 27;
const SPACING = 24;

const dots = Array.from({ length: COLS * ROWS }, (_, i) => ({
  cx: (i % COLS) * SPACING + SPACING / 2,
  cy: Math.floor(i / COLS) * SPACING + SPACING / 2,
}));

interface OgImageLayoutProps {
  label: string;
  title: string;
  description: string;
}

export function OgImageLayout({ label, title, description }: OgImageLayoutProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "64px",
        position: "relative",
      }}
    >
      {/* dot grid */}
      <svg
        width={1200}
        height={630}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {dots.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={1.5} fill="#505050" />
        ))}
      </svg>

      {/* fade overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to top, #000000 40%, transparent 70%)",
        }}
      />

      {/* red accent dot */}
      <div
        style={{
          position: "absolute",
          top: "64px",
          right: "64px",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#d71921",
        }}
      />

      {/* content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          position: "relative",
        }}
      >
        <p
          style={{
            fontFamily: "Space Mono",
            fontSize: "18px",
            color: "#999999",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {label}
        </p>
        <h1
          style={{
            fontFamily: "Doto",
            fontSize: "112px",
            color: "#ffffff",
            margin: 0,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontFamily: "Space Grotesk",
            fontSize: "24px",
            color: "#e8e8e8",
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
