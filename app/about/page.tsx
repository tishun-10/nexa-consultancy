import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | NEXA Consultancy",
  description: "Learn about NEXA Consultancy, our mission and vision.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We believe in honesty, transparency, and building long-term trust.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We develop creative and practical solutions for modern challenges.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients to understand their goals.",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description:
      "We focus on quality, continuous improvement, and measurable results.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-950 px-6 py-24 text-center text-white">
        <p className="mb-4 font-semibold uppercase tracking-widest text-blue-300">
          About NEXA
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Building Better Futures Through Smart Solutions
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-blue-100">
          We help individuals and businesses move forward with confidence
          through professional guidance and innovative solutions.
        </p>
      </section>

      {/* Company Introduction */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-3 font-semibold uppercase tracking-wider text-blue-700">
            Who We Are
          </p>

          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Your Trusted Consultancy Partner
          </h2>

          <p className="mb-4 leading-8 text-gray-600">
            NEXA Consultancy is committed to helping organizations and
            individuals identify opportunities, overcome challenges, and
            achieve sustainable growth.
          </p>

          <p className="leading-8 text-gray-600">
            We combine professional expertise, strategic thinking, and
            client-focused solutions to create meaningful results.
          </p>
        </div>

        <div className="flex min-h-[350px] items-center justify-center rounded-2xl bg-blue-100 p-10">
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-800">NEXA</div>
            <p className="mt-3 text-gray-600">
              Your Partner in Progress
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <Target size={40} className="mb-5 text-blue-700" />

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Our Mission
            </h2>

            <p className="leading-8 text-gray-600">
              To provide reliable, effective, and innovative consultancy
              services that empower our clients to achieve their objectives.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <Eye size={40} className="mb-5 text-blue-700" />

            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Our Vision
            </h2>

            <p className="leading-8 text-gray-600">
              To become a trusted consultancy partner recognized for
              excellence, innovation, and positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-wider text-blue-700">
            What We Believe
          </p>

          <h2 className="text-3xl font-bold text-gray-900">
            Our Core Values
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-100 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon size={36} className="mb-5 text-blue-700" />

                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold">
            Why Choose NEXA?
          </h2>

          <p className="mb-10 leading-8 text-blue-100">
            We focus on understanding your needs, creating practical
            strategies, and delivering solutions that support your long-term
            success.
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-900 hover:bg-blue-100"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}