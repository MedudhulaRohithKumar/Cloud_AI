import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Target, Eye, Users, Award, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and cloud technology."
    },
    {
      icon: Users,
      title: "Customer Obsession",
      description: "Every decision we make is driven by our customers' success and satisfaction."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we build and deliver."
    },
    {
      icon: Rocket,
      title: "Speed & Agility",
      description: "We move fast, iterate quickly, and adapt to changing market needs."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <Helmet>
        <title>About CloudAI - Our Story, Vision & Mission</title>
        <meta name="description" content="Learn about CloudAI's mission to revolutionize cloud management with AI and discover our vision for the future of cloud infrastructure." />
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
              About <span className="gradient-text">CloudAI</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're on a mission to democratize cloud infrastructure management through 
              the power of artificial intelligence, making enterprise-grade cloud operations 
              accessible to businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  CloudAI was born from a simple observation: cloud infrastructure management 
                  was becoming increasingly complex, yet the tools available were still stuck 
                  in the past. Our founders, having spent years managing cloud operations at 
                  scale, knew there had to be a better way.
                </p>
                <p>
                  In 2024, we set out to build the world's first AI-native cloud management 
                  platform. By combining cutting-edge artificial intelligence with deep cloud 
                  expertise, we created a solution that doesn't just automate tasks—it thinks, 
                  learns, and optimizes your entire cloud infrastructure.
                </p>
                <p>
                  Today, CloudAI is trusted by startups and enterprises alike to manage billions 
                  of dollars in cloud infrastructure, delivering unprecedented cost savings and 
                  operational efficiency.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img  alt="CloudAI team working together in a modern office" className="rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-300">
                To create a world where cloud infrastructure management is so intelligent 
                and automated that businesses can focus entirely on innovation and growth, 
                rather than operational complexity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-sky-600 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-300">
                To democratize enterprise-grade cloud operations through AI-powered automation, 
                making sophisticated infrastructure management accessible to organizations of 
                all sizes and technical capabilities.
              </p>
            </motion.div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do at CloudAI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;