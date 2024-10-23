import Navbar from '../components/Navbar';
import { FaPalette, FaCode, FaServer } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="services mt-10 py-20 relative" id="services">
        {/* Headings Text Starts */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#05555c]">Services</h1>
          <h3 className="text-xl text-[#186f78]">I Provide Awesome Services</h3>
        </header>
        {/* Headings Text Ends */}

        {/* Services Box Container Starts */}
        <div className="flex flex-col md:flex-row mx-10 justify-between gap-4">
          {/* Web Design Service Box */}
          <div className="service-box relative flex flex-col items-start bg-[#f6f9fe] border border-[#eef1f6] rounded-lg p-10 transition-transform duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 md:flex-1 overflow-hidden">
            <div className="icon-wrapper bg-[#05555c] rounded-full flex justify-center items-center w-14 h-14 mb-4">
              <FaPalette className="text-white text-2xl" />
            </div>
            <h2 className="text-[#05555c] text-xl mb-2 font-bold">Web Design</h2>
            <p className="text-[#3f7277] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3 className="text-[#186f78] font-bold">50+ Projects</h3>
            <div className="absolute bottom-0 left-0 w-full h-[0%] bg-[#05555c] transition-all duration-300 ease-in-out transform origin-bottom scale-y-0 hover:scale-y-100 hover:h-full"></div>
          </div>

          {/* Frontend Development Service Box */}
          <div className="service-box relative flex flex-col items-start bg-[#f6f9fe] border border-[#eef1f6] rounded-lg p-10 transition-transform duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 md:flex-1 overflow-hidden">
            <div className="icon-wrapper bg-[#05555c] rounded-full flex justify-center items-center w-14 h-14 mb-4">
              <FaCode className="text-white text-2xl" />
            </div>
            <h2 className="text-[#05555c] text-xl mb-2 font-bold">Frontend Development</h2>
            <p className="text-[#3f7277] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3 className="text-[#186f78] font-bold">30+ Projects</h3>
            <div className="absolute bottom-0 left-0 w-full h-[0%] bg-[#05555c] transition-all duration-300 ease-in-out transform origin-bottom scale-y-0 hover:scale-y-100 hover:h-full"></div>
          </div>

          {/* Backend Development Service Box */}
          <div className="service-box relative flex flex-col items-start bg-[#f6f9fe] border border-[#eef1f6] rounded-lg p-10 transition-transform duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 md:flex-1 overflow-hidden">
            <div className="icon-wrapper bg-[#05555c] rounded-full flex justify-center items-center w-14 h-14 mb-4">
              <FaServer className="text-white text-2xl" />
            </div>
            <h2 className="text-[#05555c] text-xl mb-2 font-bold">Backend Development</h2>
            <p className="text-[#3f7277] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3 className="text-[#186f78] font-bold">10+ Projects</h3>
            <div className="absolute bottom-0 left-0 w-full h-[0%] bg-[#05555c] transition-all duration-300 ease-in-out transform origin-bottom scale-y-0 hover:scale-y-100 hover:h-full"></div>
          </div>
        </div>
        {/* Services Box Container Ends */}
      </section>
    </>
  );
};

export default Services;
