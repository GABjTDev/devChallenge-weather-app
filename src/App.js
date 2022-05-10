import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useWeather } from "./service/useWeather";
import { useGrades } from "./hooks/useGrades";
import Loader from "./components/Loader";
import { useUbication } from "./hooks/useUbication";

function App() {
  const [weather, setWeather] = useState(null);
  const { getWeather, getLocation } = useWeather();
  const { grades, setGrades, handleGrades } = useGrades();
  const { location } = useUbication();
  const [woeid, setWoeid] = useState(null);

  useEffect(() => {
    if (location) {
      getLocation(location).then((res) => {
        setWoeid(res[0].woeid);
        getWeather(res[0].woeid).then((res) => {
          setWeather(res);
        });
      });
    }
  }, [location]);

  return (
    <>
      {weather ? (
        <div className="container">
          <Header
            weather={weather}
            setWeather={setWeather}
            grades={grades}
            setGrades={setGrades}
            woeid={woeid}
          />
          <Main weather={weather} grades={grades} handleGrades={handleGrades} />
        </div>
      ) : (
        <div className="container-loader">
          <Loader />
        </div>
      )}
    </>
  );
}

export default App;
