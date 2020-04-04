import React from "react";
import { useSpring, animated } from "react-spring";
import { CountryDetails } from "./../../type/type";
import CSS from "./CountrySimpleDetails.module.scss";

const CountrySimpleDetails = (props: any) => {
  const country: CountryDetails = props.country;
  const [divStyle, setDivStyle] = useSpring(() => ({
    opacity: 0.5,
    width: "80%"
    //transform: "scale(0.6)"
  }));

  return (
    <animated.div
      className={CSS.Container}
      style={divStyle}
      onMouseMove={x => {
        setDivStyle({ opacity: 1 , width: "100%"});
        //setDivStyle({ transform: "scale (1)" });
      }}
    >
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
    </animated.div>
  );
};

export default CountrySimpleDetails;
