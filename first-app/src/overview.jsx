import { useState } from "react";

function Overview() {
    const [income]  = useState(3000);
    const [expenses] = useState(1850);

    const balance = income - expenses;

    return (
        <div style={{ padding: "20px"}}>
            <h2>Financial Overview</h2>
            <div style={{
                display: "flex",
                gap: "20px",
                marginTop: "10px"
            }}>
            </div>

        <div style={{
          padding: "20px",
          backgroundColor: "#4A6CF7",
          color: "#fff",
          borderRadius: "8px",
          minWidth: "120px"
        }}>
        <h3>Income</h3>
        <p>Total Income: ${income}</p>
        </div>

        <div style={{
          padding: "20px",
          backgroundColor: "#6BBF8A",
          color: "#fff",
          borderRadius: "8px",
          minWidth: "120px"
        }}>
        <h3>Expenses</h3>
        <p>Total Expenses: ${expenses}</p>
        </div>

        <div style={{
          padding: "20px",
          backgroundColor: "#FFC107",
          color: "#000",
          borderRadius: "8px",
          minWidth: "120px"
        }}>
        <h3>Balance</h3>
        <p>Balance: ${balance}</p>
        </div>
        </div>
    );
}

export default Overview;