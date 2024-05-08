import "./App.css";
import Navbar from "./components/Navbar";
import AllRoute from "./Routes/AllRoute";

export const baseUrl: string = "http://localhost:8080/";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <AllRoute />
      </div>
    </>
  );
}

export default App;
