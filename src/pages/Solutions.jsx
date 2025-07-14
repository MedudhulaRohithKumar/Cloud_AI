import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Rocket, Building2, Factory, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Solutions = () => {
  const { toast } = useToast();

  const solutionsData = [
    {
      icon: Rocket,
      title: "For Startups",
      description: "At CloudAI, we understand the pace and constraints startups face. Whether you're building your MVP or scaling to production, our platform removes the cloud complexity. With intuitive AI-driven provisioning, you can deploy scalable, secure infrastructure across AWS, Azure, or GCP — no need for deep cloud expertise. Focus on building your product, while we automate your infrastructure behind the scenes.",
      color: "from-blue-600 to-emerald-600"
    },
    {
      icon: Building2,
      title: "For SMBs",
      description: "CloudAI empowers SMBs to become cloud-native without needing a dedicated DevOps team. Our AI simplifies provisioning, cost tracking, and multi-cloud deployments. It ensures your operations remain cost-effective, secure, and scalable — all while providing transparency and control. Spend less time configuring, more time growing.",
      color: "from-emerald-600 to-sky-600"
    },
    {
      icon: Factory,
      title: "For Enterprises",
      description: "Enterprises require scalability, governance, and flexibility. CloudAI meets those demands by enabling intelligent multi-cloud deployment across departments, offering billing analytics, project-level access control, and infrastructure visualization. With AI-powered automation, your cloud teams become faster, leaner, and more agile — all while adhering to compliance and cost controls.",
      color: "from-sky-600 to-purple-600"
    },
    {
      icon: Users,
      title: "For DevOps Teams",
      description: "DevOps professionals can harness CloudAI to reduce provisioning time, eliminate repetitive IaC writing, and integrate cloud orchestration seamlessly. Get editable workflows, Terraform export (coming soon), API integrations, and streamlined deployment to AWS, Azure, and GCP. Whether it's CI/CD pipelines or cost analysis, CloudAI becomes your cloud co-pilot.",
      color: "from-purple-600 to-emerald-600"
    }
  ];

  const handleCTA = (solutionTitle) => {
    toast({
      title: `Interest in "${solutionTitle}" solution noted!`,
      description: "Our team will be in touch shortly to discuss your needs.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <Helmet>
        <title>CloudAI Solutions - For Startups, SMBs, Enterprises & DevOps Teams</title>
        <meta name="description" content="Discover CloudAI solutions tailored for startups, SMBs, enterprises, and DevOps teams. AI-powered cloud management for every organization size and need." />
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
              Solutions for <span className="gradient-text">Every Business</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you're a fast-growing startup or an established enterprise, 
              CloudAI has the right solution to transform your cloud operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutionsData.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 card-hover flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                </div>
                
                <p className="text-slate-300 mb-6 flex-grow">{solution.description}</p>
                
                <Button 
                  onClick={() => handleCTA(solution.title)}
                  className={`w-full mt-auto bg-gradient-to-r ${solution.color} hover:opacity-90 transition-opacity`}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;