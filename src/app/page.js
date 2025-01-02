import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Furniture",
    image: "/images/furniture.jpg",
  },
  {
    id: 2,
    name: "Decor",
    image: "/images/decor.jpg",
  },
  {
    id: 3,
    name: "Rugs",
    image: "/images/rugs.jpg",
  },
  {
    id: 4,
    name: "Lighting",
    image: "/images/lighting.jpg",
  },
  {
    id: 5,
    name: "Outdoor Products",
    image: "/images/products.jpg",
  },
  {
    id: 6,
    name: "Ceiling Fans",
    image: "/images/fans.jpg",
  },
];
const lighting = [
  {
    id: 1,
    name: "Path Lighting",
    image: "/images/path_lighting.jpeg",
  },
  {
    id: 2,
    name: "Accent Lights",
    image: "/images/accent_lights.jpeg",
  },
  {
    id: 3,
    name: "Deck Lights",
    image: "/images/deck_lights.jpeg",
  },
  {
    id: 4,
    name: "Well Lights",
    image: "/images/well_lights.jpeg",
  },
  {
    id: 5,
    name: "Bollard Path Lights",
    image: "/images/bollards_path_lights.jpeg",
  },
  {
    id: 6,
    name: "Flood Fans",
    image: "/images/flood_lights.jpeg",
  },
];
const rooms = [
  {
    id: 1,
    name: "Dining Room",
    image: "/images/Dining_room.jpg",
  },
  {
    id: 2,
    name: "Kitchen Lighting",
    image: "/images/Kitchen_lighting.jpg",
  },
  {
    id: 3,
    name: "Bedroom Lighting",
    image: "/images/bedroom_lighting.jpg",
  },
  {
    id: 4,
    name: "Living Room",
    image: "/images/living_room.jpg",
  },
  {
    id: 5,
    name: "Entryway/Foyer",
    image: "/images/foyer.jpg",
  },
  {
    id: 6,
    name: "Work/Office Space",
    image: "/images/office.jpg",
  },
];
export default function Home() {
  return (
    <>
    <div className="container mx-auto overflow-x-hidden">
      <section id="home">
        {/* Logo Section */}
        <div className="header flex flex-row  justify-between items-center esm:flex-col">
          <div className="relative w-[200px] h-[90px] mb-4 ml-40 esm:ml-0  sm:ml-10 md:ml-10 lg:ml-20 esm:w-[150px] sm:w-[250px] md:w-[200px] lg:w-[200px] 2xl:w-[250px]">
            <Image
              src="/images/logo.png"
              alt="logo"
              className="rounded-full"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Search Input */}
          <input
            type="search"
            placeholder="Search for Anything"
            className="px-4 py-2 border border-black w-[200px] outline-none mr-20 esm:ml-20 esm:w-[200px] sm:w-[250px] md:w-[350px] lg:w-[400px] 2xl:w-[500px] esm:mr-10 sm:mr-5"
          />
        </div>

        {/* Main Images Section */}
        <div className="flex flex-row items-center justify-center gap-10 mt-10 esm:flex-col esm:overflow-y-hidden sm:flex-col md:flex-row lg:flex-row xl:flex-row">
          <div className="relative w-[400px] h-[250px] esm:w-[300px] sm:w-[350px] md:w-[400px] lg:w-[400px] xl:w-[400px]">
            <Image
              src="/images/lamp_1.jpg"
              alt="home"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[400px] h-[250px] esm:hidden sm:w-[350px] md:w-[400px] lg:w-[400px] xl:w-[400px]">
            <Image
              src="/images/lamp_2.jpg"
              alt="home"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[400px] h-[250px] esm:hidden sm:w-[350px] md:w-[400px] lg:w-[400px] xl:w-[400px]">
            <Image
              src="/images/lamp_3.jpg"
              alt="home"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div>
          <h1 className="text-1xl italic font-semibold text-center mt-10">
            Online Variety Meets Showroom Confidence
          </h1>
          <p className="text-center mt-4">
            Lifetime Warranty | Easy Returns | In-Stock Guarantee
          </p>
        </div>
      </section>

      <section id="collection" className="mt-20">
        <h1 className="text-2xl  font-semibold text-center mt-10">
          CURATED STYLE COLLECTIONS
        </h1>
        <p className="text-center italic mt-3">
          Products individually selected by our style experts.
        </p>
        <div>
          <div className="flex flex-row justify-center items-center flex-wrap gap-20 mt-10 esm:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
            <div className="relative  w-[250px] h-[250px] ">
              <Image
                src="/images/collection1.jpg"
                alt="home"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
              <Link href="/collection" passHref>
                <div className="absolute top-60 left-0 mt-6 w-full text-center text-black font-bold underline text-lg">
                  Bohemian Decor
                </div>
              </Link>
            </div>

            <div className="relative w-[250px] h-[250px] ">
              <Image
                src="/images/collection2.jpg"
                alt="home"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
              <Link href="/collection" passHref>
                <div className="absolute top-60 left-0 mt-6 w-full text-center text-black font-bold underline text-lg">
                  Modern Farmhouse Decor
                </div>
              </Link>
            </div>

            <div className="relative w-[250px] h-[250px] ">
              <Image
                src="/images/collection3.jpg"
                alt="home"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
              <Link href="/collection" passHref>
                <div className="absolute top-60 left-0 mt-6 w-full text-center text-black font-bold underline text-lg">
                  Fall Decor
                </div>
              </Link>
            </div>

            <div className="relative w-[250px] h-[250px] ">
              <Image
                src="/images/collection4.jpg"
                alt="home"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
              <Link href="/collection" passHref>
                <div className="absolute top-60 left-0 mt-6 w-full text-center text-black font-bold underline text-lg">
                  Coastal Decor
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center gap-20 mt-40">
          <div className="relative w-[650px] h-[250px] ">
            <Image
              src="/images/post1.jpg"
              alt="home"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-[650px] h-[250px] ">
            <Image
              src="/images/post2.jpg"
              alt="home"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section id="category">
        <div>
          <h1 className="text-2xl  font-semibold text-center mt-10 mt-20">
            START HERE FOR STYLE:SHOP BY CATEGORY
          </h1>
          <div>
            <div className="flex flex-row justify-center items-center flex-wrap gap-20 mt-10 ">
              {categories.map((category) => (
                <div className="relative w-[400px] h-[600px] esm:w-[90%]" key={category.id}>
                  <Image
                    src={category.image}
                    alt="home"
                    layout="fill"
                    objectFit="cover"
                  
                  />
                  <Link href="/category" passHref>
                    <div className="absolute bottom-5 left-5 mt-6 w-full text-black font-bold underline text-2xl">
                      {category.name}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <hr />
        </div>
      </section>

      <div>
        <h1 className="text-2xl  font-semibold text-center mt-10 mt-20">
          Landscape Lighting for Every Purpose
        </h1>

        <div className="flex flex-row justify-center items-center flex-wrap gap-10 mt-10 pb-5">
          {lighting.map((lighting) => (
            <div className="flex flex-col items-center" key={lighting.id}>
              {/* Image */}
              <div className="relative w-[200px] h-[200px]">
                <Image
                  src={lighting.image}
                  alt="home"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Text Below the Image */}
              <Link href="/category" passHref>
                <div className="w-[200px] text-center bg-white/70 text-black font-bold underline text-lg py-1 mt-2">
                  {lighting.name}
                </div>
              </Link>
            </div>
          ))}
        </div>

        <hr className="border-1 border-gray-400 w-[90%] mx-auto my-4" />
      </div>

      <div className="mt-10">
        <h1 className=" text-2xl  font-semibold text-center  ">
          Time for a New Look: Shop by Room
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center mt-10">
  {rooms.map((room) => (
    <div className="flex flex-col items-center" key={room.id}>
      {/* Image */}
      <div className="relative w-[250px] h-[250px]">
        <Image
          src={room.image}
          alt="home"
          layout="fill"
          objectFit="cover"
          className="rounded-full transition-transform duration-[1000ms] transform hover:scale-110"
        />
      </div>

      {/* Text Below the Image */}
      <Link href="/category" passHref>
        <div className="text-black font-bold hover:underline text-xl mt-4 text-center">
          {room.name}
        </div>
      </Link>
    </div>
  ))}
</div>

        <hr className="border-t-4 border-pink-700 w-[80%] mx-auto my-20" />
      </div>
      </div>
    </>
  );
}
