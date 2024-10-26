import { ResponsiveBar } from '@nivo/bar';

const dummyBarData = [
  { category: 'A', value: 137 },
  { category: 'B', value: 165 },
  { category: 'C', value: 95 },
  { category: 'D', value: 178 },
  { category: 'E', value: 154 },
];

export function BarChart() {
  return (
    <ResponsiveBar
      data={dummyBarData}
      keys={['value']}
      indexBy="category"
      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      colors={{ scheme: 'purple_red' }}
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Category',
        legendPosition: 'middle',
        legendOffset: 40,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Value',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      theme={{
        axis: {
          ticks: { text: { fill: '#9CA3AF' } },
          legend: { text: { fill: '#9CA3AF' } },
        },
        grid: { line: { stroke: '#374151' } },
      }}
    />
  );
}