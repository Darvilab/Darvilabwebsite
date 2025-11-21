import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      quote: "DarviLab transformed our legacy system into a modern, scalable platform. Their technical expertise and transparent communication made them feel like an extension of our team. We saw a 70% reduction in operational costs.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "FinTech Global",
      industry: "Financial Services",
      rating: 5,
    },
    {
      quote: "Working with DarviLab was a game-changer for our healthcare platform. They delivered a HIPAA-compliant solution ahead of schedule and under budget. The quality of code and attention to security details is exceptional.",
      author: "Dr. Michael Chen",
      role: "VP of Engineering",
      company: "HealthCare Plus",
      industry: "Healthcare",
      rating: 5,
    },
    {
      quote: "The Nepal advantage is real. We get Silicon Valley quality at a fraction of the cost. DarviLab's team seamlessly integrated with our processes, and the timezone overlap meant we could move faster than ever.",
      author: "Emma Rodriguez",
      role: "Head of Product",
      company: "RetailTech Corp",
      industry: "E-commerce",
      rating: 5,
    },
    {
      quote: "Best decision we made was partnering with DarviLab. Their AI/ML expertise helped us build predictive models that increased our revenue by 150%. Professional, responsive, and incredibly talented team.",
      author: "James Wilson",
      role: "CEO",
      company: "DataInsights Inc",
      industry: "Analytics",
      rating: 5,
    },
    {
      quote: "DarviLab doesn't just write code—they solve problems. Their proactive approach to identifying potential issues and suggesting improvements has been invaluable. We've been working together for 3 years now.",
      author: "Lisa Martinez",
      role: "Director of Technology",
      company: "MediaStream Global",
      industry: "Media & Entertainment",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="py-24 bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <Quote className="absolute top-20 left-10 w-32 h-32 text-blue-500" />
        <Quote className="absolute bottom-20 right-10 w-32 h-32 text-purple-500 rotate-180" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
            <span className="text-sm text-yellow-400">Client Testimonials</span>
          </div>
          <h2 className="mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the leaders who trust us with their most critical projects.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-neutral-900/50 border-neutral-800 overflow-hidden backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="relative min-h-[300px] md:min-h-[250px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0"
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl text-neutral-200 mb-8 italic leading-relaxed">
                      "{current.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <div className="text-white mb-1">{current.author}</div>
                        <div className="text-sm text-neutral-400">
                          {current.role} at {current.company}
                        </div>
                        <div className="text-xs text-neutral-500 mt-1">
                          {current.industry}
                        </div>
                      </div>

                      {/* Navigation */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={prevTestimonial}
                          className="border-neutral-700 hover:border-neutral-600"
                        >
                          <ChevronLeft size={20} />
                        </Button>
                        <div className="text-sm text-neutral-400 px-3">
                          {currentIndex + 1} / {testimonials.length}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={nextTestimonial}
                          className="border-neutral-700 hover:border-neutral-600"
                        >
                          <ChevronRight size={20} />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-blue-500'
                        : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
