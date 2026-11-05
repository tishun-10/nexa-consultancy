import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
  Send,
  Globe,
  Headphones,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Address",
    detail: "info@nexa.com",
    description: "Send us your questions anytime.",
  },
  {
    icon: Phone,
    title: "Phone Number",
    detail: "+1 (000) 000-0000",
    description: "Speak directly with our team.",
  },
  {
    icon: MapPin,
    title: "Our Location",
    detail: "Your Office Address",
    description: "Visit us for a professional discussion.",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Monday – Friday",
    description: "9:00 AM – 5:00 PM",
  },
];

const faqs = [
  {
    question: "How can I get started with NEXA?",
    answer:
      "You can contact us through our contact form or email. Share your requirements, and our team will guide you through the next steps.",
  },
  {
    question: "How do I know which service is right for me?",
    answer:
      "Tell us about your goals and challenges. We will help you identify the consultancy service that best matches your needs.",
  },
  {
    question: "Can I discuss a customized project?",
    answer:
      "Yes. You can contact our team to discuss your project idea, objectives, and specific requirements.",
  },
  {
    question: "How long does it take to receive a response?",
    answer:
      "Our team aims to respond to inquiries during regular business hours.",
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-6 py-28 text-center text-white">
        <div className="mx-auto max-w-4xl">

          <span className="mb-6 inline-block rounded-full border border-blue-300/30 bg-blue-400/10 px-5 py-2 text-sm font-semibold text-blue-200">
            Get In Touch
          </span>

          <h1 className="mb-7 text-4xl font-extrabold md:text-6xl">
            Let's Start a
            <span className="text-blue-400"> Conversation.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-blue-100">
            Have a question, an idea, or a project in mind? We would love
            to hear from you. Connect with NEXA and let's explore the
            possibilities together.
          </p>

          <div className="mt-9">
            <Link
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500"
            >
              Send Us a Message
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <span className="font-bold uppercase tracking-widest text-blue-700">
              Contact Information
            </span>

            <h2 className="mb-5 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              We'd Love to Hear From You
            </h2>

            <p className="mx-auto max-w-2xl leading-8 text-gray-600">
              Choose your preferred way to connect with our team.
              We are here to help you move forward.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon size={27} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mb-2 font-semibold text-blue-700">
                    {item.detail}
                  </p>

                  <p className="text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-gray-50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="font-bold uppercase tracking-widest text-blue-700">
              Contact Us
            </span>

            <h2 className="mb-6 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Tell Us About Your Project
            </h2>

            <p className="mb-8 leading-8 text-gray-600">
              Whether you are looking for professional guidance, business
              consultancy, project development, or strategic support,
              we are ready to listen.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <MessageSquare size={24} />
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-gray-900">
                    Share Your Ideas
                  </h3>

                  <p className="leading-7 text-gray-600">
                    Tell us what you are planning and what kind of
                    professional support you need.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Headphones size={24} />
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-gray-900">
                    Get Professional Guidance
                  </h3>

                  <p className="leading-7 text-gray-600">
                    Our team will review your inquiry and help you
                    understand the next steps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                  <Globe size={24} />
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-gray-900">
                    Explore Opportunities
                  </h3>

                  <p className="leading-7 text-gray-600">
                    Let's explore how we can work together to achieve
                    meaningful results.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-lg md:p-10">

            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              Send Us a Message
            </h3>

            <p className="mb-8 text-gray-500">
              Fill out the form below and our team will get in touch.
            </p>

            <form action="#" method="POST" className="space-y-6">

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    First Name *
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="Enter first name"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Last Name *
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Enter last name"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="example@email.com"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Select a Service *
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option>Business Consultancy</option>
                  <option>Strategic Planning</option>
                  <option>International Consultancy</option>
                  <option>Project Development</option>
                  <option>Management Consulting</option>
                  <option>Professional Advisory</option>
                  <option>Organizational Development</option>
                  <option>Research & Documentation</option>
                  <option>Partnership Development</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter message subject"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Your Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
              >
                Send Message
                <Send size={18} />
              </button>

              <p className="text-center text-xs text-gray-400">
                Your information will be used to respond to your inquiry.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">

          <div className="mb-12 text-center">
            <span className="font-bold uppercase tracking-widest text-blue-700">
              Frequently Asked Questions
            </span>

            <h2 className="mb-4 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Have Questions?
            </h2>

            <p className="text-gray-600">
              Here are some common questions about contacting our team.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-100 p-7"
              >
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  {faq.question}
                </h3>

                <p className="leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">

          <CheckCircle size={45} className="mx-auto mb-6 text-blue-400" />

          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Let's Make Your Next Step Count
          </h2>

          <p className="mb-8 leading-8 text-blue-100">
            Every great partnership starts with a conversation.
            We look forward to hearing from you.
          </p>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-blue-900 hover:bg-blue-100"
          >
            Explore Our Services
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}