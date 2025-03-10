import Image from "next/image";
import Link from "next/link";

const services = [
  "บริการจดทะเบียนบริษัท",
  "บริการรับทำบัญชี",
  "บริการตรวจสอบบัญชี",
  "บริการด้านภาษีธุรกิจ",
];

const companyLinks = [
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "บริการของเรา", href: "/services" },
  { name: "ติดต่อเรา", href: "/contact" },
  { name: "นโยบายความเป็นส่วนตัว", href: "/privacy-policy" },
];

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <div className="flex flex-col lg:flex-row bg-[#333645] lg:justify-center gap-4 xl:gap-8 xl:py-10 px-4">
          <div className="bg-[#333645] flex flex-col items-center px-8 gap-2 xl:w-fit lg:border-b-0 py-6 xl:py-10">
            <p className="text-2xl font-semibold text-amber-400">
              ส่งข้อความหาเรา
            </p>
            <h3 className="text-white text-xl font-sans tracking-wide">
              support@forwardacc.com
            </h3>
          </div>
          <div className="bg-[#333645] flex flex-col items-center px-8 border-y-2 gap-2 xl:w-fit lg:border-y-0 lg:border-x-2 border-gray-800/70 py-6 xl:px-20 xl:py-10">
            <p className="text-2xl font-semibold text-amber-400">
              โทรคุยกับเรา
            </p>
            <h3 className="text-white text-xl font-sans tracking-wide">
              083-983-5169
            </h3>
          </div>
          <div className="bg-[#333645] flex flex-col items-center px-8 border-b gap-2 xl:w-fit lg:border-b-0 border-gray-700 py-6 xl:py-10">
            <Image
              src={"/AddLine.png"}
              alt="add-line"
              width={180}
              height={56}
              className="lg:hidden"
            />
            <p className="text-2xl font-semibold text-amber-400 uppercase hidden lg:block">
              Working hours
            </p>
            <h3 className="text-white text-xl font-sans tracking-wide hidden lg:block">
              8:00am - 6:00pm
            </h3>
          </div>
        </div>
        <div className="bg-[#292b37] flex flex-col gap-14 py-16 lg:flex-row lg:gap-8 lg:justify-between xl:justify-center lg:px-4">
          <div className="flex flex-col items-center text-center gap-4 py-8 lg:py-0">
            <h3 className="text-white text-xl font-sans">
              Forward Accounting Co.,Ltd
            </h3>
            <div className="flex flex-col text-zinc-400 gap-1">
              <span>26/1 อาคารต้นสักคอร์เนอร์ ชั้นที่ 2</span>
              <span>ตำบลบางกระสอ อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000</span>
              <span>support@forwardacc.com</span>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <h3 className="uppercase text-white text-xl">Our services</h3>
            <ul className="flex flex-col gap-2 text-zinc-400">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="hover:text-amber-400 transition-colors ease-in-out cursor-pointer duration-500"
                >
                  <Link href={`/${service}`}>{service}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <h3 className="uppercase text-white text-xl">Company</h3>
            <ul className="flex flex-col gap-2 text-zinc-400">
              {companyLinks.map((company, index) => (
                <li
                  key={index}
                  className="hover:text-amber-400 transition-colors ease-in-out cursor-pointer duration-500"
                >
                  <Link href={`/${company.href}`}>{company.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <h3 className="uppercase text-white text-xl">Accreditation</h3>
            <Image
              src={"/logo-mobile.png"}
              alt="logo"
              width={84}
              height={84}
              className="cursor-pointer"
            />
            <div className="text-lg flex flex-col text-white">
              <span>เปิดบริการ</span>
              <span>วันจันทร์ – เสาร์ 8.00 – 18.00 น.</span>
            </div>
          </div>
        </div>
        <div className="bg-[#333645] p-8 text-center text-zinc-400">
          <p>
            © Copyright 2023 | Forward Accounting Co.,Ltd. | All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
