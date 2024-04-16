import Image from "next/image";

export default function Destination() {
  return (
    <>
      <Image
        className="top-0 left-0 object-cover -z-1 w-full h-full fixed"
        alt=""
        width={1440}
        height={900}
        src="/assets/BitmapDestination.jpg"
      ></Image>
      <div className="relative">
        <div className="flex"></div>
      </div>
    </>
  );
}
