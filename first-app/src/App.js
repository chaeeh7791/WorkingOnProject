import Overview from "./overview";
import "./app.css";
import Growth from "./components/growth";
import People from "./components/people";
import Health from "./components/health";
import Money from "./components/money";
import Meaning from "./components/meaning";

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
