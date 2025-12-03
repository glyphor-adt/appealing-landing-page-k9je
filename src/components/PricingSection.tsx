import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlanProps {
  name: string;
  price: string;
  features: string[];
  ctaText: string;
  mostPopular?: boolean;
}

const PricingSection = () => {
  const plans: PlanProps[] = [
    {
      name: "Basic",
      price: "$9/month",
      features: ["Access to core features", "10 projects"],
      ctaText: "Get Started",
    },
    {
      name: "Pro",
      price: "$29/month",
      features: [
        "All Basic features",
        "Unlimited projects",
        "Advanced analytics",
      ],
      ctaText: "Try Pro",
      mostPopular: true,
    },
    {
      name: "Enterprise",
      price: "Contact us",
      features: [
        "All Pro features",
        "Dedicated support",
        "Custom integrations",
      ],
      ctaText: "Contact Us",
    },
  ];

  return (
    <div className="container py-12 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Choose the plan that's right for you
        </h2>
        <p className="mt-4 text-muted-foreground">
          Simple, transparent pricing. No hidden fees.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn(
              "rounded-lg border shadow-sm p-6",
              plan.mostPopular ? "border-2 border-primary" : "border-border",
              "hover:shadow-md transition-shadow"
            )}
          >
            {plan.mostPopular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground py-1 px-3 rounded-tr-lg font-medium text-sm">
                Most Popular
              </div>
            )}
            <h3 className="text-lg font-semibold text-primary-foreground">
              {plan.name}
            </h3>
            <p className="mt-2 text-2xl font-bold text-primary-foreground">
              {plan.price}
            </p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-6 w-full">{plan.ctaText}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;