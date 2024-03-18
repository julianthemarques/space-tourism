import { barlowCondensed } from "@/app/layout";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className={`flex pt-14 fixed justify-end w-full z-1 ${barlowCondensed.className}`}
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
          className="absolute top-[100px] right-[750px]"
          alt=""
          width={473}
          height={1}
          src={"/assets/headerLine.png"}
        />
        <div className="bg-[#979797]/75 min-h-[6rem] min-w-[50rem] flex items-center justify-center">
          <ul className="flex gap-10 text-white ">
            <li>
              <a href="">
                <span className="font-bold">00</span> HOME
              </a>
            </li>
            <li>
              <a href="">
                <span className="font-bold">01</span> DESTINATION
              </a>
            </li>
            <li>
              <a href="">
                <span className="font-bold">02</span> CREW
              </a>
            </li>
            <li>
              <a href="">
                <span className="font-bold">03</span> TECHNOLOGY
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
