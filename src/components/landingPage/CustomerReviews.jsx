import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function CustomerReviews() {
  // Example reviews data
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Amazing products! Fast delivery and excellent customer service.",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Great shopping experience. Will buy again!",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Michael Lee",
      rating: 5,
      comment: "High quality products and easy checkout process.",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  // Function to render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <section id="customer-reviews" className="w-full my-10">
      <div className="px-5">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Customer Reviews
          </h2>
          <p className="mt-4 text-foreground/50 max-w-xl mx-auto">
            Hear what our happy customers have to say about us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition cursor-pointer border border-border"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                
                {/* Avatar */}
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={100}
                  height={100}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />

                {/* Name */}
                <h3 className="text-lg font-semibold text-foreground">
                  {review.name}
                </h3>

                {/* Stars */}
                <div className="flex mt-1 mb-2">{renderStars(review.rating)}</div>

                {/* Comment */}
                <p className="text-sm text-foreground/70">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
