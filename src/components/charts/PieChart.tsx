import { ResponsivePie } from '@nivo/pie';

const dummyPieData = [
  { id: 'Category A', value: 35 },
  { id: 'Category B', value: 25 },
  { id: 'Category C', value: 20 },
  { id: 'Category D', value: 15 },
  { id: 'Category E', value: 5 },
];

export function PieChart() {
  return (
    <ResponsivePie
      data={dummyPieData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ scheme: 'purple_red' }}
      borderWidth={1}
      borderColor={{ theme: 'background' }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#9CA3AF"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#ffffff"
      theme={{
        labels: { text: { fill: '#9CA3AF' } },
      }}
    />
  );
}