export default function Page() {
  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        background: "#070d1a",
      }}
    >
      <iframe
        src="/vertexstat-ai.html"
        title="VertexStat AI Enterprise"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />
    </main>
  );
}
