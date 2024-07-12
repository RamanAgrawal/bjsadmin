import { ResponsiveLine } from "@nivo/line";

const Line = ({ data }: { data: any }) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 40, right: 10, bottom: 20, left: 30 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false,
      }}
      curve="natural"  // This provides a smoother curve
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 36,
        legendPosition: 'middle'
      }}
      axisLeft={null} // Remove left axis
      enableGridX={false}
      enableGridY={false}
      lineWidth={4}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableCrosshair={false} // Disable crosshair
      useMesh={true}
      legends={[
        {
          anchor: 'top-left',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: -40,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      theme={{
        axis: {
          ticks: {
            text: {
              fontSize: 12,
              fill: '#8b909a'
            }
          }
        }
      }}
      colors={["#009EFF", "#005DFF"]} // Use the colors similar to the image provided
    />
  );
};

export default Line;
