import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Play, ExternalLink } from 'lucide-react';

export function ProductShowcase() {
  const products = [
    {
      title: 'Real-Time Analytics Platform',
      description: 'Enterprise dashboard with live data streaming, custom KPIs, and AI-powered insights.',
      videoThumb: 'https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHNjcmVlbnN8ZW58MXx8fHwxNzYzNzI3MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'D3.js', 'WebSocket', 'AWS'],
    },
    {
      title: 'AI-Powered Customer Service',
      description: 'Intelligent chatbot with NLP, sentiment analysis, and multi-language support.',
      videoThumb: 'https://images.unsplash.com/photo-1580982330720-bd5e0fed108b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM2NTQwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['OpenAI', 'Python', 'FastAPI', 'Redis'],
    },
    {
      title: 'Cloud Infrastructure Manager',
      description: 'Unified platform for managing multi-cloud deployments with cost optimization.',
      videoThumb: 'https://images.unsplash.com/photo-1646153389665-c7310d17f356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzcxOTMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Kubernetes', 'Terraform', 'Go', 'Prometheus'],
    },
  ];

  return (
    <div className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
            <span className="text-sm text-green-400">Product Showcase</span>
          </div>
          <h2 className="mb-4 text-white">
            See Our Solutions in Action
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Watch video demonstrations of our enterprise solutions. See the quality and innovation we bring to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all group h-full overflow-hidden">
                <CardContent className="p-0">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-neutral-950 overflow-hidden">
                    <img
                      src={product.videoThumb}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                        <Play className="text-white ml-1" size={24} fill="white" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur px-2 py-1 rounded text-xs text-neutral-300">
                      3:24
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-white mb-2">{product.title}</h3>
                    <p className="text-neutral-400 text-sm mb-4">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 rounded bg-neutral-800 text-xs text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-neutral-800">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-white mb-4">
                Want to See a Custom Demo?
              </h3>
              <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
                Schedule a personalized demonstration tailored to your specific needs and use cases. Our team will walk you through how our solutions can address your challenges.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Request Custom Demo
                  <ExternalLink className="ml-2" size={18} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-700 hover:border-neutral-600"
                >
                  View All Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
