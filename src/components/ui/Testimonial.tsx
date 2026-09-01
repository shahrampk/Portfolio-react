import { FaStar } from "react-icons/fa";
import SectionHeading from "../SectionHeading";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "College Friend",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Working with you during college projects was always smooth. Your problem-solving skills and dedication really stand out.",
    date: "Aug 29, 2024",
  },
  {
    name: "Sneha Kapoor",
    role: "Teammate (Internship)",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "You brought clarity and structure to our team’s workflow. It made a huge difference in how efficiently we delivered results.",
    date: "Aug 29, 2024",
  },
  {
    name: "Rohan Verma",
    role: "Project Partner",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Your consistency and attention to detail helped us finish our project ahead of time. Really appreciated working with you.",
    date: "Aug 28, 2024",
  },
  {
    name: "Priya Sharma",
    role: "Freelance Client",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "You understood the requirements perfectly and delivered beyond expectations. Highly reliable and professional.",
    date: "Aug 27, 2024",
  },
];

const Stars = () => {
  return (
    <div className="flex gap-1 mt-1">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-12 px-4 md:px-10 flex flex-col gap-16">
      <SectionHeading
        subTitle1="People's"
        subTitle2="Testimonials"
        mainTitle="See what People says"
      />

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-neutral-white-900 rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-neutral-white-100">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500">{t.role}</p>
                <Stars />
              </div>
            </div>

            <p className="text-neutral-white-200 text-sm leading-relaxed mb-4">
              {t.text}
            </p>

            <span className="text-xs text-gray-400">{t.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
