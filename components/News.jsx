import Image from "next/image";
import { newsData } from "../constance/constance.js";

const News = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-600">News</h2>
          <div className="w-10 h-1 bg-red-600 mx-auto mt-2" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {newsData.map((item) => (
            <div key={item.id} className="relative">

              {/* IMAGE SECTION */}
              <div className="relative h-64 w-full overflow-hidden ">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT SECTION (OVERLAY) */}
              <div className="bg-white shadow-lg p-6 -mt-4 relative z-20  ">
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 mb-3">
                  {item.date}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
