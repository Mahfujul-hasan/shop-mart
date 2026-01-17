import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ShoppingCart, Truck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Browse Products",
      description:
        "Explore a wide variety of products from multiple categories and brands to find exactly what you need.",
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      bg: "bg-gradient-to-tr from-blue-400 to-blue-600",
    },
    {
      title: "Add to Cart",
      description:
        "Select your favorite products and add them to your cart with a single click, ready for checkout.",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      bg: "bg-gradient-to-tr from-purple-400 to-purple-600",
    },
    {
      title: "Fast Delivery",
      description:
        "Get your orders delivered quickly and safely to your doorstep with our reliable delivery service.",
      icon: <Truck className="w-6 h-6 text-white" />,
      bg: "bg-gradient-to-tr from-green-400 to-green-600",
    },
  ];

  return (
    <section id="how-it-works" className="w-full mt-10">
      <div className="px-5">

        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mt-4 text-foreground/50 max-w-xl mx-auto text-base md:text-lg">
            A simple 3-step process to make your shopping experience seamless.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:scale-105 transition-transform duration-300 rounded-lg border-0"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                
                {/* Step Icon */}
                <div
                  className={`w-16 h-16 mb-5 rounded-full flex items-center justify-center ${step.bg} shadow-lg`}
                >
                  {step.icon}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm md:text-base text-foreground/70">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
