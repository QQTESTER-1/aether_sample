import { ResponsiveChoropleth } from '@nivo/geo';
import singaporeGeoData from '../../data/singapore-planning-areas.json';

const dummyMapData = [
  { id: 'bishan', value: 85 },
  { id: 'tampines', value: 92 },
  { id: 'woodlands', value: 78 },
  { id: 'jurong east', value: 88 },
  { id: 'ang mo kio', value: 95 },
];

export function SingaporeMap() {
  return (
    <ResponsiveChoropleth
      data={dummyMapData}
      features={singaporeGeoData.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="purples"
      domain={[0, 100]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={55000}
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={0.5}
      borderColor="#152538"
      theme={{
        labels: { text: { fill: '#9CA3AF', fontSize: 12 } },
      }}
    />
  );
}