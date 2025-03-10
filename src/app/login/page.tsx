"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (session) router.replace("/");
  }, [session, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!res) {
        setError("เกิดข้อผิดพลาด");
        return;
      }

      if (res?.error) {
        setError("อีเมล์หรือรหัสผ่านไม่ถูกต้อง");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log("Error during sign-in:", error);
      setError("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <section className="h-svh w-full p-4 md:px-25 md:py-20 lg:px-50 xl:px-[30%]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-zinc-700">เข้าสู่ระบบ</h2>

          {error && (
            <div className="bg-red-500 w-fit text-lg text-white py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="อีเมล์"
              className="p-4 bg-zinc-100 rounded-md outline-none"
            />
            <div className="relative w-full">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="รหัสผ่าน"
                className="p-4 bg-zinc-100 rounded-md outline-none w-full"
              />
              <div
                onClick={toggleShowPassword}
                className="absolute top-1/5 right-3 text-3xl text-zinc-500"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-blue-400 text-white text-2xl font-bold rounded-full p-2 w-full">
              เข้าสู่ระบบ
            </button>
            <div className="flex gap-1">
              <p>ไม่มีสมาชิก?</p>
              <Link href={"/register"} className="text-red-500">
                สมัครสมาชิก
              </Link>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default Login;
