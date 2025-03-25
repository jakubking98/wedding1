// CeremonyDetails.tsx
import Image from "next/image";
import { WebsiteContent } from "../WebsiteContent";

// Komponent dla szczegółów ceremonii
const CeremonyDetails = () => {
  const { weddingCeremony } = WebsiteContent;
  const ceremonyImage = "/ceremony.jpg"; // Replace with your image path

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
      {/* Left Column - Image */}
      <div className="lg:w-1/2 w-full">
        <div className=" border-2 border-Pastel p-4 shadow-lg overflow-hidden z-20 rounded-3xl">
          <Image
            src={ceremonyImage}
            alt="Wedding Ceremony"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
      {/* Right Column - Text Content */}
      <div className="lg:w-2/3 w-full relative">
        {/* Changed background and text color here */}
        <div className="bg-Pastel border-2 border-Pastel p-6 md:p-12 rounded-3xl shadow-xl relative z-20">
          <div className="prose prose-sm md:prose-lg text-white font-marcellus">
            <p className="text-base md:text-lg leading-relaxed">
              {weddingCeremony.description}
            </p>
          </div>
          <div className="font-baskervville text-white space-y-4 md:space-y-8 mt-6 md:mt-12">
            <div>
              <h3 className="text-xl md:text-2xl font-marcellus text-white mb-2 md:mb-3">
                {weddingCeremony.placeName}
              </h3>
              <p className="text-sm md:text-lg italic transition-colors">
                {weddingCeremony.placeAddress}
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-marcellus text-white mb-2 md:mb-3">
                {weddingCeremony.date}
              </h3>
              <p className="text-sm md:text-lg">{weddingCeremony.time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeremonyDetails;
