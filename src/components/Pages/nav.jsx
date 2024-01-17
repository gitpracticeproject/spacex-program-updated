import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { year } = props;
  return (
    <>
      <div className="left-panel">
        <span className="p-2">Filters</span>
        <div className="launch-year d-flex justify-content-center flex-column text-center">
          <span>Launch Year</span>
          <div className="hr"></div>
        </div>
        <div className="years-panel">
          <div className="row">
            <div className="col-12">
              <ul className="navs">
                {year.map((item, ind) => {
                  return (
                    <li key={ind}>
                      <Link to={`/about/${item}`}>{item}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="below-years-section d-flex flex-column justify-content-center align-items-center">
          <span className="">Successful Launch</span>
          <div className="success-hr"></div>
          <div className="d-flex">
            <a href="#">
              <button>True</button>
            </a>
            <a href="#">
              <button>False</button>
            </a>
          </div>
        </div>
        <div className="below-years-section d-flex flex-column justify-content-center align-items-center">
          <span className="">Successful Landing</span>
          <div className="success-hr"></div>
          <div className="d-flex">
            <a href="#">
              <button>True</button>
            </a>
            <a href="#">
              <button>False</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
