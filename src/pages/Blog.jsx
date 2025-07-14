import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Calendar, User, ArrowRight, TrendingUp, Cloud, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { blogData } from '@/data/blogData';

const Blog = () => {
  const { toast } = useToast();
  const [featuredPost, ...otherPosts] = blogData;

  const categories = [
    { name: "All Posts", icon: TrendingUp, count: blogData.length },
    { name: "AI & Cloud", icon: Brain, count: blogData.filter(p => p.category === 'AI & Cloud').length },
    { name: "DevOps", icon: Cloud, count: blogData.filter(p => p.category === 'DevOps').length },
    { name: "Security", icon: Shield, count: blogData.filter(p => p.category === 'Security').length },
    { name: "FinOps", icon: TrendingUp, count: blogData.filter(p => p.category === 'FinOps').length },
    { name: "Case Study", icon: Brain, count: blogData.filter(p => p.category === 'Case Study').length },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast({
      title: "Subscription Confirmed! 📧",
      description: "You'll receive our latest insights on cloud infrastructure and AI automation.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <Helmet>
        <title>CloudAI Blog - Thought Leadership & Product Updates</title>
        <meta name="description" content="Stay updated with CloudAI's latest insights on cloud infrastructure, AI automation, DevOps best practices, and industry thought leadership." />
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
              CloudAI <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Insights, case studies, and thought leadership on the future of 
              cloud infrastructure and AI-powered automation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img  alt={featuredPost.title} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-emerald-400 font-medium">{featuredPost.category}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-400">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex-grow">{featuredPost.title}</h2>
                <p className="text-slate-300 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{featuredPost.author}</div>
                      <div className="text-slate-400 text-sm flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                    </div>
                  </div>
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:opacity-90">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 mb-8"
              >
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 cursor-pointer transition-colors">
                      <div className="flex items-center space-x-3">
                        <category.icon className="h-5 w-5 text-emerald-400" />
                        <span>{category.name}</span>
                      </div>
                      <span className="text-slate-400 text-sm">{category.count}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.form
                onSubmit={handleSubscribe}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4">Subscribe to Updates</h3>
                <p className="text-slate-400 mb-4">Get the latest insights delivered to your inbox.</p>
                <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors mb-4" />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:opacity-90"
                >
                  Subscribe Now
                </Button>
              </motion.form>
            </aside>

            <main className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherPosts.map((post, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-effect rounded-xl overflow-hidden card-hover flex flex-col"
                  >
                    <Link to={`/blog/${post.slug}`} className="block h-full flex flex-col">
                      <div className="relative h-48">
                        <img  alt={post.title} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1665919094872-2fc89eed9e13" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-slate-900/80 text-emerald-400 px-2 py-1 rounded text-xs font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold mb-3 line-clamp-2 flex-grow">{post.title}</h3>
                        <p className="text-slate-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-slate-400 mt-auto">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Button 
                  variant="outline"
                  onClick={() => toast({ title: "You've reached the end! 📚", description: "More content is always in the works. Check back soon!" })}
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"
                >
                  Load More Posts
                </Button>
              </motion.div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;