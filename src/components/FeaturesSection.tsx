import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { CheckCircle, Rocket, ShieldCheck } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturesSectionProps {
  features: Feature[];
  className?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features, className }) => {
  return (
    <section className={cn('container py-12', className)}>
      <h2 className="text-3xl font-semibold text-center mb-8 dark:text-primary-foreground">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <feature.icon className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg font-medium">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;


// Example Usage
interface Props {

}
export const Example = (props: Props) => {

  const featuresData: Feature[] = [
    {
      title: 'Enhanced Security',
      description: 'Advanced security measures to protect your data and ensure privacy.',
      icon: ShieldCheck,
    },
    {
      title: 'Blazing Fast Performance',
      description: 'Experience lightning-fast speeds and optimized performance for seamless operations.',
      icon: Rocket,
    },
    {
      title: 'Complete Solution',
      description: 'All-in-one solution designed to streamline your workflow and boost productivity.',
      icon: CheckCircle,
    },
  ];
  return (
    <FeaturesSection features={featuresData} />
  )
}