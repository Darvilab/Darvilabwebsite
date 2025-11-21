import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Play, CheckCircle2, Calculator } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectEstimatorDialog } from './ProjectEstimatorDialog';
import { useState } from 'react';

export function Hero() {
  const [showEstimator, setShowEstimator] = useState(false);

  const highlights = [
    'Fortune 500 Partners',
    'ISO 27001 Certified',
    '98% Client Retention',
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1646153389665-c7310d17f356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzcxOTMyNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/70 to-neutral-950" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm text-blue-400">Building the Future of Enterprise Software</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-white"
          >
            Elite Software Development
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              From the Heart of Nepal
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-neutral-300 max-w-3xl mx-auto"
          >
            We deliver world-class digital solutions to US and European enterprises.
            Combining technical excellence, cost efficiency, and transparent communication
            to transform your vision into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900 group"
              onClick={() => setShowEstimator(true)}
            >
              <Calculator className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Get Instant Estimate
            </Button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={20} />
                <span className="text-neutral-300">{highlight}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent z-10" />

      {/* Project Estimator Dialog */}
      <ProjectEstimatorDialog open={showEstimator} onOpenChange={setShowEstimator} />
    </div>
  );
}