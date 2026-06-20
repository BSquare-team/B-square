import { Breadcrumb } from '@/src/shared/components/ui/breadcrumb'
import React, { ReactNode } from 'react'

export interface pageHeaderProps {
   heroTitle: ReactNode;
   description : string
}

export default function PageHeader({ heroTitle , description}: pageHeaderProps) {
  return (
      <section className="px-5 pt-14 pb-10 md:px-16 md:pt-20 md:pb-16 max-w-300 mx-auto border-b  border-border">
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#777] mb-5">
              {" "}
              <Breadcrumb />
            </div>
            <h1 className="text-[clamp(32px,5vw,60px)] font-light italic tracking-[-0.02em] leading-[1.1]">
             {heroTitle}
              <span className="font-semibold not-italic"> </span>
              <br />
            </h1>
            <p className="text-[15px] text-[#777] font-light mt-4 max-w-120 leading-[1.7]">
            {description}
            </p>
          </section>
  )
}
