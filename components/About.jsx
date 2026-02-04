import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-600">About Us</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-2" />
        </div>

        {/* PHASE 1 — TEXT LEFT | IMAGE RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Why Choose Dreamer Nihongo Academy?
            </h3>
            <p className="text-gray-600 mb-4">
              Learn Japanese in a structured, practical, and friendly
              environment guided by expert instructors.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Experienced instructors</li>
              <li>✔ JLPT-focused curriculum</li>
              <li>✔ Small group classes</li>
            </ul>
          </div>

          <div className="relative h-[320px] rounded-lg overflow-hidden">
            <Image
              src="/images/about1.jpg"
              alt="About1"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* PHASE 2 — IMAGE LEFT | TEXT RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image LEFT */}
          <div className="relative h-[320px] rounded-lg overflow-hidden">
            <Image
              src="/images/about2.jpg"
              alt="About 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Text RIGHT */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Learn with Confidence & Clarity
            </h3>
            <p className="text-gray-600 mb-4">
              Our approach emphasizes real-world communication and exam
              readiness.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Speaking-focused learning</li>
              <li>✔ JLPT & SSW preparation</li>
              <li>✔ Career guidance</li>
            </ul>
          </div>
        </div>

        {/* PHASE 3 — TEXT LEFT | IMAGE RIGHT (OPPOSITE OF PHASE 2) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              What Makes Us Different?
            </h3>
            <p className="text-gray-600 mb-4">
              We blend discipline, encouragement, and modern teaching methods
              for long-term success.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✔ Modern classrooms</li>
              <li>✔ Interactive activities</li>
              <li>✔ Personalized feedback</li>
            </ul>
          </div>

          <div className="relative h-[320px] rounded-lg overflow-hidden">
            <Image
              src="/images/about3.jpg"
              alt="About 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
