import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  imageUrl,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  const { theme } = useTheme();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button href={primaryButtonLink} size="lg">
              {primaryButtonText}
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button variant="outline" href={secondaryButtonLink} size="lg">
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
        {imageUrl && (
          <div className="md:w-1/2">
            <img
              src={imageUrl}
              alt="Hero Image"
              className="rounded-lg shadow-lg w-full object-cover h-auto max-h-[500px]"
              style={{ maxHeight: "500px" }} // for older browsers
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;