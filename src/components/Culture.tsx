import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Heart, Coffee, Trophy, Lightbulb, Users, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Culture() {
  const [activeSlide, setActiveSlide] = useState(0);

  const teamImages = [
    {
      url: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjM3MDM3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Collaborative Innovation',
      description: 'Our teams working together to solve complex challenges',
    },
    {
      url: 'https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXJzJTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzc0NDUwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Focused Development',
      description: 'Deep work sessions delivering exceptional code quality',
    },
    {
      url: 'https://images.unsplash.com/photo-1630672790237-38eeb57cb60b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtd29yayUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzNzQ0NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Strategic Planning',
      description: 'Weekly sprints and retrospectives driving continuous improvement',
    },
    {
      url: 'https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHRlYW18ZW58MXx8fHwxNzYzNjU3MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Creative Workspace',
      description: 'Modern facilities designed for productivity and inspiration',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client-First Mindset',
      description: 'Your success is our success. We go above and beyond to deliver exceptional results.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Driven',
      description: 'We stay ahead of the curve, constantly learning and adopting cutting-edge technologies.',
    },
    {
      icon: Trophy,
      title: 'Excellence Standard',
      description: 'We maintain the highest standards of code quality, security, and performance.',
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'We work as an extension of your team, fostering open communication and partnership.',
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Happy developers create better software. We invest in our team\'s well-being.',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Dedicated learning time, conferences, and certifications keep our skills sharp.',
    },
  ];

  const partnerLogos = [
    'AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes',
    'React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'TensorFlow', 'OpenAI', 'Stripe', 'Twilio', 'Salesforce',
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % teamImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [teamImages.length]);

  return (
    <div className="py-24 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4">
            <span className="text-sm text-pink-400">Our Culture</span>
          </div>
          <h2 className="mb-4 text-white">
            Built on Strong Values
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Meet the team behind the code. We're not just developers—we're partners invested in your success.
          </p>
        </motion.div>

        {/* Team Photo Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-neutral-900 border-neutral-800 overflow-hidden">
            <div className="relative h-[400px] lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={teamImages[activeSlide].url}
                    alt={teamImages[activeSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />

                  {/* Text Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-8"
                  >
                    <div className="max-w-3xl">
                      <h3 className="text-white mb-2">{teamImages[activeSlide].title}</h3>
                      <p className="text-neutral-300">{teamImages[activeSlide].description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                {teamImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-1 rounded-full transition-all ${
                      index === activeSlide ? 'w-8 bg-white' : 'w-4 bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Stats Overlay */}
              <div className="absolute top-8 right-8 bg-neutral-900/80 backdrop-blur rounded-lg p-4 z-10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-white mb-1">50+</div>
                    <div className="text-xs text-neutral-400">Team</div>
                  </div>
                  <div>
                    <div className="text-white mb-1">8+</div>
                    <div className="text-xs text-neutral-400">Avg Exp</div>
                  </div>
                  <div>
                    <div className="text-white mb-1">15+</div>
                    <div className="text-xs text-neutral-400">Tech Stack</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-all h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                      <Icon className="text-pink-400" size={24} />
                    </div>
                    <h3 className="text-white mb-2">{value.title}</h3>
                    <p className="text-neutral-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Partners - Infinite Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-white mb-2">Technology Partners & Certifications</h3>
            <p className="text-neutral-400">Trusted partnerships with industry leaders</p>
          </div>

          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10" />

            {/* Top Row - Left to Right */}
            <div className="mb-4 overflow-hidden">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 h-20 px-8 bg-neutral-900/50 border border-neutral-800 rounded-lg flex items-center justify-center min-w-[160px]"
                  >
                    <span className="text-neutral-400">{logo}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Row - Right to Left */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-8"
                animate={{
                  x: [-1920, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[...partnerLogos.reverse(), ...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 h-20 px-8 bg-neutral-900/50 border border-neutral-800 rounded-lg flex items-center justify-center min-w-[160px]"
                  >
                    <span className="text-neutral-400">{logo}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
