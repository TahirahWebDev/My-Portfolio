import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 mt-10 bg-gray-50" id="portfolio">
        {/* Headings */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800">Some Of My Projects</h1>
          <p className="text-[#186f78] mt-4">
            Check out my web projects that highlight my skills in creating attractive and user-friendly interfaces. Click below to explore!
          </p>
        </header>

        {/* Portfolio Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Portfolio Items */}
          {[
            { src: "/web1.png", link: "https://tahirahroohi271.github.io/Fiverr/", alt: "Portfolio Item 1" },
            { src: "/web2.png", link: "https://tahirahroohi271.github.io/Notes-Web-App/", alt: "Portfolio Item 2" },
            { src: "/web3.png", link: "https://tahirahroohi271.github.io/Hackathon-2-updated/", alt: "Portfolio Item 3" },
            { src: "/web4.png", link: "https://tahirahroohi271.github.io/todo--list/", alt: "Portfolio Item 4" },
            { src: "/web5.png", link: "https://tahirahroohi271.github.io/Memory-Game/", alt: "Portfolio Item 5" },
            { src: "/web6.png", link: "https://tahirahroohi271.github.io/JS-StopWatch/", alt: "Portfolio Item 6" },
          ].map((item, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-teal-800 bg-opacity-70 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <Link href={item.link} className="inline-block px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-teal-800 transition-all">
                    Go To Web
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
