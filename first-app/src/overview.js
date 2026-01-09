import OverviewCard from "./overviewCard";

function Overview() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Life Overview</h1>
      <p>Track and manage key areas of your life:</p>

      <div style={{ display: "grid", gap: "16px" }}>
        <OverviewCard
          icon="💪"
          title="Health"
          description="How well I took care of myself today"
        />

        <OverviewCard
          icon="👥"
          title="People"
          description="Connections that mattered"
        />

        <OverviewCard
          icon="💰"
          title="Money"
          description="This month's financial progress"
        />

        <OverviewCard
          icon="📚"
          title="Growth"
          description="What I learned today"
        />

        <OverviewCard
          icon="✨"
          title="Meaning"
          description="Why I'm doing all this"
        />
      </div>
    </div>
  );
}

export default Overview;
