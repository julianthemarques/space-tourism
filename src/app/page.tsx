import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 -z-1 w-screen h-screen overflow-hidden">
        <Image
          className="object-cover w-full h-full max-lg:rotate-90"
          alt=""
          width={1440}
          height={900}
          src="/assets/Bitmap.jpg"
        ></Image>
      </div>
      <main className="p-4 relative flex justify-between max-w-screen-lg mx-auto mt-[25vh] items-end max-lg:flex max-lg:items-center max-lg:flex-col w-[100vw]">
        <section className="flex flex-col text-white max-w-md gap-6">
          <h2 className="text-[#D0D6F9] text-2xl font-barlow-condensed tracking-[5px]">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="text-9xl">SPACE</h1>
          <p className="text-lg text-[#D0D6F9] font-barlow mt-6">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <section className="text-[#0B0D17] flex justify-center max-lg:mt-24">
          <span className="border-transparent ring-0 ring-[#979797] hover:ring-opacity-[13%] hover:ring-[40px] rounded-full ease-in-out transition duration-1000">
            <Link
              href="/destination"
              className="bg-white rounded-full p-12 aspect-square h-fit text-3xl items-center flex"
            >
              EXPLORE
            </Link>
          </span>
        </section>
      </main>
    </>
  );
}
