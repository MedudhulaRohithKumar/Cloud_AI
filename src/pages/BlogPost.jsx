import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { blogData } from '@/data/blogData';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p className="text-slate-400 mb-8">The blog post you're looking for does not exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - CloudAI Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-slate-900 text-white pt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Button asChild variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Link>
            </Button>
          </div>

          <article>
            <header className="mb-12 text-center">
              <div className="text-emerald-400 uppercase tracking-wider font-semibold text-sm mb-2">{post.category}</div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">{post.title}</h1>
              <div className="flex items-center justify-center space-x-6 text-slate-400">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{post.date}</span>
                </div>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none mx-auto text-slate-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
             
            <div className="mt-12 pt-8 border-t border-slate-700 flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                    <span key={index} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                    #{tag}
                    </span>
                ))}
            </div>
          </article>
        </div>
      </motion.div>
    </>
  );
};

export default BlogPost;