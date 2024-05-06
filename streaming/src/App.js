import { useSelector, useDispatch } from "react-redux";
import { increment } from "./Redux/slices";
import Hero from "./pages/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Navbar />
              <Hero />
            </>
          }
        ></Route>
        <Route path="/home" element={<><Home/></>}>

        </Route>
      </Routes>
    </div>
  );
};

export default App;
