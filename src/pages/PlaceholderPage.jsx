import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const PlaceholderPage = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title} - CloudAI</title>
        <meta name="description" content={`This is the ${title} page for CloudAI. Content is coming soon.`} />
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] bg-gray-900 text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <Construction className="h-16 w-16 mx-auto text-emerald-400" />
          <h1 className="text-4xl font-bold">Page Under Construction</h1>
          <p className="text-lg text-gray-400">The "{title}" page is coming soon. Stay tuned!</p>
        </motion.div>
      </div>
    </>
  );
};

export default PlaceholderPage;