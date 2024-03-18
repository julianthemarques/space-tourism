import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        className="z-50 w-full h-full"
        alt=""
        width={1440}
        height={900}
        src="/assets/Bitmap.jpg"
      ></Image>
    </>
  );
}
