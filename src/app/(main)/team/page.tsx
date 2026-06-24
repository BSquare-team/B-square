import { members } from "@/src/features/team/lib/data";
import MemberCard from "../../../features/team/components/MemberCard";
import PageHeader from "@/src/features/team/components/singlePost/PageHeader";

export default function Page() {
  return (
    <>
      <PageHeader heroTitle="Team " description="Meet the team — so far." />
      <section className="container m-auto max-w-7xl">
        {/* heading */}
        <section className="p-6 "></section>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20 pt-10 max-w-5xl mx-auto px-6">
          {members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </>
  );
}
