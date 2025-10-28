import MainContent from "@/components/common/MainContent";
import LayoutContainer from "@/components/layout/LayoutContainer";

export default function Pricing() {
  return (
    <main className="flex flex-col flex-1 relative z-10">
      <MainContent
        settings={{ type: "image", src: "/resources/charging-stats.jpg" }}
      >
        <LayoutContainer className="flex items-center justify-center h-[670px] flex-col text-white gap-6">
          <div className="flex flex-col gap-2 z-20 text-center sm:text-left w-full">
            <h1 className="text-[40px] md:text-[60px] font-bold leading-none w-4/6">
              With great power,{" "}
              <span className="text-foreground">
                comes great responsibility.
              </span>
            </h1>
          </div>
        </LayoutContainer>
      </MainContent>
    </main>
  );
}
