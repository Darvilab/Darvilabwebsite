import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, TrendingUp, Clock, Users, Calendar, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState('case-studies');

  const caseStudies = [
    {
      client: 'FinTech Global',
      industry: 'Financial Services',
      title: 'AI-Powered Trading Platform',
      excerpt: 'How we helped a Fortune 500 financial services company modernize their trading infrastructure.',
      challenge: 'Legacy system unable to handle real-time data processing for 10M+ daily transactions.',
      solution: 'Built scalable microservices architecture with ML-driven analytics and sub-millisecond latency.',
      results: [
        { metric: '99.99%', label: 'Uptime', icon: TrendingUp },
        { metric: '70%', label: 'Cost Reduction', icon: TrendingUp },
        { metric: '10x', label: 'Faster Processing', icon: Clock },
      ],
      image: 'https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHNjcmVlbnN8ZW58MXx8fHwxNzYzNzI3MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Python', 'Kafka', 'Redis', 'AWS'],
      date: 'March 2024',
      readTime: '8 min',
    },
    {
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      title: 'HIPAA-Compliant Patient Portal',
      excerpt: 'Building a secure telemedicine platform serving 500K+ patients across Europe.',
      challenge: 'Needed secure, compliant telemedicine platform serving 500K+ patients across EU.',
      solution: 'Developed end-to-end encrypted platform with video consultations, EHR integration, and AI triage.',
      results: [
        { metric: '500K+', label: 'Active Users', icon: Users },
        { metric: '95%', label: 'Satisfaction Rate', icon: TrendingUp },
        { metric: '40%', label: 'Admin Time Saved', icon: Clock },
      ],
      image: 'https://images.unsplash.com/photo-1580982330720-bd5e0fed108b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM2NTQwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'Node.js', 'WebRTC', 'Azure'],
      date: 'January 2024',
      readTime: '10 min',
    },
    {
      client: 'RetailTech Corp',
      industry: 'E-commerce',
      title: 'Omnichannel Commerce Platform',
      excerpt: 'Unifying fragmented systems across 15 countries to deliver seamless customer experience.',
      challenge: 'Fragmented systems across 15 countries causing inventory and customer experience issues.',
      solution: 'Unified platform with real-time inventory, personalized recommendations, and multi-currency support.',
      results: [
        { metric: '150%', label: 'Sales Increase', icon: TrendingUp },
        { metric: '60%', label: 'Cart Abandonment Drop', icon: TrendingUp },
        { metric: '8x', label: 'ROI in Year 1', icon: TrendingUp },
      ],
      image: 'https://images.unsplash.com/photo-1622127800587-1ce716f1981e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYzNjIxNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'GCP'],
      date: 'November 2023',
      readTime: '7 min',
    },
  ];

  const blogPosts = [
    {
      title: 'Why Nepal is Becoming a Tech Hub for US & EU Companies',
      excerpt: 'Exploring the factors driving Fortune 500 companies to partner with Nepali development teams.',
      image: 'https://images.unsplash.com/photo-1616386573884-22531fd226e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMG1vdW50YWlucyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjM3MjcyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Industry Insights',
      date: 'April 15, 2024',
      readTime: '5 min',
      author: 'Rajesh Kumar',
    },
    {
      title: 'Microservices vs Monolithic: Choosing the Right Architecture',
      excerpt: 'A comprehensive guide to help CTOs make informed architectural decisions for their next project.',
      image: 'https://images.unsplash.com/photo-1646153389665-c7310d17f356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzcxOTMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Technical',
      date: 'April 10, 2024',
      readTime: '12 min',
      author: 'Priya Sharma',
    },
    {
      title: 'The ROI of Investing in AI/ML for Your Business',
      excerpt: 'Real numbers and case studies showing how AI investments pay off in the first year.',
      image: 'https://images.unsplash.com/photo-1580982330720-bd5e0fed108b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM2NTQwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Business',
      date: 'April 5, 2024',
      readTime: '8 min',
      author: 'Amit Patel',
    },
    {
      title: 'Security Best Practices for Enterprise Applications',
      excerpt: 'Essential security measures every enterprise should implement to protect their digital assets.',
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjM3MTgzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Security',
      date: 'March 28, 2024',
      readTime: '10 min',
      author: 'Sarah Johnson',
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <span className="text-sm text-purple-400">Success Stories & Insights</span>
          </div>
          <h2 className="mb-4 text-white">
            Real Results & Expert Insights
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Explore our case studies and thought leadership articles on technology, business strategy, and industry trends.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-neutral-900">
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            <TabsTrigger value="blog">Blog & Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="case-studies">
            <div className="grid lg:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all group h-full overflow-hidden">
                    <div className="relative aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur text-xs text-neutral-300">
                        {study.industry}
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {study.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {study.readTime}
                        </div>
                      </div>

                      <h3 className="text-white mb-2">{study.title}</h3>
                      <p className="text-neutral-400 text-sm mb-4">{study.excerpt}</p>

                      {/* Quick Results */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {study.results.map((result, rIndex) => (
                          <div key={rIndex} className="text-center p-2 bg-neutral-800/50 rounded">
                            <div className="text-green-400 text-sm mb-1">{result.metric}</div>
                            <div className="text-xs text-neutral-500">{result.label}</div>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-neutral-800 transition-colors"
                      >
                        Read Case Study
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blog">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all group h-full overflow-hidden">
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className="md:col-span-2 relative aspect-video md:aspect-auto overflow-hidden">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-neutral-900 to-transparent" />
                      </div>

                      <CardContent className="md:col-span-3 p-6">
                        <div className="flex items-center gap-3 text-xs mb-3">
                          <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 flex items-center gap-1">
                            <Tag size={12} />
                            {post.category}
                          </span>
                          <span className="text-neutral-500">{post.date}</span>
                          <span className="text-neutral-500">{post.readTime}</span>
                        </div>

                        <h3 className="text-white mb-2">{post.title}</h3>
                        <p className="text-neutral-400 text-sm mb-4">{post.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-neutral-500">By {post.author}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group-hover:bg-neutral-800 transition-colors"
                          >
                            Read More
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-neutral-700 hover:border-neutral-600"
          >
            View All {activeTab === 'case-studies' ? 'Case Studies' : 'Articles'}
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}