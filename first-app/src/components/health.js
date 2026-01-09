import OverviewCard from "../overviewCard";

function Health() {
  return (
    <div style={{ display: "grid", gap: "16px", padding: "20px" }}>
      <OverviewCard
        icon="💪"
        title="Health"
        description="How well I took care of myself today"
      />
    </div>
  );
}

export default Health;
