import { motion } from 'motion/react';
import { Code, Cloud, Smartphone, Brain, Database, Lock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Enterprise-grade applications built with cutting-edge technologies. Full-stack expertise from React to Node.js, Python to Go.',
      technologies: ['React', 'Node.js', 'Python', 'TypeScript'],
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture & DevOps',
      description: 'Scalable cloud infrastructure on AWS, Azure, and GCP. CI/CD pipelines, containerization, and infrastructure as code.',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by AI/ML. Computer vision, NLP, predictive analytics, and custom model development.',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android. Seamless experiences with React Native and Flutter.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    },
    {
      icon: Database,
      title: 'Data Engineering & Analytics',
      description: 'Transform data into insights. ETL pipelines, data warehousing, real-time analytics, and BI dashboards.',
      technologies: ['PostgreSQL', 'MongoDB', 'Snowflake', 'Tableau'],
    },
    {
      icon: Lock,
      title: 'Cybersecurity & Compliance',
      description: 'Enterprise-grade security and compliance. GDPR, SOC 2, penetration testing, and security audits.',
      technologies: ['OAuth', 'JWT', 'Encryption', 'OWASP'],
    },
  ];

  return (
    <div className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-20">
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 800,
              opacity: 0.2,
            }}
            animate={{
              y: [null, Math.random() * 800],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{ top: '10%', left: '10%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{ bottom: '10%', right: '10%' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-sm text-blue-400">Our Expertise</span>
          </div>
          <h2 className="mb-4 text-white">
            Comprehensive Technology Services
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            End-to-end solutions tailored for enterprise needs. From ideation to deployment and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-all group h-full backdrop-blur">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-blue-400" size={28} />
                    </div>
                    <h3 className="mb-3 text-white">{service.title}</h3>
                    <p className="text-neutral-400 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full bg-neutral-800 text-xs text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-neutral-400 mb-4">Need something specific?</p>
          <button className="text-blue-400 hover:text-blue-300 transition-colors">
            Discuss Your Custom Requirements →
          </button>
        </motion.div>
      </div>
    </div>
  );
}