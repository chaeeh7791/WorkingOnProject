import OverviewCard from "../pages/overviewCard";

function Money() {
  return (
    <div style={{ display: "grid", gap: "16px", padding: "20px" }}>
      <OverviewCard
        icon="💰"
        title="Money"
        description="This month's financial progress"
      />
    </div>
  );
}

export default Money;
