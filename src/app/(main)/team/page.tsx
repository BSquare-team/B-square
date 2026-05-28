import Image from "next/image";
import Link from "next/link";

import omidPic from "@/src/assets/image/omidProfile.jpg";
import aminPic from "@/src/assets/image/mePic.jpg";

const members = [
  {
    name: "Omid",
    role: "Frontend Engineer",
    image: omidPic,
    href: "/team/omid",
  },
  {
    name: "Amin",
    role: "Creative Developer",
    image: aminPic,
    href: "/team/amin",
  },
];

export default function Page() {
  return (
    <section className="container m-auto max-w-7xl px-6">
      {/* heading */}
      <section className="p-6 ">
        <div className="flex flex-col justify-center prose prose-h1:mb-2 dark:prose-invert">
          <p>Team</p>
          <h1>know us more</h1>
          <p>
            Stay informed with product updates, company news, and insights on
            how to sell smarter at your company.
          </p>
        </div>
      </section>

{/* cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20 pt-10 max-w-5xl mx-auto">
  {members.map((member) => (
    <Link
      key={member.name}
      href={member.href}
      className="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-black/20 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-teal-500/30"
    >
      {/* image container - نسبت ثابت و زیبا */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-800">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={80}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />

        {/* gradient overlay - نرم‌تر از قبل */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* content - پایین کارت */}
      <div className="p-5">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-teal-400">
          {member.role}
        </span>

        <h2 className="mt-1.5 text-2xl font-bold text-white tracking-tight">
          {member.name}
        </h2>

        <div className="mt-3 flex items-center gap-2 text-sm text-white/60 transition-all duration-300 group-hover:text-teal-400">
          <span>See portfolio</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  ))}
</div>
    </section>
  );
}
