import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Blog', 'Press Kit'],
    Services: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI/ML'],
    Resources: ['Case Studies', 'Documentation', 'API Reference', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white">D</span>
              </div>
              <span className="text-xl text-white tracking-tight">DarviLab</span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-sm">
              Elite software development from Nepal. Building world-class digital solutions for US and European enterprises.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="text-neutral-400" size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-neutral-500 text-sm">
            © 2024 DarviLab. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-neutral-600">Built with ❤️ in Kathmandu, Nepal</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-neutral-500">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
