import "./styles.css";
import Map from "./Map";
import Header from "./Header";

export default function App({ updateView }) {
  return (
    <div className="App">
      <Header updateView={updateView} />
      <h2>Take a look at the map!</h2>
      <Map updateView={updateView} />
    </div>
  );
}
