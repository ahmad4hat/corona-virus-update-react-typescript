import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { State } from "../../type/type";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
const OneCountryDetails = (props: any) => {
  const { countryName } = useParams();
  const [chartOption, setChartOption] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        type: "datetime",
      },
      dataLabels: {
        enabled: false,
      },
    },

    series: [
      {
        data: [],
      },
    ],
  });

  const countryDetails = useSelector((state: State) => {
    return state.countries.find(
      (country) => country.countryName === countryName
    );
  });
  const isLoading = useSelector((state: State) => state.isLoading);

  // const newChart = { ...chartOption };
  // const dayname: any = [];
  // const dayCOnfirm: any = [{ name: "series-1", data: [] }];
  // countryDetails.dayDetails.forEach((country) => {
  //   dayname.push(country.date);
  //   dayCOnfirm[0].data.push(country.confirmed);
  // });
  // newChart.options.xaxis = dayname;

  // newChart.series = dayCOnfirm;
  // setChartOption(newChart);

  // useEffect(() => {
  //   const newChart = { ...chartOption };
  //   const dayname: any = [];
  //   const dayCOnfirm: any = [{ name: "series-1", data: [] }];
  //   countryDetails.dayDetails.forEach((country) => {
  //     dayname.push(country.date);
  //     dayCOnfirm[0].data.push(country.confirmed);
  //   });
  //   newChart.options.xaxis = dayname;

  //   newChart.series = dayCOnfirm;
  //   setChartOption(newChart);
  // }, [countryDetails]);

  useEffect(() => {
    if (countryDetails) {
      const newChart = { ...chartOption };
      const dayname: any = [];
      const dayCOnfirm: any = [{ name: "Series 1", data: [] }];
      countryDetails.dayDetails.forEach((dayDetails) => {
        dayname.push(dayDetails.date.getTime());

        dayCOnfirm[0].data.push([
          dayDetails.date.getTime(),
          dayDetails.confirmed,
        ]);
      });
      //newChart.options.xaxis.categories = dayname;
      //console.log(dayname);

      newChart.series = dayCOnfirm;
      setChartOption(newChart);
    }
  }, [countryDetails]);
  return (
    <div>
      <Chart
        options={chartOption.options}
        series={chartOption.series}
        type="bar"

        // width="500"
      />
    </div>
  );
};

export default OneCountryDetails;
