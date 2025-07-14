import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code, Cpu, Cloud, CheckCircle } from 'lucide-react';

const CodeBlock = ({ children }) => (
  <pre className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 overflow-x-auto">
    <code className="font-mono text-sm text-slate-300">{children}</code>
  </pre>
);

const Documentation = () => {
  const agentCapabilities = [
    "Natural Language Processing to understand user requests.",
    "Intelligent infrastructure planning and resource selection.",
    "Pre-deployment cost estimation and optimization suggestions.",
    "Automated security analysis for best practices.",
    "Terraform, CloudFormation, and ARM template export (Coming Soon).",
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - CloudAI</title>
        <meta name="description" content="Technical documentation for CloudAI, covering API overview, AI agent capabilities, and supported cloud providers." />
      </Helmet>
      <div className="w-full bg-slate-900 text-white py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">CloudAI Documentation</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
              Explore the technical details of how CloudAI works.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Code className="h-8 w-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">API Overview</h3>
              <p className="text-slate-400">Full API documentation will be available once the product is ready for public access.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Cpu className="h-8 w-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">AI Agent Capabilities</h3>
              <p className="text-slate-400">Our AI interprets and executes your requests with powerful features.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Cloud className="h-8 w-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Supported Providers</h3>
              <p className="text-slate-400">Our 1st version supports AWS, Azure, and GCP for seamless multi-cloud operations.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-white">AI Agent Capabilities</h2>
            <p className="text-slate-400 mb-6 max-w-3xl">
              Our AI agent can provision complex infrastructure from a simple, natural language description.
            </p>
            <ul className="space-y-3 mb-8 max-w-3xl">
              {agentCapabilities.map((cap, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">{cap}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-slate-400 mb-6 max-w-3xl">
              Below is an example of how you can use our SDK to deploy a web application.
            </p>

            <CodeBlock>
              <div>
                <span className="text-emerald-400">// Provision a web application stack</span>
              </div>
              <div>
                <span className="text-blue-400">const</span> <span className="text-white">response</span> = <span className="text-blue-400">await</span> <span className="text-white">cloudai</span>.<span className="text-yellow-400">provision</span>{'({'}
              </div>
              <div className="pl-5">
                <div>
                  <span className="text-red-400">"description"</span>: <span className="text-green-400">"Deploy a scalable web app with database"</span>,
                </div>
                <div>
                  <span className="text-red-400">"provider"</span>: <span className="text-green-400">"aws"</span>,
                </div>
                <div>
                  <span className="text-red-400">"region"</span>: <span className="text-green-400">"us-east-1"</span>
                </div>
              </div>
              <div>
                {'});'}
              </div>
            </CodeBlock>

            <p className="text-slate-400 mt-6 max-w-3xl">
              The agent interprets this request, generates the necessary Terraform configuration, and executes it to create the resources in your AWS account.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Documentation;