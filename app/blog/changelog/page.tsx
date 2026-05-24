import React from "react";

export default function page() {
  return (
    <section className=" mt-20 container max-w-7xl mx-auto px-8">
      <div className="prose dark:prose-invert">
        <h1>Changelog from my journey</h1>
        <p>
          I've been working at Kay.ai for the past 1.5 years. Here's a timeline
          of my journey.
        </p>
      </div>

      {/* all posts */}

      <div className="mt-24  flex flex-col justify-center items-center">
        {/* one post */}
        <div className="relative flex justify-start py-6  w-full ">
          {/* Date */}
          <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            Mar 2024 - Present
          </div>
          {/* text */}
          <div className="relative flex flex-col w-full prose prose-ul:mb-0 dark:prose-invert ">
            <span className="md:hidden flex text-[rgb(115 115 115)] "> Mar 2024 - Present</span>
            <h3 className="lg:text-xl mt-0">Lorem ipsum dolor sit.</h3>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, tenetur quas! Vero ducimus aliquid reiciendis sequi
              voluptas minima odio explicabo quidem perspiciatis facere, ea in,
              totam a aut sit repellendus?
            </span>
            <ul>
              <li>Leading UI/UX for Copilot to automate insurance workflows</li>
              <li>
                Built the Kay Admin App, Client App, and Demo Instance for
                seamless AI-driven automation.
              </li>
              <li>
                Experimenting with emerging AI models, techniques and UX
                paradigms to enhance usability and system design.
              </li>
            </ul>
          </div>

          {/* grid */}
          <div
            className="absolute inset-x-0 h-150 
                          bg-[repeating-linear-gradient(0deg,rgba(15,23,42,0.04)_0,rgba(15,23,42,0.04)_1px,transparent_0,transparent_100%),repeating-linear-gradient(90deg,rgba(15,23,42,0.04)_0,rgba(15,23,42,0.04)_1px,transparent_0,transparent_100%)] 
                          bg-size-[20px_20px,20px_20px] 
                          bg-top 
                          mask-[linear-gradient(0deg,transparent,black)] 
                          dark:bg-[repeating-linear-gradient(0deg,rgba(241,245,249,0.03)_0,rgba(241,245,249,0.03)_1px,transparent_0,transparent_100%),repeating-linear-gradient(90deg,rgba(241,245,249,0.03)_0,rgba(241,245,249,0.03)_1px,transparent_0,transparent_100%)] 
                          dark:bg-size-[20px_20px,20px_20px] 
                          dark:bg-position-[center_top_-1px] 
                          dark:border-t dark:border-white/5 
                          top-0 xl:top-14"
          />
        </div>

        
        <div className="relative flex justify-start py-6  w-full ">
          {/* Date */}
          <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            Mar 2024 - Present
          </div>
          {/* text */}
          <div className="relative flex flex-col w-full prose prose-ul:mb-0 dark:prose-invert ">
            <span className="md:hidden flex text-[rgb(115 115 115)] "> Mar 2024 - Present</span>
            <h3 className="lg:text-xl mt-0">Lorem ipsum dolor sit.</h3>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, tenetur quas! Vero ducimus aliquid reiciendis sequi
              voluptas minima odio explicabo quidem perspiciatis facere, ea in,
              totam a aut sit repellendus?
            </span>
            <ul>
              <li>Leading UI/UX for Copilot to automate insurance workflows</li>
              <li>
                Built the Kay Admin App, Client App, and Demo Instance for
                seamless AI-driven automation.
              </li>
              <li>
                Experimenting with emerging AI models, techniques and UX
                paradigms to enhance usability and system design.
              </li>
            </ul>
          </div>

          {/* grid */}
          <div
            className="absolute inset-x-0 h-150 
                          bg-[repeating-linear-gradient(0deg,rgba(15,23,42,0.04)_0,rgba(15,23,42,0.04)_1px,transparent_0,transparent_100%),repeating-linear-gradient(90deg,rgba(15,23,42,0.04)_0,rgba(15,23,42,0.04)_1px,transparent_0,transparent_100%)] 
                          bg-size-[20px_20px,20px_20px] 
                          bg-top 
                          mask-[linear-gradient(0deg,transparent,black)] 
                          dark:bg-[repeating-linear-gradient(0deg,rgba(241,245,249,0.03)_0,rgba(241,245,249,0.03)_1px,transparent_0,transparent_100%),repeating-linear-gradient(90deg,rgba(241,245,249,0.03)_0,rgba(241,245,249,0.03)_1px,transparent_0,transparent_100%)] 
                          dark:bg-size-[20px_20px,20px_20px] 
                          dark:bg-position-[center_top_-1px] 
                          dark:border-t dark:border-white/5 
                          top-0 xl:top-14"
          />
        </div>
      </div>
     
    </section>
  );
}
