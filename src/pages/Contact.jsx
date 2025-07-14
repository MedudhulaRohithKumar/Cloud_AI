import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, Send, Building2, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [activeForm, setActiveForm] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    inquiryType: 'general'
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "cloudai@conceptsofcloud.in",
      secondaryDetails: "medudhularohithkumar@gmail.com",
      description: "Get in touch for any inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 70933 39455",
      description: "Speak with our team directly"
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: "Hyderabad, Telangana, India",
      description: "Our main office location"
    }
  ];

  const formTypes = [
    {
      id: 'general',
      title: 'General Inquiries',
      icon: Mail,
      description: 'Questions about CloudAI or general support'
    },
    {
      id: 'incubators',
      title: 'For Incubators',
      icon: Building2,
      description: 'Partnership and acceleration opportunities'
    },
    {
      id: 'investors',
      title: 'For Investors',
      icon: DollarSign,
      description: 'Investment opportunities and due diligence'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully! 🚀",
      description: "Thank you for reaching out. Our team will get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      inquiryType: activeForm
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <Helmet>
        <title>Contact CloudAI - Get in Touch with Our Team</title>
        <meta name="description" content="Contact CloudAI for general inquiries, investor relations, or incubator partnerships. Reach out to our team for demos, support, and collaboration opportunities." />
      </Helmet>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your cloud infrastructure? Have questions about CloudAI? 
              We'd love to hear from you and discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 text-center card-hover"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-emerald-400 font-medium break-words">{info.details}</p>
                {info.secondaryDetails && <p className="text-emerald-400 font-medium break-words mb-2">{info.secondaryDetails}</p>}
                <p className="text-slate-400">{info.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the type of inquiry that best fits your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              {formTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    activeForm === type.id 
                      ? 'glass-effect border-emerald-400' 
                      : 'bg-slate-800/50 hover:bg-slate-700/50'
                  }`}
                  onClick={() => setActiveForm(type.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeForm === type.id 
                        ? 'bg-gradient-to-r from-blue-600 to-emerald-600' 
                        : 'bg-slate-700'
                    }`}>
                      <type.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{type.title}</h3>
                      <p className="text-slate-400 text-sm">{type.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your needs, questions, or how we can help..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:opacity-90 text-lg py-4"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Office</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Located in the tech hub of Hyderabad
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            <div className="aspect-video bg-slate-800 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">CloudAI India</h3>
                <p className="text-slate-400">Hyderabad, Telangana<br/>India</p>
                <Button 
                  className="mt-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:opacity-90"
                  onClick={() => toast({ title: "Directions coming soon! 🗺️", description: "Interactive map will be available once we finalize our office location." })}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;