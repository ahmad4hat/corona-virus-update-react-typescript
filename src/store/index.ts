import { createSlice, combineReducers, PayloadAction } from "@reduxjs/toolkit";
import { CountryDetails } from "../type/type";

const selectedCountrySlice = createSlice({
  name: "selectedCountry",
  initialState: null as string | null,
  reducers: {
    select: (state, { payload }: PayloadAction<{ name: string }>) =>
      payload.name
  }
});

const isLoadingSlice = createSlice({
  name: "selectedCountry",
  initialState: false,
  reducers: {
    changeLoading: (
      state,
      { payload }: PayloadAction<{ isLoading: boolean }>
    ) => payload.isLoading
  }
});

const countriesSliceInitState: CountryDetails[] = [];

const countriesSlice = createSlice({
  name: "countries",
  initialState: countriesSliceInitState,
  reducers: {
    updatedCountry: (state, payload) => {
      console.log(payload);
      return state;
    }
  }
});

const reducers = combineReducers({
  selectedCountry: selectedCountrySlice.reducer,
  isLoading: isLoadingSlice.reducer,
  countries: countriesSlice.reducer
});
