import { FaBriefcase, FaFile, FaThumbsUp } from 'react-icons/fa';

export default function Career (){
  return (
    <div className="relative w-full px-[8%] mt-[-100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="career-item flex items-center bg-[#f6f9fe] h-[70px] p-2 rounded-lg shadow-md">
          <span className="icon bg-[#05555c] min-w-[50px] w-[50px] h-[50px] mr-4 flex justify-center items-center rounded-full">
            <FaBriefcase className="text-[#f6f9fe] text-[22px]" /> {/* Using React Icons */}
          </span>
          <span className="career-desc">
            <h2 className="text-[20px] leading-[1.4] text-[#05555c]">1 year</h2>
            <p className="text-[14px] text-[#3f7277]">Experience</p>
          </span>
        </div>

        <div className="career-item flex items-center bg-[#f6f9fe] h-[70px] p-2 rounded-lg shadow-md">
          <span className="icon bg-[#05555c] min-w-[50px] w-[50px] h-[50px] mr-4 flex justify-center items-center rounded-full">
            <FaFile className="text-[#f6f9fe] text-[22px]" /> {/* Using React Icons */}
          </span>
          <span className="career-desc">
            <h2 className="text-[20px] leading-[1.4] text-[#05555c]">100+ Projects</h2>
            <p className="text-[14px] text-[#3f7277]">Completed</p>
          </span>
        </div>

        <div className="career-item flex items-center bg-[#f6f9fe] h-[70px] p-2 rounded-lg shadow-md">
          <span className="icon bg-[#05555c] min-w-[50px] w-[50px] h-[50px] mr-4 flex justify-center items-center rounded-full">
            <FaThumbsUp className="text-[#f6f9fe] text-[22px]" /> {/* Using React Icons */}
          </span>
          <span className="career-desc">
            <h2 className="text-[20px] leading-[1.4] text-[#05555c]">50+</h2>
            <p className="text-[14px] text-[#3f7277]">Positive Feedback</p>
          </span>
        </div>
      </div>
  )
}