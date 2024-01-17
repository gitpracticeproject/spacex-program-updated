import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Middata from "./mid-data";
import "./../homecss.css";
import Customhook from "./custom-hook";
import { Routes, Route } from "react-router-dom";
import Loader from "./Loader";

const Main = () => {
  const [year, setyear] = useState([]);
  const [data, setdata] = useState([]);
  const load = Customhook();

  useEffect(() => {
    if (load?.Year && load?.Year.length > 0) {
      const years = load.Year.map((item) => item?.launch_year);
      const removedupliyear = [...new Set(years)];
      setyear(removedupliyear);
      setdata(load?.Year);
    }
  }, [load.Year]);

  return (
    <>
      <header>
        <h1 className="p-3">SpaceX Launch Programs</h1>
      </header>
      <div className="content d-flex position-relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <div className="outer-left-panel position-relative">
                  <Nav year={year} />
                </div>
                <Middata data={data} />
              </>
            }
          />
          <Route
            path="/about/:year"
            element={
              <>
                <div className="outer-left-panel position-relative">
                  <Nav year={year} />
                </div>
                <Middata data={data} />
              </>
            }
          />
        </Routes>
        {/* <div className="outer-left-panel position-relative">
          <Nav year={year} />
        </div>
        <Middata data={data} /> */}
      </div>

      <section className="footer text-center mt-5">
        <span className="first-name">Developed by:</span>
        <span className="name">developer name</span>
      </section>
    </>
  );
};
export default Main;
