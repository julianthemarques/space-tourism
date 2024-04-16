import { barlowCondensed } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className={`flex pt-14 sticky justify-end w-full z-50 ${barlowCondensed.className}`}
    >
      <div className="flex justify-between w-[90%]">
        <Image
          className="h-[48px] w-[48px] flex self-center"
          width={48}
          height={48}
          alt=""
          src={"/assets/logo.png"}
        />
        <Image
          className="z-50 absolute top-[100px] right-[750px]"
          alt=""
          width={473}
          height={1}
          src={"/assets/headerLine.png"}
        />
        <div className="backdrop-blur-[80px] bg-white/5 min-h-[6rem] min-w-[50rem] flex items-center justify-center">
          <ul className="flex gap-10 text-white">
            <li className="liEffects">
              <Link href="/">
                <span className="font-bold text-white">00</span> HOME
              </Link>
            </li>
            <li className="liEffects">
              <Link href="/destination">
                <span className="font-bold text-white">01</span> DESTINATION
              </Link>
            </li>
            <li className="liEffects">
              <Link href="">
                <span className="font-bold text-white">02</span> CREW
              </Link>
            </li>
            <li className="liEffects">
              <Link href="">
                <span className="font-bold text-white">03</span> TECHNOLOGY
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
