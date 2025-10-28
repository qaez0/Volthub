"use client";

import MainContent from "@/components/common/MainContent";
import LayoutContainer from "@/components/layout/LayoutContainer";
import SplitText from "@/components/ui/split-text";

export default function Pricing() {
  return (
    <main className="flex flex-col flex-1 relative z-10">
      <MainContent
        settings={{ type: "image", src: "/resources/charging-stats.jpg" }}
      >
        <LayoutContainer className="flex items-center justify-center h-[670px] flex-col text-white gap-6">
          <div className="text-center z-20 sm:text-left w-full">
            <SplitText
              duration={1}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              delay={10}
              className="text-[40px] md:text-[60px] font-bold w-full sm:w-4/6 leading-[1.3]"
              text={
                <>
                  With great power,{" "}
                  <span className="text-foreground">
                    comes great responsibility.
                  </span>
                </>
              }
            />
          </div>
        </LayoutContainer>
      </MainContent>
    </main>
  );
}
