import Image from "next/image";
import Link from "next/link";

import omidPic from "@/src/assets/image/omidProfile.jpg";
import aminPic from "@/src/assets/image/mePic.jpg";

const members = [
  {
    name: "Omid",
    role: "Frontend Engineer",
    image: omidPic,
    href: "/portfolio/omid",
  },
  {
    name: "Amin",
    role: "Creative Developer",
    image: aminPic,
    href: "/portfolio/amin",
  },
];

export default function Page() {
  return (
    <section className="container max-w-7xl mx-auto px-6 py-30 ">
      {/* heading */}
      <div className="text-center mb-12">
        <span className="text-sm tracking-[0.3em] uppercase text-teal-500 font-medium">
          Portfolio
        </span>

        <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
          Meet Our Team
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Building modern digital experiences with design, motion and scalable
          frontend systems.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {members.map((member) => (
          <Link
            key={member.name}
            href={member.href}
            className="group flex gap-4 items-center p-4 rounded-2xl border border-white/10 bg-white/5 dark:bg-black/10 hover:bg-white/10 dark:hover:bg-black/20 transition-all duration-300"
          >
            {/* image */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden rounded-xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="120px"
                quality={85}
                className="object-cover object-top group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* content */}
            <div className="flex flex-col justify-center">
              <span className="text-xs tracking-[0.2em] uppercase text-teal-500">
                {member.role}
              </span>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
                {member.name}
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Click to view portfolio
              </p>
            </div>

            {/* arrow */}
            <div className="ml-auto text-gray-400 group-hover:text-teal-400 transition">
              →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
