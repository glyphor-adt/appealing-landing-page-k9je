import React from "react";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  avatarUrl?: string;
  testimonial: string;
  rating?: number; // Optional rating (e.g., out of 5)
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, className }) => {
  return (
    <div className={cn("container py-8", className)}>
      <h2 className="text-3xl font-semibold text-center mb-8 dark:text-zinc-100">What Our Customers Say</h2>

      {testimonials.length > 0 ? (
        <Carousel
          className="w-full max-w-5xl mx-auto"
          opts={{
            loop: true,
            align: "start",
            startIndex: 0,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        {testimonial.avatarUrl ? (
                          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                        ) : (
                          <AvatarFallback>{testimonial.name.charAt(0).toUpperCase()}</AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg font-medium">{testimonial.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{testimonial.testimonial}</p>

                    {testimonial.rating && (
                      <div className="mt-2 flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 0l2.928 6.072L20 7.279l-4.572 4.421L16.18 20 10 16.279 3.82 20l.572-8.299L0 7.279l7.072-1.207L10 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4 text-gray-300 dark:text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 0l2.928 6.072L20 7.279l-4.572 4.421L16.18 20 10 16.279 3.82 20l.572-8.299L0 7.279l7.072-1.207L10 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
        </Carousel>
      ) : (
        <p className="text-center text-muted-foreground">No testimonials available.</p>
      )}
    </div>
  );
};

export default Testimonials;