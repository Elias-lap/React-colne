import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages";
import Layout from "../pages/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements([
    <>
      <Route
        path="/"
        element={
          <div className=" w-full h-screen bg-black">
          <Layout />
          </div>
        }
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>
    </>,
  ])
);

export default router;
