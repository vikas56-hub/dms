// import { Golden } from "@/components/Golden";
// import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import "./globals.css";
// import Gallery from "@/components/Gallery";
import Map from "@/components/Map";
import { Review } from "@/components/Review";
import Room from "@/components/Room";
import Travel from "@/components/Travel";


import ImageGallery from "@/components/ImageGal";
import Story from "@/components/Story";


export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="pt-17">
          <ImageGallery />
        </div>
        <Story />
        <Room />
        <Travel />
        <Review />
        <Map />
        <Footer />
      </div>
    </>
  );
}
