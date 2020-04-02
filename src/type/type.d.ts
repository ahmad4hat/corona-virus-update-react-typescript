export interface DayDetails {
  date: Date;
  confirmed: number;
  deaths: number;
  recovered: number;
}
export interface CountryDetails {
  totalDeath: number;
  totalRecovered: number;
  totalConfirmed: number;
  countryName: string;
  dayDetails: DayDetails[];
}

export interface State {
  countries: CountryDetails[];
  isLoading: boolean;
  selectedCountry: string | null;
}
