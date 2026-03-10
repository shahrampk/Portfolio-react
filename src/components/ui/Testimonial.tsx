import SectionHeading from "../SectionHeading";
import TestimonialsCard from "../TestimonialCard";

interface TestimonialType {
  id: number;
  name: string;
  role: string;
  avatarPath: string;
  feedback: string;
  rating: number;
  isCentered: boolean;
}

const testimonialsData: TestimonialType[] = [
  {
    id: 1,
    name: "Zoya Noor",
    role: "Lead Product Designer",
    avatarPath: "/peopleImage/people-3.jpg",
    feedback:
      "I worked with him on several college projects, and he always delivered clean and well-structured code. He’s reliable and pays attention to small details.",
    rating: 5,
    isCentered: false,
  },
  {
    id: 2,
    name: "Ahmad Ali",
    role: "Senior Full-Stack Engineer",
    avatarPath: "/peopleImage/people-1.jpg",
    feedback:
      "Working with him on our web development assignment was great. He focuses on good design and makes sure the user experience is smooth.",
    rating: 5,
    isCentered: true,
  },
  {
    id: 3,
    name: "Rida Fatima",
    role: "Marketing Director",
    avatarPath: "/peopleImage/people-2.jpg",
    feedback:
      "He takes his development work seriously and always tries to improve his projects. I like how he focuses on both design and functionality.",
    rating: 5,
    isCentered: false,
  },
];

function testimonial() {
  return (
    <div className="flex flex-col gap-20 container mx-auto px-4 ">
      <SectionHeading
        subTitle1="People's"
        subTitle2="Testimonials"
        mainTitle="See what People says"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonialsData.map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            testimonialDetails={testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export default testimonial;
