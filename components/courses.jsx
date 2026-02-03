import Image from "next/image";
import { popularCourses, jlptLevels } from "../constance/constance.js";

const PopularCourses = () => {
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Courses
          </p>
          <h2 className="text-3xl md:text-2xl font-bold up">Popular Courses</h2>
        </div>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white  overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-55">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <h3 className="text-5xl leading-tight">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-200">{course.subtitle}</p>
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 mb-2 rounded-sm ">
                  {course.tag}
                </span>

                <p className=" text-md mb-2 font-semibold">{course.subtitle2}</p>
                <p className="text-gray-700 text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* LEFT RED CARD */}
          <div className="md:col-span-1 bg-red-600 text-white p-8  flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Blossom into fluency with JLPT and SSW courses
              </h3>

              <p className="text-sm leading-relaxed text-red-100">
                Master Japanese step by step with our comprehensive JLPT
                courses. From N5 to N3, improve reading, writing, speaking, and
                listening skills.
              </p>
            </div>

            <button className="mt-6  text-white bg-red-500 px-3 py-2 font-semibold hover:bg-red-700 transition rounded-full mx-6 ">
              Enroll Now
            </button>
          </div>

          {/* RIGHT JLPT LEVELS */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-12 mt-10 ">
            {jlptLevels.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-60">
                  <Image
                    src={item.image}
                    alt={item.level}
                    fill
                    className="object-cover"
                  /> {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 right-4 z-10 text-white">
                  <h3 className="text-4xl font-bold leading-tight">
                    {item.level}
                  </h3>

                 
                </div>
                  
                </div>

                <div className="p-5 text-center">
                  <h4 className="text-lg font-bold text-red-600">
                    {item.level}
                  </h4>
                  <p className="text-sm text-black font-semibold mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
