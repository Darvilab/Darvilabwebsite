import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { DollarSign, Clock, Globe, TrendingUp, Zap, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NepalAdvantage() {
  const advantages = [
    {
      icon: DollarSign,
      title: 'Cost Efficiency',
      description: 'Save 50-60% compared to US/EU agencies without compromising quality.',
      stat: '60% savings',
    },
    {
      icon: Clock,
      title: 'Timezone Bridge',
      description: 'Strategic timezone overlap with both US West Coast and European markets.',
      stat: '5-8 hours overlap',
    },
    {
      icon: Globe,
      title: 'English Fluency',
      description: 'Native-level English proficiency ensures clear, effective communication.',
      stat: '100% fluency',
    },
    {
      icon: TrendingUp,
      title: 'Top Talent Pool',
      description: 'Access to highly educated engineers from premier institutions.',
      stat: 'Top 5% talent',
    },
    {
      icon: Zap,
      title: 'Rapid Scaling',
      description: 'Scale your team up or down quickly based on project needs.',
      stat: '2-week ramp-up',
    },
    {
      icon: Shield,
      title: 'Stable Infrastructure',
      description: 'Reliable power, internet, and modern facilities for uninterrupted delivery.',
      stat: '99.9% uptime',
    },
  ];

  return (
    <div className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1616386573884-22531fd226e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMG1vdW50YWlucyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjM3MjcyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nepal mountains"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="text-sm text-emerald-400">The Nepal Advantage</span>
          </div>
          <h2 className="mb-4 text-white">
            World-Class Quality,
            <br />
            Exceptional Value
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Nepal is emerging as a premier destination for software development. Discover why
            Fortune 500 companies are choosing Nepali development partners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-neutral-900/80 backdrop-blur border-neutral-800 hover:border-neutral-700 transition-all h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                        <Icon className="text-emerald-400" size={24} />
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-400">{advantage.stat}</div>
                      </div>
                    </div>
                    <h3 className="text-white mb-2">{advantage.title}</h3>
                    <p className="text-neutral-400">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-neutral-900/80 backdrop-blur border-neutral-800 overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="text-left p-6 text-white">Feature</th>
                      <th className="text-center p-6 text-white">DarviLab (Nepal)</th>
                      <th className="text-center p-6 text-neutral-500">US/EU Agencies</th>
                      <th className="text-center p-6 text-neutral-500">Freelancers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Hourly Rate', nepal: '$30-50', us: '$150-250', freelance: '$20-100' },
                      { feature: 'Quality Assurance', nepal: '✓ Dedicated QA', us: '✓ Dedicated QA', freelance: '⚠ Variable' },
                      { feature: 'Project Management', nepal: '✓ Included', us: '✓ Included', freelance: '✗ Not included' },
                      { feature: 'Communication', nepal: '✓ Real-time', us: '✓ Real-time', freelance: '⚠ Delayed' },
                      { feature: 'Scalability', nepal: '✓ Rapid', us: '⚠ Moderate', freelance: '✗ Limited' },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-neutral-800 last:border-0">
                        <td className="p-6 text-neutral-300">{row.feature}</td>
                        <td className="p-6 text-center text-emerald-400">{row.nepal}</td>
                        <td className="p-6 text-center text-neutral-500">{row.us}</td>
                        <td className="p-6 text-center text-neutral-500">{row.freelance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
