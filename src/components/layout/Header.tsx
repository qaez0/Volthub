import Navigator from "../common/Navigator";
import LayoutContainer from "./LayoutContainer";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-2 absolute top-0 left-0 right-0 z-20">
      <LayoutContainer className="flex justify-between items-center">
        <div className="w-[50px] h-[50px] relative overflow-hidden rounded-lg">
          <Image src="/logo.jpg" alt="logo" fill />
        </div>
        <Navigator />
      </LayoutContainer>
    </header>
  );
};

export default Header;
