import { Card, CardContent } from "@/components/ui/card"


export default async function ShopByCategory() {
  const res = await fetch("http://localhost:3000/api/products/category",{
    cache:"force-cache"
  });
  const categories=await res.json();
  return (
    <section id="category" className="w-full mt-10">
      <div className="px-5">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="mt-4 text-foreground/50 max-w-xl mx-auto">
            Browse products from your favorite categories.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((category, index) =>
               <Card key={index} className="group hover:shadow-lg transition cursor-pointer">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <h3 className="text-sm font-semibold text-foreground">
                      {category.category}
                    </h3>

                  </CardContent>
                </Card>

            
          )}
        </div>

      </div>
    </section>
  )
}
