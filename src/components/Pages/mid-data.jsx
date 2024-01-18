import React , {useEffect} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Middata = (props) => {
  const { data } = props;
  console.log(data);

  

  return (
    <>
      <div className="outer-right-panel position-relative">
        <div className="right-panel">
          <div className="row">
            <div className="right-panel-inner d-flex flex-wrap">
              {data &&
                data.length > 0 &&
                data.map((item, index) => {
                  return (
                    <>
                      <div className="col-3 ps-4 pb-4" key={index}>
                        <div className="cards p-4 d-flex justify-content-center flex-column align-items-center">
                          <div className="card-content">
                            <div className="image-container">
                              <LazyLoadImage
                                src={item?.links?.mission_patch}
                                width={200}
                                height={200}
                                alt={item.mission_name}
                                className="img-fluid"
                              />
                            </div>
                            <div className="card-bold-title d-flex flex-column">
                              <div className="card-title">
                                {item.mission_name}
                              </div>
                              <span className="sub-item">Mission Ids:</span>
                              <ul>
                                <li className="blue-content">
                                  {item.mission_id}
                                </li>
                              </ul>
                              <span className="sub-item">
                                Launch Year:{" "}
                                <span className="blue-content">
                                  {item.launch_year}
                                </span>
                              </span>
                              <span className="sub-item">
                                Successful Launch:{" "}
                                <span className="blue-content">
                                  {String(item.launch_success)}
                                </span>
                              </span>
                              <span className="sub-item d-flex">
                                Successful<br></br>Landing:{" "}
                                <span className="blue-content last-blue-content">
                                  {item.rocket.first_stage.cores.map((a, b) => {
                                    return (
                                      <span key={b}>
                                        {String(a.land_success)}
                                      </span>
                                    );
                                  })}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="outer-right-panel position-relative">
        <div className="right-panel">
          <div className="row">
            <div className="right-panel-inner d-flex flex-wrap">
              {data &&
                data.length > 0 &&
                data.map((item, index) => {
                  return (
                    <>
                      <div className="col-3 ps-4 pb-4" key={index}>
                        <div className="cards p-4 d-flex justify-content-center flex-column align-items-center">
                          <div className="card-content">
                            <div className="image-container">
                              <LazyLoadImage
                                src={item?.links?.mission_patch}
                                width={200}
                                height={200}
                                alt={item.mission_name}
                                className="img-fluid"
                              />
                            </div>
                            <div className="card-bold-title d-flex flex-column">
                              <div className="card-title">
                                {item.mission_name}
                              </div>
                              <span className="sub-item">Mission Ids:</span>
                              <ul>
                                <li className="blue-content">
                                  {item.mission_id}
                                </li>
                              </ul>
                              <span className="sub-item">
                                Launch Year:{" "}
                                <span className="blue-content">
                                  {item.launch_year}
                                </span>
                              </span>
                              <span className="sub-item">
                                Successful Launch:{" "}
                                <span className="blue-content">
                                  {String(item.launch_success)}
                                </span>
                              </span>
                              <span className="sub-item d-flex">
                                Successful<br></br>Landing:{" "}
                                <span className="blue-content last-blue-content">
                                  {item.rocket.first_stage.cores.map((a, b) => {
                                    return (
                                      <span key={b}>
                                        {String(a.land_success)}
                                      </span>
                                    );
                                  })}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Middata;
