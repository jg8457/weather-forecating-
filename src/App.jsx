import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CityComponents from "./Components/CityComponents";
import WeatherComponents from "./Components/WeatherComponents";
import axios from "axios";
import Load from "./Components/Load";

function App() {
  // const API
  // const API_key = "b52ebf3479c0ba50f0f006fd016ff13e";
  const [url, setUrl] = useState("");
  const [city, setCity] = useState("");
  const [cityy, setCityy] = useState("");
  const [main, setMain] = useState("");
  const [wind, setWind] = useState("");
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState("");
  const [error, setError] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b52ebf3479c0ba50f0f006fd016ff13e&units=metric`;

  const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=b52ebf3479c0ba50f0f006fd016ff13e&units=metric`;

  const fetchWeather = async (e) => {
    // setUrl(url1);
    e.preventDefault();
    if (city.trim().length !== 0 && locate == false) {
      setEmpty("");
    } else {
      setEmpty("Please enter a city name in this field");
      console.log("empty");
    }
    try {
      setLoading(true);
      const res = await axios.get(url1);
      setCityy(res.data.city);
      setMain(res.data.list[0].main);
      console.log(res.data.list[0].main);
      setWind(res.data.list[0].wind.speed);
      setWeather(res.data);
      console.log(res);
      // setError("");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
      setCity("");
    }
  };

  //locator
  const locate = async (e) => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success(pos) {
      const crd = pos.coords;
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      setLat(lat);
      setLong(long);
      setEmpty("");
      // setError("");
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      console.log(lat);
      console.log(long);
      console.log(crd.latitude);
      console.log(crd.longitude);
    }

    function error(err) {
      setError(err.message);
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    e.preventDefault();
    try {
      // setLoading(true);
      const res = await axios.get(url2);
      setCityy(res.data.city);
      setMain(res.data.list[0].main);
      console.log(res.data.list[0].main);
      setWind(res.data.list[0].wind.speed);
      setWeather(res.data);
      console.log(res);
      // setError("");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      setLoading(true);
      setCity("");
    }
  };
  // useEffect(() => {
  //   if (city.length) {
  //     fetchData();
  //   }
  // }, [city]);
  return (
    <div className="App">
      {weather ? (
        (loading ? <Load /> : "",
        (
          <WeatherComponents
            setCity={setCity}
            fetchWeather={fetchWeather}
            locate={locate}
            cityy={cityy}
            main={main}
            wind={wind}
            weather={weather}
            empty={empty}
            error={error}
          />
        ))
      ) : (
        <CityComponents
          setCity={setCity}
          city={city}
          empty={empty}
          error={error}
          fetchWeather={fetchWeather}
          locate={locate}
        />
      )}
    </div>
  );
}

export default App;
