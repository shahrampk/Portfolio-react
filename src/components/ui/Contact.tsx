import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import SectionHeading from "../SectionHeading";

const WHATSAPP_NUMBER: string = "923243928582"; // +923243928582 without +

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      subject && `Subject: ${subject}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
    const encoded = encodeURIComponent(
      text || "Hello! I'd like to get in touch.",
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contact-section"
      className="flex flex-col gap-20 container mx-auto px-4"
    >
      <SectionHeading subTitle1="Let's" subTitle2="Work" mainTitle="Together" />
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16 items-center">
        {/* Left column - Contact info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-emerald-500 text-lg font-medium">
              — Information
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-white-50">
              Get In Touch
            </h2>
          </div>
          <p className="text-neutral-gray-100/90 text-base leading-relaxed max-w-lg">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Send me a message and I'll get back to you as soon as possible.
          </p>

          <ul className="flex flex-col gap-6 text-neutral-white-200/90">
            <li className="flex gap-4">
              <span className="shrink-0 mt-1 text-neutral-white-200">
                <FaMapMarkerAlt className="w-5 h-5" />
              </span>
              <div>
                <p className="font-medium text-lg text-neutral-white-50">
                  Address
                </p>
                <p className="text-neutral-gray-100/90 text-sm mt-0.5">
                  Gujarat, Pakistan <br /> Also Available for remote work
                  worldwide
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 mt-1 text-neutral-white-200">
                <FaEnvelope className="w-5 h-5" />
              </span>
              <div>
                <p className="font-medium text-neutral-white-100">
                  Email Address
                </p>
                <p className="text-neutral-gray-100/90 text-sm mt-0.5">
                  mshahram574@gmail.com
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 mt-1 text-neutral-white-200">
                <FaPhoneAlt className="w-5 h-5" />
              </span>
              <div>
                <p className="font-medium text-neutral-white-100">
                  Phone number
                </p>
                <p className="text-neutral-gray-100/90 text-sm mt-0.5">
                  +92 324 3928582
                </p>
                <p className="text-neutral-gray-200/80 text-xs mt-0.5">
                  Available for calls & WhatsApp
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-neutral-gray-900/60 border border-neutral-gray-700/60 p-6 md:p-8 backdrop-blur-sm">
          <form onSubmit={handleSendMessage} className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-neutral-gray-800/80 border border-neutral-gray-600/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-gray-800/80 border border-neutral-gray-600/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors"
              required
            />

            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-neutral-gray-800/80 border border-neutral-gray-600/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-neutral-gray-800/80 border border-neutral-gray-600/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors"
              required
            />
            {/* </div> */}
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="col-span-2 bg-neutral-gray-800/80 border border-neutral-gray-600/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-colors resize-none"
              required
            />
            <button
              type="submit"
              className="col-span-2 mt-2 sm:w-auto transition-colors duration-200 bg-emerald-700 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg cursor-pointer"
            >
              Send A Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
