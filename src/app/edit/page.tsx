import EditPageContent from "@/src/features/team/components/singlePost/EditPageContent";
import { Suspense } from "react";


export default function EditPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPageContent />
    </Suspense>
  );
}