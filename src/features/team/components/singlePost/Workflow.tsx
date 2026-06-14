import { ArrowBigDown } from "lucide-react";
import React from "react";

interface workflowItems {
  title: string;
  decs: string;
}

interface workflowTypes {
  WorkflowProps: workflowItems[];
}

export default function Workflow({ WorkflowProps }: workflowTypes) {
  return (
    <>
      <section className="container mx-auto max-w-7xl px-16 py-25 ">
        <div className="flex items-center gap-4 text-[13px] font-medium text-(--text) mb-14">
          Production Workflow
          <ArrowBigDown size={"15px"} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border-[0.5px] border-border">
          {WorkflowProps.map((item, index) => {
            const isLastOdd =
              WorkflowProps.length % 2 !== 0 &&
              index === WorkflowProps.length - 1;

            return (
              <div
                className={`bg-background px-7 py-8 flex flex-col gap-2.5 transition-colors duration-200 min-w-0
        ${isLastOdd ? "sm:col-span-2" : ""} 
      `}
              >
                <div className="text-[11px] text-[#555] tracking-widest mb-4 transition-colors duration-250">
                  0{index + 1}
                </div>

                <div className="text-[18px] font-light italic text-(--text) mb-2.5 transition-colors duration-250">
                  {item.title}
                </div>

                <div className="text-[13px] text-(--muted2) leading-[1.78] font-light transition-colors duration-250">
                  {item.decs}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
