import OverviewCard from "../pages/overviewCard";
import { useState } from "react";

function Growth() {
  const [lesson, setLesson] = useState("");
  return (
    <div style={{ display: "grid", gap: "16px", padding: "20px" }}>
      <OverviewCard
        icon="📚"
        title="Growth"
        description="How well I took care of myself today"
      />

      <div>
        <label>What I learn today?</label> <br />
        <textarea
          placeholder="Write here..."
          value={lesson}
          onChange={(e) => setLesson(e.target.value)}
          rows={6}
        />
      </div>
    </div>
  );
}

export default Growth;
