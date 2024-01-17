import { useState, useEffect } from "react";
import axios from "axios";
export default function Customhook() {
  const [Year, setYear] = useState([]);
  const [launch, setLaunch] = useState([]);
  const [land, setLand] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches?limit=100")
      .then((res) => {
        if(res.data > 0) setLoading(false);
        else setLoading(true);
        setYear(res.data);
      })
      .catch((e) => {
        // console.log(e)
      });
    axios
      .get(
        "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true"
      )
      .then((res) => {
        setLaunch(res.data);
      })
      .catch((e) => {
        //  console.log(e)
      });
    axios
      .get(
        "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true"
      )
      .then((res) => {
        setLand(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return { Year, launch, land , loading };
}
