import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="w-full mt-8 py-20 px-5 md:px-8 contact-form">
        <div className="flex flex-col md:flex-row bg-[#f6f9fe] contact-row">
          {/* Left Column Starts */}
          <div className="flex-[100%] md:flex-[40%] min-w-[320px] p-8 md:p-12 column-1 mb-8 md:mb-0">
            <div className="contactTitle mb-6">
              <h2 className="relative text-3xl text-[#05555c] inline-block mb-6">
                Get In Touch
                <span className="absolute left-0 top-[120%] w-full h-[1px] bg-[#277b6d]"></span>
                <span className="absolute left-0 top-[119%] w-[40%] h-[3px] bg-[#05555c]"></span>
              </h2>
              <p className="text-[#3f7277] text-sm leading-5 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
              </p>
            </div>

            <form className="form-1">
              <div className="relative mb-10 inputGroup">
                <input
                  type="text"
                  required
                  className="w-full text-lg py-2 bg-[#f6f9fe] text-[#05555c] border-b border-[#3f7277] outline-none"
                />
                <label className="absolute left-0 bottom-1 text-[#3f7277] text-sm transition-transform duration-300 pointer-events-none">
                  Your Name
                </label>
              </div>

              <div className="relative mb-10 inputGroup">
                <input
                  type="email"
                  required
                  className="w-full text-lg py-2 bg-[#f6f9fe] text-[#05555c] border-b border-[#3f7277] outline-none"
                />
                <label className="absolute left-0 bottom-1 text-[#3f7277] text-sm transition-transform duration-300 pointer-events-none">
                  Email
                </label>
              </div>
            </form>

            <div className="flex items-center flex-wrap pt-8 contactSocialMedia">
              <a
                href="https://web.facebook.com/profile.php?id=100094042236553"
                className="w-[35px] h-[35px] text-center rounded-md bg-[#05555c] transition-transform duration-300 flex items-center justify-center ml-4"
              >
                <FaFacebookF className="text-[#f6f9fe] text-lg leading-[35px]" />
              </a>
              <a
                href="https://twitter.com/Tahirah_webDev"
                className="w-[35px] h-[35px] text-center rounded-md bg-[#05555c] transition-transform duration-300 flex items-center justify-center ml-4"
              >
                <FaTwitter className="text-[#f6f9fe] text-lg leading-[35px]" />
              </a>
              <a
                href="https://instagram.com/tahirah_roohi?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                className="w-[35px] h-[35px] text-center rounded-md bg-[#05555c] transition-transform duration-300 flex items-center justify-center ml-4"
              >
                <FaInstagram className="text-[#f6f9fe] text-lg leading-[35px]" />
              </a>
              <a
                href="https://linkedin.com/in/tahirah-roohi/"
                className="w-[35px] h-[35px] text-center rounded-md bg-[#05555c] transition-transform duration-300 flex items-center justify-center ml-4"
              >
                <FaLinkedinIn className="text-[#f6f9fe] text-lg leading-[35px]" />
              </a>
            </div>
          </div>
          {/* Left Column Ends */}

          {/* Right Column Starts */}
          <div className="flex-[100%] md:flex-[60%] column-2">
            <form className="form-2 h-full pt-12">
              <div className="relative w-full h-full border-l border-[#3f7277] inputGroup">
                <textarea
                  required
                  className="w-full min-h-[200px] resize-none border-none outline-none bg-[#f6f9fe] text-[#05555c] px-5 pb-0 mb-0 text-lg"
                />
                <label className="absolute top-[25px] left-5 text-[#3f7277] text-sm transition-transform duration-300 pointer-events-none">
                  Say Something
                </label>
                <button className="w-full h-[50px] border-none outline-none bg-[#05555c] text-[#f6f9fe] text-lg leading-[50px] cursor-pointer transition-colors duration-300 hover:bg-[#186f78] absolute bottom-0 left-0 mt-5 form-button">
                  MESSAGE ME
                </button>
              </div>
            </form>
          </div>
          {/* Right Column Ends */}
        </div>
      </section>
    </>
  );
};

export default Contact;
