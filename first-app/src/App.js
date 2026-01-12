import Overview from "./pages/overview.js";
import Growth from "./components/growth.js";
import People from "./components/people.js";
import Health from "./components/health.js";
import Money from "./components/money.js";
import Meaning from "./components/meaning.js";
import "./app.css";

function App() {
  return (
    <div>
      <Overview />
      <Growth />
      <People />
      <Health />
      <Money />
      <Meaning />
    </div>
  );
}
export default App;
