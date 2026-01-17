import { Card, CardContent } from "@/components/ui/card"
import { Truck, ShieldCheck, BadgeCheck, RefreshCcw } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable delivery all over the country.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Your payment information is fully protected.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Products",
    description: "We provide only trusted and verified products.",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full mt-10">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Why Choose Shop Mart
          </h2>
          <p className="mt-4 text-foreground/50 text-sm md:text-base max-w-2xl mx-auto">
            We make online shopping simple, safe, and enjoyable for everyone.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="hover:shadow-lg transition bg-card">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-secondary/5 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-secondary/90" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}
