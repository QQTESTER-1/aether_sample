import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import UploadTab from './components/UploadTab';
import AnalyticsTab from './components/AnalyticsTab';
import ChatTab from './components/ChatTab';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
            Aether
          </h1>
          <p className="text-gray-400 text-xl">Elevate Your Data Insights</p>
        </div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex space-x-1 rounded-xl bg-gray-800/50 p-1 backdrop-blur-sm">
            {['Upload or Connect Data', 'View Analytics', 'Chat with Data'].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-3 text-sm font-medium leading-5',
                    'ring-white/60 ring-offset-2 ring-offset-gray-800 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow'
                      : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            <AnimatePresence mode="wait">
              <Tab.Panel
                static
                as={motion.div}
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-gray-800/50 backdrop-blur-sm p-6"
              >
                {selectedIndex === 0 && <UploadTab />}
                {selectedIndex === 1 && <AnalyticsTab />}
                {selectedIndex === 2 && <ChatTab />}
              </Tab.Panel>
            </AnimatePresence>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}