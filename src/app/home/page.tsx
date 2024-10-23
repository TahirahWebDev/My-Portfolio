import Career from '../components/Career';
export default function Home() {
  return (
    <>
      <div className="relative w-full min-h-screen flex items-center justify-center bg-[#f6f9fe] overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <h3 className="text-[20px] text-[#05555c] opacity-90 mb-2">Hey, There</h3>
          <h1 className="text-[45px] text-[#05555c] my-3">
            I am <span className="font-bold">Tahirah Roohi</span>
            <span className="block h-[3px] w-[60px] bg-[#05555c] mt-2 mx-auto"></span>
          </h1>
          <h2 className="text-[22px] tracking-wide text-[#05555c] mb-4">Web Designer & Developer</h2>
          <p className="max-w-[600px] mx-auto text-[#186f78] leading-6 mb-6 transition-all duration-300">
            As a passionate web designer and developer, I create visually stunning and user-friendly websites. My strong foundation in design principles and programming ensures that each project combines creativity with functionality, delivering seamless performance across all devices. Let's collaborate to bring your vision to life!
          </p>
          <button className="bg-[#05555c] text-[#f6f9fe] rounded-full text-[16px] py-3 px-8 tracking-wide transition-all duration-300 hover:bg-[#186f78] shadow-lg hover:shadow-xl">
            Hire Me
          </button>
        </div>
      </div>
      <Career />
    </>
  );
}
