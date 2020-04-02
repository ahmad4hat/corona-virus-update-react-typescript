import {
  createSlice,
  combineReducers,
  PayloadAction,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
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
  name: "isLoading",
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
    updatedCountry: (
      state,
      { payload }: PayloadAction<{ countries: CountryDetails[] }>
    ) => {
      state = payload.countries;
    }
  }
});

const reducers = combineReducers({
  selectedCountry: selectedCountrySlice.reducer,
  isLoading: isLoadingSlice.reducer,
  countries: countriesSlice.reducer
});

export const { changeLoading: changeLoadingGlobal } = isLoadingSlice.actions;

export default configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware()
});
