import Banner from "@/components/landingPage/Banner";
import CustomerReviews from "@/components/landingPage/CustomerReviews";
import DeliveryPaymentInfo from "@/components/landingPage/DeliveryPaymentInfo";
import HowItWorks from "@/components/landingPage/HowItWorks";
import LatestProducts from "@/components/landingPage/LatestProducts";
import ShopByCategory from "@/components/landingPage/ShopByCategory";
import WhyChooseUs from "@/components/landingPage/WhyChooseUs";
export default function Home() {
  return (
    <div className="min-h-screen">
        <Banner />
        <ShopByCategory/>
        <LatestProducts/>
        <WhyChooseUs/>
        <HowItWorks/>
        <DeliveryPaymentInfo/>
        <CustomerReviews/>
    </div>
  );
}
