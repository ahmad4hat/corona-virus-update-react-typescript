import axios from "axios";
import { changeLoadingGlobal,updatedCountriesDetails } from "../index";
import { CountryDetails, DayDetails } from "../../type/type";

export const getInitDetails = () => async (dispatch: any)  => {
  try {
    dispatch(changeLoadingGlobal({ isLoading: true }));
    const { data } = await axios.get(
      "https://pomber.github.io/covid19/timeseries.json"
    );

    const countryDetails: CountryDetails[] = [];
    for (let key in data) {
      let totalDeath=0;
      let totalRecovered=0;
      let totalConfirmed=0;
      const         countryName
      =key;
      const dayDetails:DayDetails[]=[];
      for(let dd of data[key]){
        
        var singleday:DayDetails={
          date:new Date( dd.date),
          deaths:dd.deaths,
          recovered:dd.recovered,
          confirmed:dd.confirmed
        }
        dayDetails.push(singleday)
        
        totalConfirmed +=dd.confirmed;
        totalDeath+=dd.recovered;
        totalRecovered=dd.recovered; 
        
      }
      const countryDetail:CountryDetails={
        totalConfirmed,
        totalDeath,
        totalRecovered,
        countryName,
        dayDetails
      }
      countryDetails.push(countryDetail)
      
    }

    
    dispatch(changeLoadingGlobal({ isLoading: false }));
    dispatch(updatedCountriesDetails({countries:countryDetails}));
    
  } catch (err) {
    console.log(err.data);
  }
};
