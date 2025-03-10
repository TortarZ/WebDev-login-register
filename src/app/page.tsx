"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";
import { FaCheck, FaRegSquareCheck } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const blogs = [
  {
    img: "FOR0155-pic1.webp",
    title: "บัญชีสำหรับธุรกิจร้านอาหาร",
    article:
      "บัญชี เป็นหัวใจสำคัญที่ช่วยให้ธุรกิจร้านอาหารเติบโตได้อย่างมั่นคง ไม่เพียงแต่ช่วยติดตามรายได้ [...]",
  },
  {
    img: "blog-pic2.webp",
    title: "ข้อผิดพลาดทางบัญชีที่กิจการควรหลีกเลี่ยงเพื่อความสำเร็จระยะยาว",
    article:
      "การทำบัญชีที่ถูกต้องและมีประสิทธิภาพเป็นหัวใจสำคัญของความสำเร็จของธุรกิจ ช่วยให้ทุกท่านทราบสถา [...]",
  },
  {
    img: "blog-pic3.webp",
    title: "งบทดลอง คืออะไร สำคัญต่อการทำบัญชีอย่างไร",
    article:
      "งบทดลอง อาจฟังดูซับซ้อนสำหรับผู้ที่เริ่มต้นธุรกิจใหม่ แต่จริงๆ แล้วมันเป็นเพียงการนำตัวเลขที่บ [...]",
  },
];

export default function Home() {
  const { ref: hero, inView: heroIsVisible } = useInView();
  const { ref: iconCircle, inView: iconCircleIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: service, inView: serviceIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: services, inView: servicesIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: aboutus, inView: aboutusIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: articles, inView: articlesIsVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <main>
        <section className="bg-[url(/bg-hero.jpg)] bg-no-repeat w-full h-80 md:h-147 lg:h-180 bg-cover bg-center">
          <div
            ref={hero}
            className="bg-zinc-900/45 w-full h-full py-4 md:py-0 md:pt-20 lg:px-20 xl:px-100 animate-hero"
          >
            <div className="bg-zinc-800/50 md:h-full lg:h-fit md:py-4 md:px-8 md:flex md:flex-col md:gap-8">
              <div className="flex flex-col items-center gap-4 py-4">
                <h2 className="text-2xl font-bold text-white font-sans">
                  Keep Moving Foward Together
                </h2>
                <h2 className="text-2xl text-orange-400 uppercase md:text-5xl md:font-semibold">
                  &quot; 10 years experience &quot;
                </h2>
              </div>
              <div className="text-center text-white text-lg flex flex-col gap-2 md:text-3xl md:gap-8">
                <p>
                  เราเป็น{" "}
                  <span className="font-bold">สำนักงานบัญชียุคใหม่ </span>
                  ที่ไม่ได้ทำบัญชีแค่ตามกฎหมายเท่านั้น
                  แต่เรายังช่วยท่านวิเคราะห์งบการเงินและคอยให้คำปรึกษาด้านการเงินและภาษี
                </p>
                <div className="flex gap-2 justify-center">
                  <div className="w-[110px] h-[48px] md:w-[300px] md:h-[132px] lg:w-[125px] lg:h-[54px] xl:w-[220px] xl:h-[97px]">
                    <Image
                      src={"/AddLineYellow.png"}
                      alt="add-line"
                      width={300}
                      height={132}
                      quality={100}
                    />
                  </div>
                  <div className="w-[110px] h-[48px] md:w-[300px] md:h-[132px] lg:w-[125px] lg:h-[54px] xl:w-[220px] xl:h-[97px]">
                    <Image
                      src={"/Phone.webp"}
                      alt="phone-number"
                      width={300}
                      height={132}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white h-full">
          <div className="relative">
            <svg
              className="absolute top-0 2xl:-top-10 left-0 w-full"
              viewBox="0 0 500 100"
              preserveAspectRatio="none"
            >
              <path d="M0,100 Q250,-50 500,100 L500,0 L0,0 Z" fill="#ffc107" />
            </svg>
          </div>
          <div className="flex flex-col h-full items-center py-30 gap-16 lg:flex-row lg:justify-center lg:py-40">
            <div
              className={`flex flex-col items-center text-center gap-4 opacity-0 animate-icon-circle`}
            >
              <Image src={"/icon1.webp"} alt="icon1" width={110} height={110} />
              <h3 className="uppercase text-4xl text-amber-400 font-bold font-sans">
                10 + years
              </h3>
              <p className="text-2xl text-zinc-800">
                เราคือผู้เชี่ยวชาญที่มีประสบการณ์
              </p>
            </div>
            <div
              className={`flex flex-col items-center text-center gap-4 opacity-0 animate-icon-circle`}
            >
              <Image src={"/icon2.webp"} alt="icon1" width={110} height={110} />
              <h3 className="uppercase text-4xl text-amber-400 font-bold font-sans">
                150 +
              </h3>
              <p className="text-2xl text-zinc-800">บริษัทที่เราเป็นผู้ดูแล</p>
            </div>
            <div
              className={`flex flex-col items-center text-center gap-4 opacity-0 animate-icon-circle`}
            >
              <Image src={"/icon3.png"} alt="icon1" width={110} height={110} />
              <h3 className="uppercase text-4xl text-amber-400 font-bold font-sans">
                150 +
              </h3>
              <p ref={service} className="text-2xl text-zinc-800">
                บริษัทที่เราช่วยจัดตั้ง
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-4 px-6 md:px-4 flex flex-col gap-10">
          <h2
            className={`text-4xl text-zinc-800 relative after:block after:w-12 after:h-0.5 after:bg-amber-400 after:mt-2 after:mx-auto md:text-5xl md:pb-8 after:md:w-50 after:md:mt-4 opacity-0 ${
              serviceIsVisible ? "animate-service-header" : ""
            }`}
          >
            ทำไมต้องใช้บริการกับทางเรา
          </h2>
          <div className="md:flex md:gap-4 w-full h-full xl:px-50">
            <div
              className={`md:w-1/2 opacity-0 ${
                serviceIsVisible ? "service-article" : ""
              }`}
            >
              <div className="grid gap-10">
                <div className="relative">
                  <FaRegSquareCheck className="absolute text-amber-500 text-5xl outline-2 outline-amber-500 rounded-full p-2" />
                  <div className="text-left flex flex-col gap-2 ml-18">
                    <h3 className="text-2xl text-amber-400">
                      ทำงานแบบมืออาชีพ
                    </h3>
                    <p className="text-xl text-zinc-800">
                      เราเป็นผู้ให้บริการด้านบัญชีการทำบัญชีและการตรวจสอบบัญชี
                      การให้คำปรึกษาด้านภาษีครบวงจร โดยทีมงานมืออาชีพ
                      เต็มใจให้บริการเหมือนมีที่ปรึกษาส่วนตัวในทุกเรื่องด้านบัญชีในราคายุติธรรม
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <FaRegSquareCheck className="absolute text-amber-500 text-5xl outline-2 outline-amber-500 rounded-full p-2" />
                  <div className="text-left flex flex-col gap-2 ml-18">
                    <h3 className="text-2xl text-amber-400">ลดความยุ่งยาก</h3>
                    <p className="text-xl text-zinc-800">
                      เนื่องจากการทำบัญชีมีเอกสารที่เยอะมีระเบียบขั้นตอนที่ยุ่งยากซับซ้อน
                      เราขอเสนองานบริการด้านบัญชีและการตรวจสอบบัญชี
                      การให้คำปรึกษาด้านภาษีครบวงจร ทั่วประเทศ
                      เพียงแค่ท่านแจ้งข้อมูลและจัดส่งเอกสารให้เราเราจะช่วยให้การทำบัญชีของท่านเป็นไป
                      อย่างราบรื่น
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <FaRegSquareCheck className="absolute text-amber-500 text-5xl outline-2 outline-amber-500 rounded-full p-2" />
                  <div className="text-left flex flex-col gap-2 ml-18">
                    <h3 className="text-2xl text-amber-400">
                      ลูกค้าเป็นหัวใจหลัก
                    </h3>
                    <p className="text-xl text-zinc-800">
                      การให้บริการของเรา โดยเรายึดหลัก Customer Centric
                      ในการทำงาน
                      เราพยายามทำความเข้าใจลูกค้าและส่งมอบประโยชน์ให้แก่ลูกค้า
                      เราเข้าใจว่าลูกค้าแต่ละท่านมีความต้องการแตกต่างกันไปเราจึงพยายามจัดระบบการทำงานให้มีความยืนหยุ่นและคล่องตัว
                      Agile เพื่อให้สามารถสนองความต้องการของลูกค้าแต่ละท่านได้
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`md:w-1/2 opacity-0 ${
                serviceIsVisible ? "service-img" : ""
              }`}
            >
              <div className="py-10 md:py-0">
                <div className="shadow-2xl rounded-2xl">
                  <div className="">
                    <Image
                      src={"/discuss-bg.webp"}
                      alt="disscuss-image"
                      width={350}
                      height={524}
                      quality={100}
                      className="w-full h-full lg:h-150 rounded-t-2xl object-cover"
                    />
                  </div>
                  <div className="py-8 px-4 bg-white shadow-md rounded-b-2xl">
                    <p className="text-lg text-amber-400 font-semibold text-left">
                      ด้วยประสบการณ์ที่มีมากกว่า 10 ปีและจาก 100
                      กว่าบริษัทที่ให้เราดูแล เราเป็น สำนักงานบัญชียุคใหม่
                      ที่ไม่ได้ทำบัญชีแค่ตามกฎหมายเท่านั้น
                      แต่เรายังช่วยท่านวิเคราะห์งบการเงินและคอยให้คำปรึกษาด้านการเงินและภาษี
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={services}
          className="bg-[#292B37] flex flex-col items-center text-center py-18 gap-8"
        >
          <h2 className="text-4xl text-white relative after:block after:w-20 after:h-0.5 after:bg-amber-400 after:mt-8 after:lg:w-35 after:mx-auto">
            บริการของเรา
          </h2>
          <div className="text-3xl text-white flex flex-col gap-2 lg:flex-row">
            <span>จะทำบัญชีเองทำไม?</span>
            <span>
              ถ้ามีบริษัทที่ <span className="text-amber-500">“ถูก”</span> และ{" "}
              <span className="text-amber-500">“ดี”</span>
            </span>
            <span>ให้บริการ</span>
          </div>
          <div className="lg:flex lg:justify-center w-full">
            <div
              className={`flex flex-col items-center gap-2 py-8 lg:w-1/3 opacity-0 ${
                servicesIsVisible ? "services-r" : ""
              }`}
            >
              <Image
                src={"/accounting-1.png"}
                alt="accounting"
                width={110}
                height={110}
              />
              <h3 className="text-2xl text-white">บริการตรวจสอบบัญชี</h3>
              <p className="text-xl text-zinc-400 lg:hidden">
                บริการตรวจสอบบัญชีโดยผู้สอบบัญชีรับอนุญาต <br />
                เรายังคำปรึกษาด้านมาตรฐานการบัญชีและภาษีอากร <br />
                จากผู้ที่มีความเชี่ยวชาญและประสบการณ์โดยตรง
              </p>
              <p className="text-xl text-zinc-400 lg:block hidden">
                บริการตรวจสอบบัญชีโดยผู้สอบบัญชีรับอนุญาต
                เรายังคำปรึกษาด้านมาตรฐานการบัญชีและภาษีอากร
                จากผู้ที่มีความเชี่ยวชาญและประสบการณ์โดยตรง
              </p>
              <button className="text-white bg-amber-500 py-2 px-6 text-xl rounded-xl mt-8 hover:bg-[#4d4e56] active:bg-[#4d4e56] transition-colors ease-in-out">
                ดูรายละเอียด
              </button>
            </div>
            <div
              className={`flex flex-col items-center gap-2 py-8 lg:w-1/3 opacity-0 ${
                servicesIsVisible ? "services-l" : ""
              }`}
            >
              <Image
                src={"/calculations.png"}
                alt="accounting"
                width={110}
                height={110}
              />
              <h3 className="text-2xl text-white">บริการจัดทำบัญชี</h3>
              <p className="text-xl text-zinc-400">
                เราให้บริการงานด้านบัญชีครบวงจร <br />
                รวมทั้งมีการจัดทำสรุปรายงานด้านการเงินเป็นรายเดือน
                เพื่อให้ผู้บริหารสามารถประเมินสถานภาพทางการเงินของกิจการได้
              </p>
              <button className="text-white bg-amber-500 py-2 px-6 text-xl rounded-xl mt-8 hover:bg-[#4d4e56] active:bg-[#4d4e56] transition-colors ease-in-out">
                ดูรายละเอียด
              </button>
            </div>
            <div
              className={`flex flex-col items-center gap-2 py-8 lg:w-1/3 opacity-0 ${
                servicesIsVisible ? "services-r" : ""
              }`}
            >
              <Image
                src={"/taxes.png"}
                alt="accounting"
                width={110}
                height={110}
              />
              <h3 className="text-2xl text-white">บริการด้านภาษีธุรกิจ</h3>
              <p className="text-xl text-zinc-400">
                เราให้บริการที่ปรึกษาด้านภาษี
                ให้คำแนะนำในการแก้ปัญหารับปรึกษาภาษี ทั้งบุคคลธรรมดาและนิติบุคคล
                ด้วยทีมงานมืออาชีพทีมีความรู้และประสบการณ์
              </p>
              <button className="text-white bg-amber-500 py-2 px-6 text-xl rounded-xl mt-8 hover:bg-[#4d4e56] active:bg-[#4d4e56] transition-colors ease-in-out">
                ดูรายละเอียด
              </button>
            </div>
          </div>
          <div className="w-full hidden md:flex justify-center">
            <div
              className={`w-[90%] lg:w-[80%] xl:w-[60%] h-95 xl:h-[35rem] bg-gradient-to-r from-amber-300 to-orange-400/90 rounded-2xl flex p-4 px-[3rem] lg:px-[5rem] xl:px-[2rem] opacity-0 ${
                servicesIsVisible ? "services-banner" : ""
              }`}
            >
              <div className="w-1/2 flex justify-center">
                <div className="text-white text-left flex flex-col justify-center gap-8">
                  <h2 className="text-4xl xl:text-7xl">
                    การทำบัญชี <br />
                    ตรวจสอบบัญชี <br />
                    ภาษีธุรกิจ
                  </h2>
                  <div className="w-full">
                    <button className="font-bold text-lg bg-[#333645] py-4 px-10 rounded-md hover:bg-amber-700 transition-colors ease-in-out">
                      ปรึกษาเราฟรี
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <Image
                  src={"/consult.png"}
                  alt="consult"
                  width={750}
                  height={588}
                  quality={100}
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          ref={aboutus}
          className="text-center py-10 md:py-20 px-4 xl:px-50 flex flex-col gap-8 bg-[url(/business-bg.webp)] bg-center bg-cover bg-no-repeat"
        >
          <h2 className="text-4xl text-zinc-800 relative after:block after:w-20 after:h-0.5 after:bg-zinc-600 after:mt-8 after:mx-auto">
            เกี่ยวกับเรา
          </h2>
          <p className="text-xl text-left text-zinc-700 lg:px-30">
            <span className="text-amber-500 uppercase font-bold">Forward </span>
            เริ่มต้นจากการก่อตั้งของทีมผู้สอบบัญชีที่มีประสบการณ์ทั้งในสายงานบัญชีและภาษี
            กว่า 10 ปี
            เราได้เล็งเห็นถึงความสำคัญของการนำข้อมูลด้านบัญชีไปใช้ให้เกิดประโยชน์กับกิจการ
            ดังนั้นสำนักงานของเราจึงพยายามสร้างความแตกต่างและนำข้อมูลเหล่านี้มาใช้ให้เกิดประโยชน์กับลูกค้าของเรา
            ผ่านการวิเคราะห์และการให้คำแนะนำ ทั้งในด้านการวางแผนภาษี กระแสเงินสด
            โครงสร้างทางการเงิน ฯลฯ
          </p>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div
              className={`flex flex-col items-center gap-2 bg-white shadow-md px-8  py-10 rounded-md opacity-0 ${
                aboutusIsVisible ? "aboutus-r" : ""
              }`}
            >
              <FaCheck className="fill-amber-600 text-4xl" />
              <h2 className="text-2xl text-amber-500">รับรองคุณภาพ</h2>
              <p className="text-xl text-zinc-600">
                เราเป็นสำนักงานบัญชีที่มีคุณภาพและได้มีการขึ้นทะเบียนอย่างถูกต้อง
                จากจำนวนลูกค้าที่เติบโตอย่างต่อเนื่องของเราสามารถเป็นเครื่องยืนยันสิ่งนี้ได้
              </p>
            </div>
            <div
              className={`flex flex-col items-center gap-2 bg-white shadow-md px-8  py-10 rounded-md opacity-0 ${
                aboutusIsVisible ? "aboutus-l" : ""
              }`}
            >
              <FaRegSmile className="fill-amber-600 text-4xl" />
              <h2 className="text-2xl text-amber-500">เราเข้าใจลูกค้าของเรา</h2>
              <p className="text-xl text-zinc-600">
                เราทำงานโดยยึดความพึงพอใจและความสำเร็จของลูกค้าเป็นสิ่งสำคัญ
                Customer Centric
                เราเชื่อว่าสิ่งนี้จะทำให้เราและลูกค้าของเราเติบโตไปด้วยกันอย่างยั่งยืน
              </p>
            </div>
            <div
              className={`flex flex-col items-center gap-2 bg-white shadow-md px-8  py-10 rounded-md opacity-0 ${
                aboutusIsVisible ? "aboutus-r" : ""
              }`}
            >
              <IoDiamondOutline className="text-amber-600 text-4xl" />
              <h2 className="text-2xl text-amber-500">ประสบการณ์ที่หลากหลาย</h2>
              <p className="text-xl text-zinc-600">
                ทีมงานของเรามีประสบการณ์จากหลายกลุ่มธุรกิจ
                และยังมีคุณวุฒิรับรองในสายงานบัญชีและภาษี
                ท่านจึงมั่นใจได้หากให้เราช่วยดูแลบัญชีของท่าน
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between xl:justify-center lg:items-center bg-[#ffaa06] py-8 md:py-14 px-4 gap-8 text-center lg:text-start relative">
          <p className="text-white text-2xl block md:hidden">
            สอบถามสิ่งที่คุณอยากรู้ได้เลย <br />
            เรายินดีเป็นอย่างมากที่จะได้ช่วยคุณ
          </p>
          <p className="text-white text-2xl hidden md:block w-full lg:w-fit lg:text-3xl">
            สอบถามสิ่งที่คุณอยากรู้ได้เลย เรายินดีเป็นอย่างมากที่จะได้ช่วยคุณ
          </p>
          <div className="w-fit md:flex md:pl-6 lg:pl-0 xl:justify-center">
            <button className="text-white bg-[#333645] py-4 px-8 text-lg rounded-lg lg:px-20 lg:text-xl">
              ติดต่อเรา
            </button>
          </div>
          <div className="w-full h-10 absolute -bottom-10 left-0 z-10 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-b-[40px] border-b-[#292b37] z-10 rotate-180"></div>
          </div>
        </div>
        <article className="bg-[url(/business-bg.webp)] scale-y-[-1] bg-center bg-no-repeat bg-cover text-center py-16 xl:px-50">
          <div className="scale-y-[-1] flex flex-col items-center gap-16">
            <h2
              ref={articles}
              className="text-4xl text-zinc-800 relative after:block after:w-20 after:h-0.5 after:bg-zinc-600 after:mt-8 after:mx-auto"
            >
              บทความและสาระดีๆ
            </h2>
            <section className="flex flex-col gap-6 md:flex-row md:px-4 ">
              {blogs.map((blog, index) => (
                <div
                  className={`flex flex-col items-center px-5 md:px-0 w-full opacity-0 ${
                    articlesIsVisible ? "animate-article" : ""
                  }`}
                  key={index}
                >
                  <Image
                    src={`/${blog.img}`}
                    alt={blog.title}
                    width={350}
                    height={197}
                    className="cursor-pointer w-full"
                  />
                  <div className="p-6 shadow-md bg-white text-left grid gap-2">
                    <Link
                      href={""}
                      className="text-2xl hover:text-amber-400 transition-colors ease-in-out"
                    >
                      <h3>{blog.title}</h3>
                    </Link>
                    <p className="text-lg">{blog.article}</p>
                  </div>
                </div>
              ))}
            </section>
            <button className="bg-amber-400 text-white text-xl py-2 px-8 rounded-xl shadow-xl hover:bg-[#4d4e56] active:bg-[#4d4e56]">
              ดูบทความเพิ่มเติม
            </button>
          </div>
        </article>
      </main>
    </>
  );
}
