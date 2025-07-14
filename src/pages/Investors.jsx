import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Download, TrendingUp, CheckCircle, XCircle, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Investors = () => {
  const { toast } = useToast();

  const handlePitchDownload = () => {
    toast({
      title: "Pitch Deck Request Received! 📊",
      description: "Our investor relations team will send you the complete pitch deck shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <Helmet>
        <title>CloudAI Investors - Market Opportunity, Business Model & Pitch Deck</title>
        <meta name="description" content="Discover CloudAI's investment opportunity. Download our pitch deck, explore market size, business model, and connect with our founding team." />
      </Helmet>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Invest in the <span className="gradient-text">Future of Cloud</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              CloudAI is poised to solve critical inefficiencies in a rapidly growing multi-billion dollar market.
            </p>
            <Button 
              size="lg" 
              onClick={handlePitchDownload}
              className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:opacity-90 text-lg px-8 py-4"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Pitch Deck
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="glass-effect rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Market Opportunity</h2>
            <p className="text-center text-slate-300 max-w-4xl mx-auto mb-8">The global cloud management market is valued at <span className="text-emerald-400 font-bold">$28.1B in 2024</span>, projected to grow at <span className="text-emerald-400 font-bold">16.8% CAGR</span>. 74% of enterprises operate in multi-cloud environments, yet 63% lack effective cross-cloud tools. CloudAI addresses major pain points like overspending, lack of skilled personnel, and slow deployment cycles.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="p-4">Feature</th>
                    <th className="p-4">Traditional CMPs</th>
                    <th className="p-4">IaC Tools</th>
                    <th className="p-4 font-bold gradient-text">CloudAI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700">
                    <td className="p-4">AI-Driven Provisioning</td>
                    <td className="p-4"><XCircle className="text-red-500 mx-auto" /></td>
                    <td className="p-4"><XCircle className="text-red-500 mx-auto" /></td>
                    <td className="p-4"><CheckCircle className="text-emerald-400 mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-4">Multi-Cloud Workflows</td>
                    <td className="p-4">Manual / Limited</td>
                    <td className="p-4"><XCircle className="text-red-500 mx-auto" /></td>
                    <td className="p-4">Intelligent</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-4">Cost Visibility</td>
                    <td className="p-4">Post-deployment</td>
                    <td className="p-4"><XCircle className="text-red-500 mx-auto" /></td>
                    <td className="p-4">Pre-deployment</td>
                  </tr>
                  <tr>
                    <td className="p-4">Learning Curve</td>
                    <td className="p-4">40–80 hrs</td>
                    <td className="p-4">100+ hrs</td>
                    <td className="p-4">2–5 hrs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="glass-effect rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Business Model</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <DollarSign className="h-10 w-10 mx-auto mb-2 text-emerald-400" />
                <h3 className="font-bold text-lg">Subscription SaaS</h3>
                <p className="text-slate-400 text-sm">Tiered access for startups, prosumers, and enterprises.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-10 w-10 mx-auto mb-2 text-emerald-400" />
                <h3 className="font-bold text-lg">AI Query Allowances</h3>
                <p className="text-slate-400 text-sm">Usage-based billing on advanced provisioning intelligence.</p>
              </div>
              <div className="text-center">
                <Users className="h-10 w-10 mx-auto mb-2 text-emerald-400" />
                <h3 className="font-bold text-lg">Marketplace Revenue</h3>
                <p className="text-slate-400 text-sm">Share from third-party tool integrations.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-10 w-10 mx-auto mb-2 text-emerald-400" />
                <h3 className="font-bold text-lg">Premium Support</h3>
                <p className="text-slate-400 text-sm">SLA-bound service levels and compliance support.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }} className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Founder's Note</h2>
            <blockquote className="text-center text-lg italic text-slate-300 max-w-3xl mx-auto">
              “Cloud provisioning should be simple, intelligent, and accessible — not a bottleneck. We created CloudAI to empower teams of all sizes to deploy infrastructure with confidence and speed, powered by AI. Our vision is not to replace DevOps, but to elevate them — by removing the noise and letting them focus on strategy.”
            </blockquote>
            <p className="text-center mt-4 font-bold text-emerald-400">— Team CloudAI, Concepts of Cloud</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Investors;