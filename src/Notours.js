import "./notours.css";
const Notours = ({ loading }) => {
  return (
    <div className="mother">
      <h1>No Tours Left</h1>
      <button className="refresh" onClick={() => loading()}>
        Refresh
      </button>
    </div>
  );
};
export default Notours;
