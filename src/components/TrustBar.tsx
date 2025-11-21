import { motion } from 'motion/react';
import { Shield, Award, Users, TrendingUp, Star, Globe } from 'lucide-react';

export function TrustBar() {
  const stats = [
    { 
      icon: Users, 
      value: '50+', 
      label: 'Enterprise Clients',
      description: 'Fortune 500 & Scale-ups'
    },
    { 
      icon: TrendingUp, 
      value: '200+', 
      label: 'Projects Delivered',
      description: 'Across 15 Countries'
    },
    { 
      icon: Star, 
      value: '98%', 
      label: 'Client Retention',
      description: 'Year over Year'
    },
    { 
      icon: Award, 
      value: '15+', 
      label: 'Years Experience',
      description: 'In Enterprise Software'
    },
    { 
      icon: Shield, 
      value: 'ISO 27001', 
      label: 'Security Certified',
      description: 'Enterprise-Grade'
    },
    { 
      icon: Globe, 
      value: '$50M+', 
      label: 'Revenue Generated',
      description: 'For Our Clients'
    },
  ];

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-blue-950/20 to-neutral-950" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-white mb-2">Trusted by Leaders Worldwide</h3>
          <p className="text-neutral-400">Proven track record of excellence and innovation</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur border border-neutral-800 group-hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="text-blue-400 group-hover:text-blue-300" size={24} />
                    </div>
                    <div className="text-white mb-1 bg-gradient-to-r from-white to-blue-200 bg-clip-text group-hover:text-transparent transition-all">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-300 mb-1">{stat.label}</div>
                    <div className="text-xs text-neutral-500">{stat.description}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}