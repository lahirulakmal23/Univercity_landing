import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { aboutSections } from "../constance/constance.js";

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* SECTION TITLE */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-600">About Us</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-2" />
        </div>

        {/* CONTENT */}
        {aboutSections.map((item) => (
          <div
            key={item.id}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT */}
            <div className={item.reverse ? "md:order-2" : ""}>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

              <p className="text-gray-600 mb-6">{item.description}</p>

              <ul className="space-y-3">
                {item.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-red-600 w-5 h-5 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* IMAGE */}
            <div
              className={`relative h-[320px]  overflow-hidden ${
                item.reverse ? "md:order-1" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default AboutSection;
