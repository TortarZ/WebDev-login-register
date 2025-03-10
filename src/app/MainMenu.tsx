"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { CgProfile } from "react-icons/cg";

const MainMenu = () => {
  const { data: session } = useSession();
  console.log(session);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentPath = usePathname();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const checkPage = (path: string) => {
    return currentPath === path ? "bg-amber-400" : "bg-white";
  };

  const checkPath = (path: string) => {
    return currentPath === path ? "border-b border-zinc-500" : "";
  };

  const navlinks = [
    { name: "หน้าแรก", path: "/" },
    {
      name: "บริการ",
      path: "/service",
      dropdown: <MdKeyboardArrowDown />,
      action: isDropdownOpen,
    },
    { name: "เกี่ยวกับเรา", path: "/aboutus" },
    { name: "บทความ", path: "/article" },
    { name: "ติดต่อเรา", path: "/contact" },
  ];

  const services = [
    { name: "บริการจดทะเบียนบริษัท", link: "/services/company-registration" },
    { name: "บริการรับทำบัญชี", link: "/services/accounting" },
    { name: "บริการตรวจสอบบัญชี", link: "/services/audit" },
    { name: "บริการด้านภาษีธุรกิจ", link: "/services/tax" },
    { name: "รับทำบัญชีขายออนไลน์", link: "/services/online-accounting" },
  ];

  return (
    <>
      <nav className="relative hidden md:block">
        <ul className="flex gap-8 text-xl text-white">
          {navlinks.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer ${checkPath(
                link.path
              )} hover:border-b hover:border-zinc-500 transition-all ease-in-out`}
              onMouseEnter={() =>
                link.name === "บริการ" && setIsDropdownOpen(true)
              }
              onMouseLeave={() =>
                link.name === "บริการ" && setIsDropdownOpen(false)
              }
            >
              <Link href={link.path} className={`flex items-center gap-1 `}>
                {link.name}
                {link.dropdown}
              </Link>
            </li>
          ))}
        </ul>
        {isDropdownOpen ? (
          <ul
            className="absolute bg-white top-8 left-24 dropdown-menu"
            onMouseEnter={() => {
              setIsDropdownOpen(true);
            }}
            onMouseLeave={() => {
              setIsDropdownOpen(false);
            }}
          >
            {services.map((service, index) => (
              <li
                key={index}
                className="p-4 bg-[#5E6276] text-white border border-zinc-700 hover:bg-zinc-600 cursor-pointer"
              >
                {service.name}
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
      {!session ? (
        <h3 className="text-xl text-white">
          <Link href={"/login"}>เข้าสู่ระบบ</Link>
        </h3>
      ) : (
        <>
          <div
            className="flex items-center gap-1 relative cursor-pointer"
            onMouseEnter={() => setIsProfileDropdownOpen(true)}
            onMouseLeave={() => setIsProfileDropdownOpen(false)}
          >
            <CgProfile className="text-4xl text-zinc-200" />
            <span className="text-xl text-white">{session?.user?.name}</span>
            <div
              className={`absolute -bottom-12 -right-8 w-30 h-20 flex items-end ${
                isProfileDropdownOpen ? "block" : "hidden"
              }`}
            >
              <div
                onClick={() => signOut()}
                className="text-xl text-white cursor-pointer bg-zinc-500 w-30 h-10 text-center grid items-center"
              >
                ออกจากระบบ
              </div>
            </div>
          </div>
        </>
      )}

      <button title="menu" onClick={toggleMenu}>
        <GiHamburgerMenu className="text-white text-2xl md:hidden" />
      </button>
      <ul
        className={`w-full h-fit bg-white fixed top-28 left-0 text-zinc-800 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li
          className={`p-4 text-xl hover:bg-amber-400 ${checkPage(
            "/"
          )} cursor-pointer`}
        >
          <Link
            href={"/"}
            className="w-full h-full"
            onClick={() => setIsOpen(false)}
          >
            หน้าแรก
          </Link>
        </li>
        <li
          className={`p-4 text-xl hover:bg-amber-400 ${checkPage(
            "/service"
          )} cursor-pointer`}
        >
          <Link
            href={"/service"}
            className="w-full h-full"
            onClick={() => setIsOpen(false)}
          >
            บริการ
          </Link>
        </li>
        <li
          className={`p-4 text-xl hover:bg-amber-400 ${checkPage(
            "/aboutus"
          )} cursor-pointer`}
        >
          <Link
            href={"/aboutus"}
            className="w-full h-full"
            onClick={() => setIsOpen(false)}
          >
            เกี่ยวกับเรา
          </Link>
        </li>
        <li
          className={`p-4 text-xl hover:bg-amber-400 ${checkPage(
            "/article"
          )} cursor-pointer`}
        >
          <Link
            href={"/article"}
            className="w-full h-full"
            onClick={() => setIsOpen(false)}
          >
            บทความ
          </Link>
        </li>
        <li
          className={`p-4 text-xl hover:bg-amber-400 ${checkPage(
            "/contact"
          )} cursor-pointer`}
        >
          <Link
            href={"/contact"}
            className="w-full h-full"
            onClick={() => setIsOpen(false)}
          >
            ติดต่อเรา
          </Link>
        </li>
      </ul>
    </>
  );
};
export default MainMenu;
