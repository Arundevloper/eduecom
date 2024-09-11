import Navbar from './_layout/Navbar';
import Footer from './_layout/Footer';
import { HomeCarousel } from './_components/HomeCarousel';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
      <HomeCarousel/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
