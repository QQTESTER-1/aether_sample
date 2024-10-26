import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, ChartPieIcon, SparklesIcon, MapIcon } from '@heroicons/react/24/outline';
import { BarChart } from './charts/BarChart';
import { PieChart } from './charts/PieChart';
import { ScatterPlot } from './charts/ScatterPlot';
import { SingaporeMap } from './charts/SingaporeMap';

type ChartType = 'bar' | 'pie' | 'scatter' | 'map';

const charts = [
  { id: 'bar' as const, name: 'Bar Chart', icon: ChartBarIcon, component: BarChart },
  { id: 'pie' as const, name: 'Pie Chart', icon: ChartPieIcon, component: PieChart },
  { id: 'scatter' as const, name: 'Scatter Plot', icon: SparklesIcon, component: ScatterPlot },
  { id: 'map' as const, name: 'Singapore Map', icon: MapIcon, component: SingaporeMap },
] as const;

export default function AnalyticsTab() {
  const [selectedChart, setSelectedChart] = useState<ChartType>('bar');

  const ChartComponent = charts.find(chart => chart.id === selectedChart)?.component || BarChart;

  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800/50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-white mb-4">Visualizations</h3>
        <div className="space-y-2">
          {charts.map((chart) => (
            <button
              key={chart.id}
              onClick={() => setSelectedChart(chart.id)}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                selectedChart === chart.id
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <chart.icon className="h-5 w-5" />
              <span>{chart.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        key={selectedChart}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="flex-1 bg-gray-800/50 rounded-lg p-6"
      >
        <div className="h-[600px]">
          <ChartComponent />
        </div>
      </motion.div>
    </div>
  );
}