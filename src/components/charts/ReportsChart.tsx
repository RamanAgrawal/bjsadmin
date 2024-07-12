import { FC, useEffect } from "react";
import * as echarts from "echarts";

const ReportsChart: FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById("pie")!;
    const myChart = echarts.init(chartDom);


    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", () => {
      myChart.resize();
      myChart.setOption({
        series: [
          {
            radius: window.innerWidth < 600 ? "50%" : "70%",
            label: {
              fontSize: window.innerWidth < 600 ? 10 : 14,
              formatter: "{b} ({d}%)",
            },
            labelLine: {
              length: window.innerWidth < 600 ? 5 : 30,
              length2: window.innerWidth < 600 ? 10 : 40,
            },
          },
        ],
      });
    });

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div style={{ width: "100%", height: "400px" }} id="pie"></div>;
};

export default ReportsChart;
