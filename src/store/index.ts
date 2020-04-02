import { createSlice, combineReducers, PayloadAction } from "@reduxjs/toolkit";

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

