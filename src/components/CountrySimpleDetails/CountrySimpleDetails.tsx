import React from "react";
import { CountryDetails } from "./../../type/type";
import CSS from "./CountrySimpleDetails.module.scss";

const countrySimpleDetails = (props: any) => {
  const country: CountryDetails = props.country;

  return (
    <div className={CSS.Container}>
      <h2 className={CSS.Header}>{country.countryName}</h2>
      <p className={CSS.Text}>
        Total Confirm Cases :{" "}
        <span className={CSS.Info}> {country.totalConfirmed}</span>{" "}
      </p>
      <p className={CSS.Text}>
        Total Death : <span className={CSS.Danger}> {country.totalDeath}</span>{" "}
      </p>
      <p className={CSS.Text}>
        Total Recovered :{" "}
        <span className={CSS.Success}> {country.totalRecovered}</span>{" "}
      </p>
    </div>
  );
};

export default countrySimpleDetails;
