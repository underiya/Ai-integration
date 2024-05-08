import { Route, Routes } from "react-router-dom";
import Story from "../components/Story";
import Shayari from "../components/Shayari";
import Joke from "../components/Joke";
import Quote from "../components/Quote";

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/story" element={<Story />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/shayari" element={<Shayari />} />
        <Route path="/joke" element={<Joke />} />
      </Routes>
    </>
  );
};

export default AllRoute;
