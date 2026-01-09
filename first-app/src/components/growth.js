import OverviewCard from "../overviewCard";

function Growth() {
  return (
    <div style={{ display: "grid", gap: "16px", padding: "20px" }}>
      <OverviewCard
        icon="📚"
        title="Growth"
        description="How well I took care of myself today"
      />
    </div>
  );
}

export default Growth;
