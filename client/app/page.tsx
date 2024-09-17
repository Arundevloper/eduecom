import Navbar from "./_layout/Navbar";
import Footer from "./_layout/Footer";
import HomeCarousel from "./_components/HomeCarousel";
import ShopByAge from "./_components/ShopByAge";
import AwardWinningComponent from "./_components/AwardWinningComponent";
import ShopByPrice from "./_components/ShopByPrice";
import LatestArrivals from "./_components/LatestArrivals";
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
       <HomeCarousel/>
       <ShopByAge/>
       <LatestArrivals/>
       <ShopByPrice/>
       <AwardWinningComponent/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
