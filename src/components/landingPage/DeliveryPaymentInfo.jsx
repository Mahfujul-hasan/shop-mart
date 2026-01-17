import { Card, CardContent } from "@/components/ui/card";
import { Truck, CreditCard, ShieldCheck } from "lucide-react";

export default function DeliveryPaymentInfo() {
  const infos = [
    {
      title: "Fast Delivery",
      description:
        "Get your orders delivered quickly and safely to your doorstep.",
      icon: <Truck className="w-6 h-6" />,
      bg: "bg-gradient-to-tr from-green-400 to-green-600",
    },
    {
      title: "Secure Payment",
      description:
        "We use trusted payment gateways to keep your transactions safe.",
      icon: <CreditCard className="w-6 h-6" />,
      bg: "bg-gradient-to-tr from-blue-400 to-blue-600",
    },
    {
      title: "Easy Returns",
      description:
        "Hassle-free returns within 30 days for all eligible products.",
      icon: <ShieldCheck className="w-6 h-6" />,
      bg: "bg-gradient-to-tr from-pink-400 to-pink-600",
    },
  ];

  return (
    <section id="delivery-and-payment-info" className="w-full mt-10">
      <div className="px-5">

        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Delivery & Payment Info
          </h2>
          <p className="mt-4 text-foreground/50 max-w-xl mx-auto text-base md:text-lg">
            Everything you need to know about how we deliver and accept payments.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {infos.map((info, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:scale-105 transition-transform duration-300 border-0 rounded-lg"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                {/* Icon */}
                <div
                  className={`w-16 h-16 mb-5 rounded-full flex items-center justify-center ${info.bg} shadow-lg`}
                >
                  {info.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {info.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-foreground/70">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
