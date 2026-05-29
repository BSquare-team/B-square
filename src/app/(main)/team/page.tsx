import { members } from "@/src/features/team/lib/data";
import MemberCard from "../../../features/team/components/MemberCard";

export default function Page() {
  return (
    <section className="container m-auto max-w-7xl">
      {/* heading */}
      <section className="p-6 ">
        <div className="flex flex-col justify-center prose prose-h1:mb-2 dark:prose-invert">
          <p>Team</p>
          <h1>know us more</h1>
          <p>Meet the team — so far.</p>
        </div>
      </section>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20 pt-10 max-w-5xl mx-auto px-6">
        {members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
