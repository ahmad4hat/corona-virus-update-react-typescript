import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { State } from "../../type/type";
import { useSelector } from "react-redux";
const OneCountryDetails = (props: any) => {
  const { countryName } = useParams();
  const countryDetails = useSelector((state: State) => {
    return state.countries.find(
      (country) => country.countryName === countryName
    );
  });
  console.log(countryDetails);
  return <div>{countryName}</div>;
};

export default OneCountryDetails;
