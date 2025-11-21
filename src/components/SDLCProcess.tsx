import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Lightbulb, FileText, Code, TestTube, Rocket, LifeBuoy, CheckCircle2 } from 'lucide-react';

export function SDLCProcess() {
  const phases = [
    {
      icon: Lightbulb,
      title: 'Discovery & Planning',
      duration: '1-2 weeks',
      description: 'Deep dive into your requirements, goals, and technical needs.',
      deliverables: ['Requirements Document', 'Technical Architecture', 'Project Timeline', 'Resource Plan'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: FileText,
      title: 'Design & Prototyping',
      duration: '2-3 weeks',
      description: 'Create wireframes, UI/UX designs, and interactive prototypes.',
      deliverables: ['Wireframes', 'UI/UX Designs', 'Interactive Prototype', 'Design System'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code,
      title: 'Development',
      duration: '8-16 weeks',
      description: 'Agile development with bi-weekly sprints and continuous delivery.',
      deliverables: ['Working Software', 'Code Reviews', 'Sprint Demos', 'Documentation'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      duration: '2-4 weeks',
      description: 'Comprehensive testing including unit, integration, and end-to-end tests.',
      deliverables: ['Test Plans', 'Bug Reports', 'Performance Tests', 'Security Audit'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Rocket,
      title: 'Deployment',
      duration: '1 week',
      description: 'Seamless deployment with zero-downtime and rollback capabilities.',
      deliverables: ['Production Release', 'CI/CD Setup', 'Monitoring', 'Training'],
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: LifeBuoy,
      title: 'Support & Maintenance',
      duration: 'Ongoing',
      description: '24/7 support, bug fixes, updates, and continuous improvements.',
      deliverables: ['Bug Fixes', 'Updates', 'Performance Monitoring', 'Feature Enhancements'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <span className="text-sm text-cyan-400">Our Process</span>
          </div>
          <h2 className="mb-4 text-white">
            Proven Development Methodology
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Our battle-tested SDLC ensures predictable outcomes, transparent communication, and exceptional quality at every stage.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-all group h-full relative overflow-hidden">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm text-neutral-400">
                      {index + 1}
                    </div>

                    <CardContent className="p-6">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${phase.color} bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="text-white" size={28} />
                      </div>

                      {/* Title & Duration */}
                      <div className="mb-3">
                        <h3 className="text-white mb-1">{phase.title}</h3>
                        <div className="text-xs text-neutral-500">{phase.duration}</div>
                      </div>

                      {/* Description */}
                      <p className="text-neutral-400 text-sm mb-4">{phase.description}</p>

                      {/* Deliverables */}
                      <div>
                        <div className="text-xs text-neutral-500 mb-2">Key Deliverables:</div>
                        <div className="space-y-1">
                          {phase.deliverables.map((deliverable, dIndex) => (
                            <div key={dIndex} className="flex items-start gap-2">
                              <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                              <span className="text-xs text-neutral-400">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Key Principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-neutral-800">
              <CardContent className="p-8">
                <h3 className="text-white mb-6 text-center">Our Core Principles</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: 'Agile Methodology', desc: 'Flexible, iterative approach' },
                    { title: 'Transparent Communication', desc: 'Daily updates & demos' },
                    { title: 'Quality First', desc: 'Code reviews & testing' },
                    { title: 'Continuous Improvement', desc: 'Retrospectives & optimization' },
                  ].map((principle, index) => (
                    <div key={index} className="text-center">
                      <div className="text-white mb-2">{principle.title}</div>
                      <div className="text-sm text-neutral-400">{principle.desc}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
