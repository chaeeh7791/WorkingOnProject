import OverviewCard from "../overviewCard";

function People() {
  return (
    <div style={{ display: "grid", gap: "16px", padding: "20px" }}>
      <OverviewCard
        icon="👥"
        title="People"
        description="Connections that mattered"
      />
    </div>
  );
}
export default People;
