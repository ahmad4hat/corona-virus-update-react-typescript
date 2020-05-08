import React from "react";
import { useSpring, animated, interpolate } from "react-spring";
import { CountryDetails } from "./../../type/type";
import CSS from "./CountrySimpleDetails.module.scss";
import { useHistory } from "react-router-dom";

const CountrySimpleDetails = (props: any) => {
  const history = useHistory();
  const country: CountryDetails = props.country;
  const [divStyle, setDivStyle] = useSpring(() => ({
    opacity: 0.8,
    scaleFactor: 1,
    //transform: "scale(0.6)",
  }));

  return (
    <animated.div
      onClick={() => history.push("/" + country.countryName)}
      className={CSS.Container}
      style={{
        opacity: divStyle.opacity,
        transform: divStyle.scaleFactor.interpolate((w) => `scale( ${w})`),
      }}
      onMouseMove={(x) => {
        setDivStyle({ opacity: 1, scaleFactor: 1.1 });
        //setDivStyle({ transform: "scale (1)" });
      }}
      onMouseLeave={(x) => setDivStyle({ opacity: 0.8, scaleFactor: 1 })}
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
