import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, CheckCircle, ChevronRight, Cloud, Cpu, Eye, Target, Users, Zap } from 'lucide-react';

const Home = () => {
  const { toast } = useToast();

  const handleDemo = () => {
    toast({
      title: "🚧 Demo Coming Soon!",
      description: "Our interactive demo is under construction. Join the early access list to be notified!",
    });
  };

  const coreCapabilities = [
    "Natural Language Input → Smart Infrastructure Deployment",
    "Multi-Cloud Billing Analysis & Optimization",
    "Visual Workflows with Editable Components",
    "Cost Estimation & Recommendations",
    "Secure, Role-Based Project Management",
  ];

  const whoIsItFor = [
    { title: "Startups & SMBs", description: "Cost-effective provisioning without hiring a cloud architect." },
    { title: "DevOps Teams", description: "Faster, smarter multi-cloud deployment & monitoring." },
    { title: "Enterprises", description: "Prototype & scale complex architectures across clouds." },
    { title: "Consultants/MSPs", description: "Deliver better cloud solutions to clients with less effort." },
  ];

  const challenges = [
    { challenge: "Multi-cloud complexity", solution: "Unified dashboard + AI-powered guidance" },
    { challenge: "High cloud costs", solution: "Real-time billing analysis + optimization" },
    { challenge: "IaC scripting knowledge required", solution: "Natural language-based provisioning" },
    { challenge: "Slow manual deployments", solution: "Instant AI-generated plans & workflows" },
    { challenge: "Vendor lock-in", solution: "Cross-cloud provisioning support" },
  ];

  return (
    <>
      <Helmet>
        <title>CloudAI - AI-Powered Multi-Cloud Management</title>
        <meta name="description" content="Deploy, manage, and optimize cloud resources across AWS, Azure, and GCP with AI-driven precision — all from a single platform." />
      </Helmet>
      <div className="w-full bg-slate-900 text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative text-center py-20 md:py-32 px-4">
          <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_95%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">
              Revolutionizing Cloud Infrastructure with AI-Powered Multi-Cloud Management
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
              Deploy, manage, and optimize cloud resources across AWS, Azure, and GCP with AI-driven precision — all from a single platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" asChild className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold group">
                <Link to="/early-access">Join the Early Access List <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="text-white border-slate-600 hover:bg-slate-800 hover:text-white">
                <Link to="/investors">Download Pitch Deck</Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-slate-400" onClick={handleDemo}>
                Demo – Coming Soon
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 px-4">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <Eye className="h-8 w-8 text-emerald-400" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-slate-300">To become the world’s first fully AI-driven multi-cloud management platform that simplifies, democratizes, and automates cloud provisioning across providers.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <Target className="h-8 w-8 text-sky-400" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-slate-300">To eliminate the complexity of cloud adoption by enabling teams of all sizes to deploy and manage infrastructure intelligently — without needing deep technical expertise or provider lock-in.</p>
            </motion.div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What is <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-400">CloudAI</span>?</h2>
              <p className="max-w-3xl mx-auto text-slate-300 mb-8">CloudAI, by Concepts of Cloud, is an intelligent web-based platform designed to simplify multi-cloud infrastructure provisioning using AI, help businesses control costs across AWS, Azure, and GCP, and assist non-experts in deploying optimized cloud resources, eliminating the need for complex IaC scripts.</p>
              <div className="max-w-2xl mx-auto bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-6 text-white">Core Capabilities</h3>
                <ul className="space-y-4 text-left">
                  {coreCapabilities.map((cap, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Who It's For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whoIsItFor.map((who, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                  <h3 className="text-xl font-semibold mb-2 text-white">{who.title}</h3>
                  <p className="text-slate-400">{who.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why CloudAI */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Why CloudAI?</h2>
            <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl border border-slate-700 divide-y divide-slate-700">
              {challenges.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="grid md:grid-cols-2 p-6">
                  <div className="font-semibold text-white">{item.challenge}</div>
                  <div className="text-emerald-400 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 hidden md:inline-block" />
                    {item.solution}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-20 px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Request a Demo</h2>
            <p className="max-w-2xl mx-auto text-slate-300 mb-8">We’re finalizing our AI provisioning engine and intelligent cost estimator. Until then, join our early access list and be the first to try the platform.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" variant="outline" className="text-white border-slate-600 hover:bg-slate-800 hover:text-white" onClick={handleDemo}>
                🔜 Interactive Demo – Coming Soon
              </Button>
              <Button size="lg" asChild className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
                <Link to="/early-access">Request Early Access</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;