import MainContent from "@/components/common/MainContent";
import LayoutContainer from "@/components/layout/LayoutContainer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 relative z-10">
      <MainContent
        settings={{ type: "image", src: "/resources/power-grid.jpg" }}
      >
        <LayoutContainer className="flex items-center justify-center h-[670px] flex-col text-white gap-6">
          <div className="flex flex-col gap-2 z-20 text-center sm:text-left">
            <h6 className="text-xl font-normal md:font-semibold">VOLTHUB</h6>
            <h1 className="text-[40px] md:text-[60px] font-bold leading-none w-4/6">
              Powering the future of green mobility,{" "}
              <span className="text-[#ff6f8b]">with sustainable energy.</span>
            </h1>
            <h6 className="text-xl font-normal md:font-semibold w-full md:w-3/4 text-foreground">
              Electronic power generation services
            </h6>
          </div>
        </LayoutContainer>
      </MainContent>
    </main>
  );
}
