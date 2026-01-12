import OverviewCard from "../pages/overviewCard";
import { useState } from "react";

function Health() {
  const [water, setWater] = useState("");
  const [walk, setWalk] = useState("");
  const [sleep, setSleep] = useState("");

  return (
    <div style={{ display: "grid", gap: "16px", padding: "20px" }}>
      <OverviewCard
        icon="💪"
        title="Health"
        description="How well I took care of myself today"
      />

      <div>
        <label> Water (cups) </label>
        <br />
        <input
          type="number"
          value={water}
          onChange={(e) => setWater(e.target.value)}
        />
      </div>

      <div>
        <label> Walk (minutes) </label>
        <br />
        <input
          type="number"
          value={walk}
          onChange={(e) => setWalk(e.target.value)}
        />
      </div>

      <div>
        <label> Sleep (hours) </label>
        <br />
        <input
          type="number"
          value={sleep}
          onChange={(e) => setSleep(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Health;
