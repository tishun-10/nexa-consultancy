import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Globe,
  Lightbulb,
  Users,
  Target,
  Building2,
  FileText,
  Handshake,
  CheckCircle,
  Headphones,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Business Consultancy",
    description:
      "We help businesses identify challenges, explore opportunities, and develop practical strategies for sustainable growth.",
    features: [
      "Business planning and development",
      "Business growth strategies",
      "Operational improvement",
      "Business opportunity analysis",
    ],
  },
  {
    number: "02",
    icon: ChartNoAxesCombined,
    title: "Strategic Planning",
    description:
      "We support organizations in setting clear objectives and creating effective strategies to achieve long-term goals.",
    features: [
      "Strategic business planning",
      "Goal setting and evaluation",
      "Market analysis",
      "Performance improvement",
    ],
  },
  {
    number: "03",
    icon: Globe,
    title: "International Consultancy",
    description:
      "We provide guidance to individuals and organizations exploring international opportunities and professional development.",
    features: [
      "International opportunity research",
      "Market entry guidance",
      "Global business insights",
      "Cross-border project support",
    ],
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Project Development",
    description:
      "We help transform ideas into structured projects through research, planning, coordination, and development support.",
    features: [
      "Project concept development",
      "Project planning",
      "Research and documentation",
      "Project coordination",
    ],
  },
  {
    number: "05",
    icon: Users,
    title: "Management Consulting",
    description:
      "We help organizations improve their management practices, team coordination, and organizational performance.",
    features: [
      "Management strategy",
      "Organizational development",
      "Team coordination",
      "Workflow improvement",
    ],
  },
  {
    number: "06",
    icon: Target,
    title: "Professional Advisory",
    description:
      "We provide professional insights and practical recommendations to support informed decision-making.",
    features: [
      "Professional guidance",
      "Decision-making support",
      "Opportunity assessment",
      "Customized recommendations",
    ],
  },
  {
    number: "07",
    icon: Building2,
    title: "Organizational Development",
    description:
      "We support organizations in strengthening their structure, improving internal processes, and building sustainable systems.",
    features: [
      "Organizational assessment",
      "Structure development",
      "Process improvement",
      "Institutional planning",
    ],
  },
  {
    number: "08",
    icon: FileText,
    title: "Research & Documentation",
    description:
      "We assist with structured research, professional documentation, and information analysis for projects and organizations.",
    features: [
      "Research support",
      "Report preparation",
      "Project documentation",
      "Information analysis",
    ],
  },
  {
    number: "09",
    icon: Handshake,
    title: "Partnership Development",
    description:
      "We help identify collaboration opportunities and support the development of meaningful professional partnerships.",
    features: [
      "Partnership opportunity research",
      "Collaboration planning",
      "Stakeholder coordination",
      "Relationship development",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Initial Discussion",
    description:
      "We listen to your requirements and understand your objectives.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "We evaluate your needs and identify suitable opportunities.",
  },
  {
    number: "03",
    title: "Planning",
    description:
      "We develop a customized approach based on your requirements.",
  },
  {
    number: "04",
    title: "Implementation",
    description:
      "We provide support throughout the agreed process.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-6 py-28 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block rounded-full border border-blue-300/30 bg-blue-400/10 px-5 py-2 text-sm font-semibold text-blue-200">
            What We Do
          </span>

          <h1 className="mb-7 text-4xl font-extrabold leading-tight md:text-6xl">
            Professional Services for
            <span className="text-blue-400"> Your Growth</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-blue-100">
            Discover our range of consultancy solutions designed to help
            individuals, businesses, and organizations move forward with
            confidence.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500"
            >
              Discuss Your Project
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-white/40 px-8 py-4 font-semibold hover:bg-white hover:text-blue-950"
            >
              About NEXA
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-bold uppercase tracking-widest text-blue-700">
            Our Expertise
          </span>

          <h2 className="mb-6 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Solutions Designed Around Your Needs
          </h2>

          <p className="leading-8 text-gray-600">
            Every business and organization has unique requirements. At NEXA,
            we focus on understanding those requirements and providing
            practical consultancy solutions that support meaningful progress.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="font-bold uppercase tracking-widest text-blue-700">
                Our Services
              </span>

              <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                What We Can Help You With
              </h2>
            </div>

            <p className="max-w-md leading-7 text-gray-600">
              Explore our consultancy services and find the support that
              matches your objectives.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="rounded-xl bg-blue-50 p-4 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                      <Icon size={30} />
                    </div>

                    <span className="text-3xl font-extrabold text-gray-200">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mb-6 min-h-24 leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <div className="mb-7 border-t border-gray-100 pt-5">
                    <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-800">
                      What We Offer
                    </h4>

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <CheckCircle
                            size={17}
                            className="mt-0.5 shrink-0 text-blue-600"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-semibold text-blue-700 transition group-hover:gap-3"
                  >
                    Enquire Now
                    <ArrowRight size={18} />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Our Process */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <span className="font-bold uppercase tracking-widest text-blue-700">
              Our Approach
            </span>

            <h2 className="mb-5 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              How We Deliver Our Services
            </h2>

            <p className="mx-auto max-w-2xl leading-8 text-gray-600">
              Our structured approach helps us understand your requirements
              and work toward effective solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-gray-100 p-8 transition hover:shadow-lg"
              >
                <span className="text-5xl font-extrabold text-blue-100">
                  {step.number}
                </span>

                <h3 className="mb-3 mt-5 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Support Section */}
      <section className="bg-blue-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

          <div>
            <span className="font-bold uppercase tracking-widest text-blue-700">
              Client Support
            </span>

            <h2 className="mb-6 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              We Are Here to Understand Your Challenges
            </h2>

            <p className="leading-8 text-gray-600">
              Not sure which service is right for you? Tell us about your
              goals, ideas, or challenges. Our team will help you explore
              suitable consultancy options.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-9 shadow-sm">
            <Headphones size={42} className="mb-5 text-blue-700" />

            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Need Professional Guidance?
            </h3>

            <p className="mb-7 leading-7 text-gray-600">
              Connect with our team to discuss your requirements and
              potential solutions.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-7 py-4 font-semibold text-white hover:bg-blue-800"
            >
              Contact Our Team
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Let's Build Something Meaningful Together
          </h2>

          <p className="mb-9 leading-8 text-blue-100">
            Your next opportunity starts with the right conversation.
            Contact NEXA today and take the next step toward your goals.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-blue-900 hover:bg-blue-100"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}