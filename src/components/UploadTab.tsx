import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudArrowUpIcon, ArrowPathIcon, CircleStackIcon } from '@heroicons/react/24/outline';

export default function UploadTab() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('Files dropped:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const connectors = [
    { name: 'Tableau', icon: CircleStackIcon },
    { name: 'Blob Storage', icon: CloudArrowUpIcon },
    { name: 'Databricks', icon: ArrowPathIcon },
  ];

  return (
    <div className="space-y-8">
      <div {...getRootProps()} className="cursor-pointer">
        <div className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
          isDragActive ? 'border-purple-500 bg-purple-500/10' : 'border-gray-600 hover:border-purple-500'
        }`}>
          <input {...getInputProps()} />
          <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-4 text-lg text-gray-300">
            {isDragActive ? 'Drop your CSV file here' : 'Drag & drop your CSV file here, or click to select'}
          </p>
          <p className="mt-2 text-sm text-gray-500">CSV files only</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Connect to Data Sources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {connectors.map((connector) => (
            <button
              key={connector.name}
              className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
            >
              <connector.icon className="h-6 w-6 text-purple-400" />
              <span className="text-gray-200">{connector.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}