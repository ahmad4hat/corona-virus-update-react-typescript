import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { State } from "./../../type/type";
import CSS from "./AllCountryMiniDetails.module.scss";
import CountrySimpleDetails from "../../components/CountrySimpleDetails/CountrySimpleDetails";

const AllCountryMiniDetails = (props: any) => {
  console.log(props);
  const countries = useSelector((state: State) => state.countries);
  return (
    <div className={CSS.SimpleCountryDetailsContainer}>
      {countries.map((country) => (
        <CountrySimpleDetails
          country={country}
          key={country.countryName}
        ></CountrySimpleDetails>
      ))}
    </div>
  );
};

export default AllCountryMiniDetails;
