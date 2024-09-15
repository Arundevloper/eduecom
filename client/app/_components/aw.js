import Link from 'next/link';

const ShopByAge: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Shop by Age</h1>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-10 text-center">
        STEAM-filled boxes of joy for 3-14 years
      </p>

      {/* Age groups */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Age 3-6 */}
        <Link href="/shop/age/3-6">
          <div className="flex items-center justify-center bg-blue-400 text-white rounded-lg h-40 w-40 transition-transform transform hover:scale-105 shadow-lg cursor-pointer">
            <span className="text-2xl font-semibold">3-6 Years</span>
          </div>
        </Link>

        {/* Age 6-8 */}
        <Link href="/shop/age/6-8">
          <div className="flex items-center justify-center bg-green-400 text-white rounded-lg h-40 w-40 transition-transform transform hover:scale-105 shadow-lg cursor-pointer">
            <span className="text-2xl font-semibold">6-8 Years</span>
          </div>
        </Link>

        {/* Age 8-10 */}
        <Link href="/shop/age/8-10">
          <div className="flex items-center justify-center bg-yellow-400 text-white rounded-lg h-40 w-40 transition-transform transform hover:scale-105 shadow-lg cursor-pointer">
            <span className="text-2xl font-semibold">8-10 Years</span>
          </div>
        </Link>

        {/* Age 10+ */}
        <Link href="/shop/age/10-plus">
          <div className="flex items-center justify-center bg-purple-400 text-white rounded-lg h-40 w-40 transition-transform transform hover:scale-105 shadow-lg cursor-pointer">
            <span className="text-2xl font-semibold">10+ Years</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ShopByAge;
