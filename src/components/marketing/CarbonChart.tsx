"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface CarbonChartProps {
  data: number[];
  categories: string[];
}

const CarbonChart = ({ data, categories }: CarbonChartProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    chart.setOption({
      animation: false,
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        textStyle: { color: "#1f2937" },
      },
      grid: {
        top: 16,
        left: 12,
        right: 12,
        bottom: 12,
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: categories,
        axisLine: { lineStyle: { color: "#1f2937" } },
      },
      yAxis: {
        type: "value",
        axisLine: { lineStyle: { color: "#1f2937" } },
        splitLine: { lineStyle: { color: "rgba(15,23,42,0.08)" } },
      },
      series: [
        {
          data,
          type: "line",
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: "rgba(87, 181, 231, 1)",
            width: 3,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(87, 181, 231, 0.2)" },
              { offset: 1, color: "rgba(87, 181, 231, 0.02)" },
            ]),
          },
        },
      ],
    });

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, [data, categories]);

  return <div ref={chartRef} className="w-full h-full min-h-[320px]" />;
};

export default CarbonChart;

