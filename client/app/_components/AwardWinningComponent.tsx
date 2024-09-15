import Image from 'next/image';

const AwardWinning: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-5 px-4 sm:px-6 md:px-8">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Award Winning Toy
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-6 text-center">
        This is p tag
      </p>

      {/* Award Logos */}
      <div className="flex flex-wrap justify-center gap-6 max-w-full">
        <div className="flex items-center justify-center w-24 sm:w-32 md:w-40 lg:w-48">
          <Image
            src="/award_logo/logo1.webp"
            alt="Award Logo 1"
            width={150}
            height={50}
            layout="intrinsic"
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center w-24 sm:w-32 md:w-40 lg:w-48">
          <Image
            src="/award_logo/logo2.webp"
            alt="Award Logo 2"
            width={150}
            height={50}
            layout="intrinsic"
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center w-24 sm:w-32 md:w-40 lg:w-48">
          <Image
            src="/award_logo/logo3.webp"
            alt="Award Logo 3"
            width={150}
            height={50}
            layout="intrinsic"
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center w-24 sm:w-32 md:w-40 lg:w-48">
          <Image
            src="/award_logo/logo4.webp"
            alt="Award Logo 3"
            width={150}
            height={50}
            layout="intrinsic"
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center w-24 sm:w-32 md:w-40 lg:w-48">
          <Image
            src="/award_logo/logo5.webp"
            alt="Award Logo 3"
            width={150}
            height={50}
            layout="intrinsic"
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center w-24 sm:w-32 md:w-40 lg:w-48">
          <Image
            src="/award_logo/time_1.webp"
            alt="Award Logo 3"
            width={150}
            height={50}
            layout="intrinsic"
            className="object-contain"
          />
        </div>
        {/* Add more logos as needed */}
      </div>
    </div>
  );
};

export default AwardWinning;
