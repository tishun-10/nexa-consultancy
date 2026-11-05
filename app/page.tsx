import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Globe,
  Lightbulb,
  ShieldCheck,
  Users,
  Target,
  Award,
  CheckCircle,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Business Consultancy",
    description:
      "Professional guidance to help businesses improve operations, solve challenges, and achieve sustainable growth.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Strategic Planning",
    description:
      "Develop effective strategies, identify opportunities, and build a clear roadmap for your future.",
  },
  {
    icon: Globe,
    title: "International Consultancy",
    description:
      "Explore international opportunities with professional guidance and strategic support.",
  },
  {
    icon: Lightbulb,
    title: "Project Development",
    description:
      "Transform ideas into practical projects through planning, coordination, and professional support.",
  },
  {
    icon: Users,
    title: "Management Consulting",
    description:
      "Improve organizational performance through better management and structured solutions.",
  },
  {
    icon: Target,
    title: "Professional Advisory",
    description:
      "Make informed decisions with expert guidance tailored to your specific requirements.",
  },
];

const benefits = [
  "Client-focused approach",
  "Professional guidance",
  "Practical and effective solutions",
  "Transparent communication",
  "Commitment to quality",
  "Long-term growth perspective",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description: "We understand your needs, challenges, and objectives.",
  },
  {
    number: "02",
    title: "Analyze",
    description: "We evaluate opportunities and identify the right direction.",
  },
  {
    number: "03",
    title: "Strategize",
    description: "We develop a practical plan based on your requirements.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "We support implementation and work toward your goals.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-6 py-28 text-white md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <span className="mb-6 inline-block rounded-full border border-blue-400/40 bg-blue-400/10 px-5 py-2 text-sm font-semibold text-blue-200">
              Professional Consultancy Solutions
            </span>

            <h1 className="mb-7 text-4xl font-extrabold leading-tight md:text-6xl">
              Building Your Vision Into
              <span className="text-blue-400"> Reality.</span>
            </h1>

            <p className="mb-9 max-w-xl text-lg leading-8 text-blue-100">
              We empower individuals and organizations with professional
              consultancy, strategic insights, and innovative solutions
              designed to create meaningful progress.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-4 font-semibold hover:bg-blue-500"
              >
                Get Started <ArrowRight size={18} />
              </Link>

              <Link
                href="/about"
                className="rounded-lg border border-white/40 px-7 py-4 font-semibold hover:bg-white hover:text-blue-950"
              >
                Discover More
              </Link>
            </div>
          </div>

          <div className="flex min-h-[350px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="text-center">
              <div className="mb-5 text-7xl font-black tracking-widest text-white md:text-8xl">
                NEXA<span className="text-blue-400">.</span>
              </div>
              <p className="text-xl text-blue-200">
                Think Better. Grow Smarter.
              </p>
              <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-blue-500" />
            </div>
          </div>

        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <span className="font-bold uppercase tracking-widest text-blue-700">
              Who We Are
            </span>

            <h2 className="mb-6 mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Your Trusted Partner in Progress and Development
            </h2>

            <p className="mb-5 leading-8 text-gray-600">
              NEXA Consultancy is dedicated to helping individuals,
              entrepreneurs, and organizations navigate challenges and
              discover new opportunities.
            </p>

            <p className="mb-8 leading-8 text-gray-600">
              We believe that every successful journey begins with a clear
              vision, informed decisions, and the right professional support.
              Our approach combines strategic thinking with practical
              solutions to help our clients move forward confidently.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900"
            >
              Learn About Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-3xl bg-blue-50 p-10 md:p-14">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <Award size={35} className="mb-4 text-blue-700" />
                <h3 className="font-bold text-gray-900">Quality</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Commitment to excellence
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <ShieldCheck size={35} className="mb-4 text-blue-700" />
                <h3 className="font-bold text-gray-900">Trust</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Honest professional service
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <Target size={35} className="mb-4 text-blue-700" />
                <h3 className="font-bold text-gray-900">Focus</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Goal-oriented approach
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <Lightbulb size={35} className="mb-4 text-blue-700" />
                <h3 className="font-bold text-gray-900">Innovation</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Forward-thinking ideas
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-bold uppercase tracking-widest text-blue-700">
              What We Offer
            </span>

            <h2 className="mb-5 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Professional Services
            </h2>

            <p className="leading-8 text-gray-600">
              We offer a range of consultancy solutions designed to help
              clients make better decisions and achieve their objectives.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-4 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 font-semibold text-blue-700"
                  >
                    Explore More <ArrowRight size={17} />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <span className="font-bold uppercase tracking-widest text-blue-700">
              Why Choose NEXA
            </span>

            <h2 className="mb-6 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              We Focus on What Matters Most to You
            </h2>

            <p className="mb-8 leading-8 text-gray-600">
              Every client has different goals and challenges. We take the
              time to understand your requirements and focus on solutions
              that create real value.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle
                    size={21}
                    className="shrink-0 text-blue-700"
                  />
                  <span className="font-medium text-gray-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-blue-950 p-10 text-white md:p-14">
            <h3 className="mb-6 text-3xl font-bold">
              Our Commitment
            </h3>

            <p className="mb-7 leading-8 text-blue-100">
              We are committed to building strong professional relationships
              through trust, responsibility, and a genuine understanding of
              our clients&apos; needs.
            </p>

            <div className="border-t border-white/20 pt-7">
              <p className="text-lg font-semibold text-blue-300">
                Your Goals. Our Commitment.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Work Process */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <span className="font-bold uppercase tracking-widest text-blue-700">
              How We Work
            </span>

            <h2 className="mb-4 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Working Process
            </h2>

            <p className="text-gray-600">
              A simple and structured approach to delivering solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <span className="text-4xl font-extrabold text-blue-200">
                  {item.number}
                </span>

                <h3 className="mb-3 mt-5 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">

          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Take the Next Step?
          </h2>

          <p className="mb-9 leading-8 text-blue-100">
            Let&apos;s discuss your goals and explore how NEXA Consultancy
            can support your journey toward success.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-lg bg-white px-8 py-4 font-bold text-blue-800 transition hover:bg-blue-50"
          >
            <Phone size={19} />
            Contact Our Team
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}