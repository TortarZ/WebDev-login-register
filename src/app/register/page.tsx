"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const { data: session } = useSession();
  useEffect(() => {
    if (session) router.replace("/");
  }, [session, router]);

  console.log(name, email, password, confirmPassword);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError("");
    setSuccess("");

    setShowConfirmPassword(false);
    setShowPassword(false);

    e.preventDefault();
    if (password != confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน");
      return;
    }
    if (!name || !email || !password || !confirmPassword) {
      setError("โปรดใส่ข้อมูลให้ครบทุกช่อง");
      return;
    }

    try {
      const resCheckUser = await fetch("/api/checkUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resCheckUser.json();

      if (user) {
        setError("อีเมล์ถูกใช้งานแล้ว");
        return;
      }
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        setSuccess("สมัครสมาชิกเรียบร้อย");
        const form = e.target as HTMLFormElement;
        form.reset();
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration", error);
    }
  };
  return (
    <>
      <section className="h-svh w-full p-4 md:px-25 md:py-20 lg:px-50 xl:px-150">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-zinc-700">สมัครสมาชิก</h2>

          {error && (
            <div className="bg-red-500 w-fit text-lg text-white py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-500 w-fit text-lg text-white py-1 px-3 rounded-md mt-2">
              {success}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="ชื่อผู้ใช้"
              className="p-4 bg-zinc-100 rounded-md outline-none"
            />
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
            <div className="relative w-full">
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="ยืนยันรหัสผ่าน"
                className="p-4 bg-zinc-100 rounded-md outline-none w-full"
              />
              <div
                onClick={toggleShowConfirmPassword}
                className="absolute top-1/5 right-3 text-3xl text-zinc-500"
              >
                {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="bg-blue-400 text-white text-2xl font-bold rounded-full p-2 w-full"
            >
              สมัครสมาชิก
            </button>
            <div className="flex gap-1">
              <p>เป็นสมาชิกอยู่แล้ว?</p>
              <Link href={"/login"} className="text-red-500">
                เข้าสู่ระบบ
              </Link>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default Register;
