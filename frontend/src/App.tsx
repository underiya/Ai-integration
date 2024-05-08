import "./App.css";
import Navbar from "./components/Navbar";
import AllRoute from "./Routes/AllRoute";

export const baseUrl: string = "https://ai-integration-1ibo.onrender.com/";
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
