import Image from "next/image";
import {galleryImages} from "../constance/constance.js";



const Gallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-600">Gallery</h2>
          <div className="w-16 h-[2px] bg-red-600 mx-auto mt-2"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-4 text-center">
                <h4 className="text-sm font-semibold text-red-600">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
