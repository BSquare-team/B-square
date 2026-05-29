import { Member } from "@/src/features/team/type";
import Image from "next/image";
import Link from "next/link";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Link
      key={member.name}
      href={member.href}
      prefetch={false}
      className="group relative overflow-hidden rounded-2xl  dark:bg-black/20 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-xl transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl hover:border-teal-500/30"
    >
      {/* image container - نسبت ثابت و زیبا */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 512px"
          quality={80}
          fetchPriority="high"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />

        {/* gradient overlay - تنظیم شده برای هر دو تم */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent dark:from-black/70 dark:via-black/20" />
      </div>

      {/* content - پایین کارت */}
      <div className="p-5">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
          {member.role}
        </span>

        <h2 className="mt-1.5 text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          {member.name}
        </h2>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-white/60 transition-all duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400">
          <span>See portfolio</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
