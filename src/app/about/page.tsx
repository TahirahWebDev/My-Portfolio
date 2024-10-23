import Image from "next/image";
import Navbar from "../components/Navbar";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col md:flex-row mt-16 mb-0 justify-between p-5 md:p-20">
        {/* About Image */}
        <div className="relative flex-none w-full md:w-[30%] h-[300px] md:h-[450px] bg-[#eaf3fa] mb-5 md:mb-0">
          <div className="absolute top-0 left-0 w-full h-full outline outline-3 outline-[#05555c] -m-[10px] z-1" />
          <Image
            src="https://i.pinimg.com/736x/b1/6a/28/b16a28b9cd8609d96c1c58e95dfda562.jpg"
            alt="About Me"
            className="w-full h-full object-cover rounded-md"
            fill
          />
          <div className="absolute top-1/2 left-full py-5 transform -translate-x-1/2 -translate-y-1/2 bg-[#05555c] p-3">
            <div className="flex flex-col items-center space-y-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f6f9fe] cursor-pointer transition-transform duration-300 hover:scale-125"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f6f9fe] cursor-pointer transition-transform duration-300 hover:scale-125"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f6f9fe] cursor-pointer transition-transform duration-300 hover:scale-125"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f6f9fe] cursor-pointer transition-transform duration-300 hover:scale-125"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* About Description */}
        <div className="flex-none w-full md:w-2/3 ml-0 md:ml-3">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-[#186f78]">About Me</h1>
            <h3 className="text-xl mt-4 text-[#05555c]">Professional Web Designer & Developer</h3>
          </div>
          <p className="text-base text-[#3f7277] mb-4">
            As a passionate web designer and developer, I specialize in creating visually stunning and user-friendly websites. My approach combines creativity with functionality, ensuring that each project performs seamlessly across all devices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-[#05555c] pb-4 mb-4">
            <div>
              <span className="font-semibold">Name:</span>
              <span className="ml-2">Tahirah Roohi</span>
            </div>
            <div>
              <span className="font-semibold">Age:</span>
              <span className="ml-2">14 Years</span>
            </div>
            <div>
              <span className="font-semibold">Email:</span>
              <span className="ml-2">roohitahirah@gmail.com</span>
            </div>
            <div>
              <span className="font-semibold">Hobby:</span>
              <span className="ml-2">Coding</span>
            </div>
          </div>
          <button className="hidden md:inline bg-[#05555c] text-[#f6f9fe] border border-transparent rounded-full text-[16px] mt-6 py-2 px-6 tracking-wide transition-all duration-300 hover:bg-[#f6f9fe] hover:text-[#05555c] hover:border-[#05555c] shadow-lg hover:shadow-xl">
            Download CV
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
