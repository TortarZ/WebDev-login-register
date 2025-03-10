import Image from "next/image";
import Link from "next/link";
import MainMenu from "./MainMenu";

const Header = () => {
  return (
    <>
      <header className="bg-[#292b37] p-4 flex items-center justify-between xl:justify-center w-full sticky top-0 z-100">
        <Link href={"/"} className="select-none outline-none">
          <Image
            src="/logo.png"
            alt="Logo"
            width={390}
            height={146}
            className="hidden lg:block"
            priority
          />
          <Image
            src="/logo-mobile.png"
            alt="Logo Mobile"
            width={84}
            height={84}
            className="block lg:hidden"
            priority
          />
        </Link>
        <div className="flex gap-4 items-center">
          <MainMenu />
        </div>
      </header>
    </>
  );
};
export default Header;
