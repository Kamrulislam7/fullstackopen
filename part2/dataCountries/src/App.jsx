import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      console.log(res.data);
      setCountries(res.data);
    });
  }, []);

  // if (!countries) return <p>Loding...</p>;

  // const { capital, flags, languages } = countries;
  const handleSubmit = (e) => {
    e.pareventDefault();
    console.log(e);
  };

  const handleChange = (e) => {
    console.log();

    setValue(e.target.value);
  };
  const filterCountry = countries.filter((country) =>
    country.name.common.toLowerCase().includes(value),
  );
  console.log(filterCountry);

  return (
    <>
      {/* <h1>{capital}</h1> <strong>{languages?.eng}</strong>
      <div className="flagImage">
        <img src={flags?.svg} alt="" />
      </div> */}

      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => handleChange(e)} />
      </form>

      {filterCountry.length > 10 && <Message />}

      {filterCountry.length <= 10 &&
        filterCountry.length > 1 &&
        filterCountry.map((country) => (
          <Country key={country.cca3} country={country} />
        ))}

      {filterCountry.length === 1 && (
        <Contrydetails filterCountry={filterCountry} />
      )}
    </>
  );
}

export default App;

const Country = ({ country }) => {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState(null);
  const handleClick = () => {
    axios
      .get(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${country.name.common}`,
      )
      .then((res) => setNewData([res.data]));
    console.log(newData);
    setShow(!show);
  };
  return (
    <>
      <h1>{country.name.common}</h1>
      {show && <Contrydetails filterCountry={newData} />}
      <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
    </>
  );
};

const Message = () => {
  return <p>Too many matches, specify another filter</p>;
};

const Contrydetails = ({ filterCountry }) => {
  console.log(filterCountry);

  const [weather, setWeather] = useState();

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  // https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${filterCountry[0]?.capital?.[0]}&appid=${apiKey}&units=metric`,
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div>
      <h2>{filterCountry[0]?.name?.common}</h2>
      <p>Capital: {filterCountry[0]?.capital?.[0]}</p>

      {filterCountry.map((country) => (
        <Languages country={country.languages} key={country.ccn3} />
      ))}

      <p>Region: {filterCountry[0]?.region}</p>
      <p>Population: {filterCountry[0]?.population}</p>
      <img
        src={filterCountry[0]?.flags.png}
        alt={filterCountry[0]?.flags.alt}
      />
      <Weather weather={weather} />
    </div>
  );
};

const Languages = ({ country }) => {
  return (
    <>
      {Object.entries(country).map((data) => (
        <ul key={data}>
          <li>{data}</li>
        </ul>
      ))}
    </>
  );
};

const Weather = ({ weather }) => {
  console.log(weather);
  return (
    <div>
      <h1>Weather in{weather?.name}</h1>
      <p>Temperature {weather?.main.temp}</p>
      <img
        src={` https://openweathermap.org/payload/api/media/file/${weather?.weather[0].icon}.png`}
        alt=""
        width={100}
      />
      <p>Wind {weather?.wind.speed}</p>
    </div>
  );
};
