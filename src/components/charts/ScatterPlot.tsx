import { ResponsiveScatterPlot } from '@nivo/scatterplot';

const dummyScatterData = [
  {
    id: 'Group A',
    data: [
      { x: 0, y: 2 },
      { x: 1, y: 4 },
      { x: 2, y: 6 },
      { x: 3, y: 8 },
      { x: 4, y: 10 },
    ],
  },
  {
    id: 'Group B',
    data: [
      { x: 0, y: 1 },
      { x: 1, y: 3 },
      { x: 2, y: 5 },
      { x: 3, y: 7 },
      { x: 4, y: 9 },
    ],
  },
];

export function ScatterPlot() {
  return (
    <ResponsiveScatterPlot
      data={dummyScatterData}
      margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
      xScale={{ type: 'linear', min: 0, max: 'auto' }}
      yScale={{ type: 'linear', min: 0, max: 'auto' }}
      blendMode="multiply"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'X Value',
        legendPosition: 'middle',
        legendOffset: 46,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Y Value',
        legendPosition: 'middle',
        legendOffset: -60,
      }}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 130,
          translateY: 0,
          itemWidth: 100,
          itemHeight: 12,
          itemsSpacing: 5,
          itemDirection: 'left-to-right',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      theme={{
        axis: {
          ticks: { text: { fill: '#9CA3AF' } },
          legend: { text: { fill: '#9CA3AF' } },
        },
        grid: { line: { stroke: '#374151' } },
        legends: { text: { fill: '#9CA3AF' } },
      }}
    />
  );
}