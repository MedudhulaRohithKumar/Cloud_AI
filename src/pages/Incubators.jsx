import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Lightbulb, Rocket, DollarSign, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Incubators = () => {
  const { toast } = useToast();

  const fundingPhases = [
    { phase: "Phase 1 (MVP - AWS)", amount: "$850K" },
    { phase: "Phase 2 (Azure + Multi-Cloud)", amount: "$1.1M" },
    { phase: "Phase 3 (GCP + Enterprise)", amount: "$1.25M" },
  ];

  const handleContact = () => {
    toast({
      title: "Partnership Inquiry Sent!",
      description: "Thank you for your interest! Our team will be in touch with you shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <Helmet>
        <title>For Incubators - CloudAI by Concepts of Cloud</title>
        <meta name="description" content="CloudAI is seeking seed funding and incubation support to finalize our MVP. Learn about our mission, tech readiness, and funding requirements." />
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
              Partner with <span className="gradient-text">CloudAI</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              We are seeking seed funding and incubation support to finalize our MVP and expand early access trials.
            </p>
            <Button 
              size="lg" 
              onClick={handleContact}
              className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:opacity-90 text-lg px-8 py-4"
            >
              <Lightbulb className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Why Incubate Us?</h2>
              <p className="text-slate-300">CloudAI is on a mission to democratize cloud infrastructure with AI. We solve a real and growing pain point in cloud adoption for startups and enterprises alike. With a unique product vision, a defined roadmap, and clear differentiation, we’re ready to accelerate with the right ecosystem partners.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Our Technical Readiness</h2>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2"><CheckCircle className="text-emerald-400 mt-1 h-5 w-5 flex-shrink-0" /><span>Core AI agent for AWS provisioning is in prototyping stage.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="text-emerald-400 mt-1 h-5 w-5 flex-shrink-0" /><span>Modular architecture ready for Azure and GCP integration.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="text-emerald-400 mt-1 h-5 w-5 flex-shrink-0" /><span>Designed with microservices, scalable orchestration, and security-first principles.</span></li>
              </ul>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="glass-effect rounded-2xl p-8 mt-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Funding Requirements</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {fundingPhases.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    {index === 0 && <Rocket className="h-10 w-10 text-emerald-400" />}
                    {index === 1 && <DollarSign className="h-10 w-10 text-emerald-400" />}
                    {index === 2 && <Lightbulb className="h-10 w-10 text-emerald-400" />}
                  </div>
                  <h3 className="font-bold text-lg">{item.phase}</h3>
                  <p className="text-2xl font-bold gradient-text">{item.amount}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Incubators;