import axios from "axios";
import { changeLoadingGlobal } from "../index";
import { CountryDetails, DayDetails } from "../../type/type";

export const getInitDetails = () => async (
  dispatch: (arg0: { payload: { isLoading: boolean }; type: string }) => void
) => {
  try {
    dispatch(changeLoadingGlobal({ isLoading: true }));
    const { data } = await axios.get(
      "https://pomber.github.io/covid19/timeseries.json"
    );

    const CountryDetails: CountryDetails[] = [];
    for (let key in data) {
      let totalDeath=0;
      let recoverd=0;
      let 
    }

    dispatch(changeLoadingGlobal({ isLoading: false }));
  } catch (err) {
    console.log(err.data);
  }
};
