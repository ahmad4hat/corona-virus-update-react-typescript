import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitDetails } from "./store/asyncActions/index";
import CountrySimpleDetails from "./components/CountrySimpleDetails/CountrySimpleDetails";
import { State } from "./type/type";
import CSS from "./App.module.scss";

const App: React.FC = () => {
  const countries = useSelector((state: State) => state.countries);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitDetails());
  }, [dispatch]);
  return (
    <div>
      <div className={CSS.Header}>
        <h1 className={CSS.Header__Text}>Corona Virus Update</h1>
      </div>
      <div className={CSS.SimpleCountryDetailsContainer}>
        {countries.map(country => (
          <CountrySimpleDetails
            country={country}
            key={country.countryName}
          ></CountrySimpleDetails>
        ))}
      </div>
    </div>
  );
};

export default App;
