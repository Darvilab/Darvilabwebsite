import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Calculator, CheckCircle2, Clock, DollarSign } from 'lucide-react';

interface ProjectEstimatorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectEstimatorDialog({ open, onOpenChange }: ProjectEstimatorDialogProps) {
  const [projectType, setProjectType] = useState('web-app');
  const [complexity, setComplexity] = useState('medium');
  const [features, setFeatures] = useState<string[]>([]);
  const [teamSize, setTeamSize] = useState([3]);

  const projectTypes = [
    { id: 'web-app', label: 'Web Application', basePrice: 40000 },
    { id: 'mobile-app', label: 'Mobile App', basePrice: 50000 },
    { id: 'enterprise', label: 'Enterprise Software', basePrice: 100000 },
    { id: 'ai-ml', label: 'AI/ML Solution', basePrice: 80000 },
  ];

  const complexityLevels = [
    { id: 'simple', label: 'Simple', multiplier: 0.6 },
    { id: 'medium', label: 'Medium', multiplier: 1.0 },
    { id: 'complex', label: 'Complex', multiplier: 1.5 },
    { id: 'enterprise', label: 'Enterprise', multiplier: 2.0 },
  ];

  const availableFeatures = [
    { id: 'auth', label: 'User Authentication', cost: 3000 },
    { id: 'payment', label: 'Payment Integration', cost: 5000 },
    { id: 'analytics', label: 'Analytics Dashboard', cost: 8000 },
    { id: 'api', label: 'REST API', cost: 6000 },
    { id: 'real-time', label: 'Real-time Updates', cost: 7000 },
    { id: 'admin', label: 'Admin Panel', cost: 10000 },
  ];

  const calculateEstimate = () => {
    const selectedType = projectTypes.find((t) => t.id === projectType);
    const selectedComplexity = complexityLevels.find((c) => c.id === complexity);

    if (!selectedType || !selectedComplexity) return { cost: 0, duration: 0, team: 0 };

    let baseCost = selectedType.basePrice * selectedComplexity.multiplier;

    const featureCost = features.reduce((total, featureId) => {
      const feature = availableFeatures.find((f) => f.id === featureId);
      return total + (feature?.cost || 0);
    }, 0);

    const totalCost = baseCost + featureCost;
    const duration = Math.ceil(totalCost / (teamSize[0] * 10000));
    const team = teamSize[0];

    return { cost: totalCost, duration, team };
  };

  const estimate = calculateEstimate();

  const toggleFeature = (featureId: string) => {
    setFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((f) => f !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-neutral-950 border-neutral-800">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-2">
            <Calculator className="text-blue-400" size={24} />
            AI Project Estimator
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            Get an instant ballpark estimate for your project. Our AI analyzes your requirements to provide transparent pricing.
          </DialogDescription>
        </DialogHeader>

        <div className="grid lg:grid-cols-3 gap-8 mt-6">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Type */}
            <div>
              <Label className="text-white mb-4 block">Project Type</Label>
              <RadioGroup value={projectType} onValueChange={setProjectType}>
                <div className="grid grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <div key={type.id} className="relative">
                      <RadioGroupItem
                        value={type.id}
                        id={type.id}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={type.id}
                        className="flex items-center justify-center rounded-lg border-2 border-neutral-800 bg-neutral-900 p-3 hover:bg-neutral-800 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-500/10 cursor-pointer transition-all text-sm"
                      >
                        {type.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Complexity */}
            <div>
              <Label className="text-white mb-4 block">Complexity Level</Label>
              <RadioGroup value={complexity} onValueChange={setComplexity}>
                <div className="grid grid-cols-4 gap-3">
                  {complexityLevels.map((level) => (
                    <div key={level.id} className="relative">
                      <RadioGroupItem
                        value={level.id}
                        id={level.id}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={level.id}
                        className="flex items-center justify-center rounded-lg border-2 border-neutral-800 bg-neutral-900 p-3 hover:bg-neutral-800 peer-data-[state=checked]:border-purple-500 peer-data-[state=checked]:bg-purple-500/10 cursor-pointer transition-all text-xs"
                      >
                        {level.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Features */}
            <div>
              <Label className="text-white mb-4 block">Additional Features</Label>
              <div className="grid sm:grid-cols-2 gap-3">
                {availableFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all text-left ${
                      features.includes(feature.id)
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-neutral-800 bg-neutral-900 hover:bg-neutral-800'
                    }`}
                  >
                    <span className="text-neutral-300 text-sm">{feature.label}</span>
                    {features.includes(feature.id) && (
                      <CheckCircle2 className="text-green-500 flex-shrink-0" size={18} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Team Size */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <Label className="text-white">Team Size</Label>
                <span className="text-blue-400">{teamSize[0]} developers</span>
              </div>
              <Slider
                value={teamSize}
                onValueChange={setTeamSize}
                min={1}
                max={10}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-2">
                <span>1 dev</span>
                <span>10 devs</span>
              </div>
            </div>
          </div>

          {/* Estimate Results */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-2 border-neutral-800 rounded-lg p-6 sticky top-4"
            >
              <h3 className="text-white mb-6">Your Estimate</h3>

              <div className="space-y-6">
                {/* Cost */}
                <div>
                  <div className="flex items-center gap-2 text-neutral-400 mb-2">
                    <DollarSign size={16} />
                    <span className="text-sm">Estimated Cost</span>
                  </div>
                  <div className="text-3xl text-white mb-1">
                    ${estimate.cost.toLocaleString()}
                  </div>
                  <div className="text-xs text-neutral-500">
                    ±20% based on final requirements
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <div className="flex items-center gap-2 text-neutral-400 mb-2">
                    <Clock size={16} />
                    <span className="text-sm">Timeline</span>
                  </div>
                  <div className="text-2xl text-white mb-1">
                    {estimate.duration} months
                  </div>
                  <div className="text-xs text-neutral-500">
                    From kickoff to delivery
                  </div>
                </div>

                {/* Savings */}
                <div className="pt-6 border-t border-neutral-800">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="text-sm text-green-400 mb-1">Nepal Advantage</div>
                    <div className="text-xl text-white mb-1">
                      Save up to 60%
                    </div>
                    <div className="text-xs text-neutral-400">
                      vs US/EU agencies
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Detailed Quote
                </Button>

                <p className="text-xs text-neutral-500 text-center">
                  Final pricing determined after discovery session
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
