import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { BrainCircuit, BarChart2, FileText, Settings, Play, CheckCircle, ArrowRight } from 'lucide-react';

const Product = () => {
  const { toast } = useToast();

  const handleDemo = () => {
    toast({
      title: "🚧 Demo Coming Soon!",
      description: "Our interactive demo is under construction. Join the early access list to be notified!",
    });
  };

  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Provisioning Agent",
      description: "Understands natural language inputs, suggests infrastructure plans, estimates costs, and supports multi-cloud strategies."
    },
    {
      icon: BarChart2,
      title: "Multi-Cloud Billing Dashboard",
      description: "Central dashboard for viewing spend across AWS, Azure, and GCP with breakdowns by service, project, and tags."
    },
    {
      icon: FileText,
      title: "Excel-Based Resource Import",
      description: "For non-technical users. Download a template, fill in requirements, and upload to trigger provisioning."
    },
    {
      icon: Settings,
      title: "Guided Provisioning (No AI)",
      description: "For technical users who want control. Select provider, pick services, fill a form, and deploy using prebuilt templates."
    },
  ];

  const howItWorks = [
    { step: 1, title: "Log in & Create a Project", description: "Manage multiple cloud environments from a single dashboard." },
    { step: 2, title: "Describe What You Need", description: "Use natural language or guided form-based provisioning." },
    { step: 3, title: "Let AI Generate the Plan", description: "Our AI agent parses your input and generates a full infrastructure plan with cost estimates." },
    { step: 4, title: "Review & Customize", description: "Adjust resource parameters, remove or add components, and switch between cloud providers." },
    { step: 5, title: "Deploy", description: "CloudAI executes the plan via secure cloud provider APIs. Monitor progress in real time." },
    { step: 6, title: "Analyze", description: "Use the Billing Dashboard to track costs and get alerts on unusual spend (coming soon)." },
  ];

  return (
    <>
      <Helmet>
        <title>Product - CloudAI</title>
        <meta name="description" content="Explore the core features of CloudAI, including our AI-Powered Provisioning Agent, Multi-Cloud Billing Dashboard, and more." />
      </Helmet>
      <div className="w-full bg-slate-900 text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative text-center py-20 md:py-28 px-4">
          <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_95%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">
              The Future of Cloud Management is Here
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
              Discover how CloudAI's intelligent features simplify complexity, optimize costs, and accelerate your deployment cycles.
            </p>
          </motion.div>
        </section>

        {/* Product Features */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Product Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">How CloudAI Works</h2>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-5 bottom-5 w-0.5 bg-slate-700 hidden md:block" aria-hidden="true"></div>
              <div className="space-y-12">
                {howItWorks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="md:flex items-center justify-center relative"
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'}`}>
                      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                        <h3 className="text-xl font-bold mb-2 text-emerald-400">Step {item.step}: {item.title}</h3>
                        <p className="text-slate-300">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white font-bold text-xl z-10 flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo CTA */}
        <section className="py-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 container mx-auto p-12 rounded-2xl border border-slate-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">CloudAI Demo – Coming Soon!</h2>
            <p className="max-w-2xl mx-auto text-slate-300 mb-8">We’re building something big! Sign up for early access and we’ll notify you as soon as the demo is live.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" asChild className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold group">
                <Link to="/early-access">Join Early Access <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-slate-600 hover:bg-slate-800 hover:text-white" onClick={handleDemo}>
                <Play className="mr-2 h-5 w-5" /> Watch Teaser
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Product;