import "./Dashboard.css";

const Dashboard = () => {
  return (


    <div className="dashboard">
      <h2 className=""> Dashboard</h2>
      <div className="cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>500 users registered</p>
        </div>
        <div className="card">
          <h3>Active Users</h3>
          <p>25 users are active</p>
        </div>
        <div className="card">
          <h3>Total Assignments</h3>
          <p>124 assignments are posted</p>
        </div>
        <div className="card">
          <h3>Total Users</h3>
          <p>500 users registered</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
