import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Rocket, Star, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const EarlyAccess = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    useCase: '',
    cloudProvider: '',
    teamSize: ''
  });

  const benefits = [
    {
      icon: Star,
      title: "Exclusive Beta Access",
      description: "Be among the first to experience CloudAI's revolutionary platform"
    },
    {
      icon: Users,
      title: "Direct Founder Access",
      description: "Regular feedback sessions and direct line to our founding team"
    },
    {
      icon: Zap,
      title: "Priority Feature Requests",
      description: "Your feedback shapes our product roadmap and development priorities"
    }
  ];

  const stats = [
    { number: "500+", label: "Beta Signups" },
    { number: "10x", label: "Faster Deployment" }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    // like Formspree, Netlify Forms, or your own API endpoint.
    console.log("Form data submitted:", formData);
    
    toast({
      title: "Welcome to CloudAI Beta! 🎉",
      description: "You're on the list! We'll email you with next steps shortly.",
    });
    
    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      useCase: '',
      cloudProvider: '',
      teamSize: ''
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <Helmet>
        <title>CloudAI Early Access - Join the Beta & Get Exclusive Benefits</title>
        <meta name="description" content="Join CloudAI's exclusive early access program. Get beta access, direct founder access, and help shape the future of cloud management." />
      </Helmet>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
              <Star className="h-4 w-4 text-emerald-400 mr-2" />
              <span className="text-sm text-emerald-400 font-medium">Limited Beta Access Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join CloudAI <span className="gradient-text">Early Access</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Be among the first to experience the future of cloud infrastructure management. 
              Get exclusive beta access, special pricing, and help shape our product roadmap.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:opacity-90 text-lg px-8 py-4"
                onClick={() => document.getElementById('signup-form').scrollIntoView({ behavior: 'smooth' })}
              >
                <Rocket className="mr-2 h-5 w-5" />
                Get Early Access
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Early Access Benefits</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Exclusive perks and benefits for our early adopters and beta users
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="signup-form" className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Request Early Access</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Fill out the form below to join our exclusive beta program
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
                    placeholder="your@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
                    placeholder="e.g., CTO, DevOps Engineer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cloudProvider" className="block text-sm font-medium mb-2">
                    Primary Cloud Provider
                  </label>
                  <select
                    id="cloudProvider"
                    name="cloudProvider"
                    value={formData.cloudProvider}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
                  >
                    <option value="">Select provider</option>
                    <option value="aws">Amazon Web Services</option>
                    <option value="azure">Microsoft Azure</option>
                    <option value="gcp">Google Cloud Platform</option>
                    <option value="multi">Multi-cloud</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="teamSize" className="block text-sm font-medium mb-2">
                    Team Size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-medium mb-2">
                  Primary Use Case *
                </label>
                <textarea
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your cloud infrastructure challenges and how you plan to use CloudAI..."
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:opacity-90 text-lg py-4"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Join Early Access Program
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EarlyAccess;