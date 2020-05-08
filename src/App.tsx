import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInitDetails } from "./store/asyncActions/index";
import CountrySimpleDetails from "./components/CountrySimpleDetails/CountrySimpleDetails";
import { State } from "./type/type";
import CSS from "./App.module.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AllCountryMiniDetails from "./containers/AllCountryMiniDetails/AllCountryMiniDetails";
import OneCountryDetails from "./containers/OneCountryDetails/OneCountryDetails";

const App = (props: any) => {
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
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={(props) => <AllCountryMiniDetails {...props} />}
        />
        <Route path="/:countryName" component={OneCountryDetails}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
