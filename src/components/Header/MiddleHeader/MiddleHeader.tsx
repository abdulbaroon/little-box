import { logo } from "@/assets";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";

export const MiddleHeader = () => {
  return (
    <section className="bg-primarySoftPink">
      <div className="w-95p mx-auto flex justify-between items-center">
        <div>
          <img src={logo.src} className="w-32 py-5 " alt="logo" />
        </div>
        <div className="flex text-xs gap-5 items-center">
            <Link href={"#"}>Account</Link>
            <Link  href={"#"} className="flex gap-2 items-center"> <span>Search</span><TfiSearch className="text-xl"/></Link>
            <Link  href={"#"} className="flex gap-2 items-center"><span>Cart</span><BsCart3 className="text-xl"/></Link>
        </div>
      </div>
    </section>
  );
};
