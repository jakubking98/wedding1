import Image from "next/image";
import { WebsiteContent } from "../WebsiteContent";

const ReceptionDetails = () => {
  const { weddingReception } = WebsiteContent;
  const receptionImage = "/weddingSection.jpg";

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
      <div className="lg:w-2/3 w-full relative">
        <div className="bg-Pastel border-2 border-Pastel p-6 md:p-12 rounded-3xl shadow-xl relative z-20">
          <div className="prose prose-sm md:prose-lg text-white font-marcellus">
            <p className="text-base md:text-lg leading-relaxed">
              {weddingReception.description}
            </p>
            <p className="text-sm md:text-base italic">
              {weddingReception.dressCode}
            </p>
          </div>
          <div className="font-baskervville text-white space-y-4 md:space-y-8 mt-6 md:mt-12">
            <div>
              <h3 className="text-xl md:text-2xl font-marcellus text-white mb-2 md:mb-3">
                {weddingReception.placeName}
              </h3>
              <p className="text-sm md:text-lg italic transition-colors">
                {weddingReception.placeAddress}
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-marcellus text-white mb-2 md:mb-3">
                {weddingReception.date}
              </h3>
              <p className="text-sm md:text-lg">{weddingReception.time}</p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-marcellus text-white mb-2 md:mb-3">
                {weddingReception.additionalInfoTitle}
              </h3>
              <p className="text-sm md:text-lg">
                {weddingReception.additionalInfo}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full">
        <div className=" border-2 border-Pastel p-4 shadow-lg overflow-hidden z-20 rounded-3xl">
          <Image
            src={receptionImage}
            alt="Wedding Reception"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ReceptionDetails;
