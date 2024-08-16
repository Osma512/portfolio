// const Contact = () => {
//   return (
//     <section id="contact" className="flex flex-col md:flex-row h-auto md:h-screen px-6 md:px-[70px] py-10 md:py-[80px] text-white">
//     <div className="w-full md:w-1/2 flex flex-col justify-between items-start mb-10 md:mb-0">
//       <div className="flex flex-col gap-10 md:gap-[40px]">
//         <h1 className="text-4xl md:text-[76px] leading-tight md:leading-[100%]" style={{fontFamily: "Bebas Neue, sans-serif"}}>Let&apos;s connect</h1>
//         <div className="flex flex-col gap-2 md:gap-1 text-base md:text-[18px]" style={{fontFamily: "Manrope, sans-serif"}}>
//           <p className="leading-[150%] text-[#C7C7C7]">
//             Say hello at 
//             <span className="underline text-[#D3E97A] hover:text-white"><a href="#">sufiyanchishty71@gmail.com</a></span>
//           </p>
//           <p>
//             For more info, here is my 
//             <span className="underline text-[#D3E97A] hover:text-white">
//               <a href=""
//                   download="Sufiyan_Chishty.pdf">resume</a>
//             </span>
//           </p>
//         </div>
//         <div className="text-2xl md:text-[32px] text-[#D3E97A] flex gap-4 md:gap-6">
//           <i className="ri-linkedin-fill"></i>
//           <i className="ri-github-fill"></i>
//           <i className="ri-twitter-x-fill"></i>
//           <i className="ri-instagram-line"></i>
//         </div>
//       </div>
//       <p className="font-medium text-sm md:text-base text-[#C7C7C7] leading-[160%]" style={{fontFamily: "Manrope, sans-serif"}}>
//         © 2023 Robert Garcia
//       </p>
//     </div>
//     <div className="w-full md:w-1/2">

// <div className="space-y-4" style={{fontFamily: "Manrope, sans-serif"}}>
//         <div>
//           <label htmlFor="ContactFormName" className="font-medium text-sm md:text-[18px] leading-[160%] text-[#C7C7C7]">Name</label><br/>
//           <input className=" outline-none border-2 border-[#1A1A1A] bg-[#484848] rounded w-full px-4 py-3 md:px-[16px] md:py-[12px]" type="text" id="ContactFormName" name="contact[name]"/>
//         </div>
//         <div>
//           <label htmlFor="ContactFormEmail" className="font-medium text-sm md:text-[18px] leading-[160%] text-[#C7C7C7]">Email</label><br/>
//           <input className=" outline-none border-2 border-[#1A1A1A] bg-[#484848] rounded w-full px-4 py-3 md:px-[16px] md:py-[12px]" type="text" id="ContactFormEmail" name="contact[email]"/>
//         </div>
//         <div>
//           <label htmlFor="ContactFormPhone" className="font-medium text-sm md:text-[18px] leading-[160%] text-[#C7C7C7]">Phone</label><br/>
//           <input className="outline-none border-2 border-[#1A1A1A] bg-[#484848] rounded w-full px-4 py-3 md:px-[16px] md:py-[12px]" type="text" id="ContactFormPhone" name="contact[phone]"/>
//         </div>
//         <div>
//           <label htmlFor="ContactFormMessage" className="font-medium text-sm md:text-[18px] leading-[160%] text-[#C7C7C7]">Message</label><br/>
//           <textarea className=" outline-none border-2 border-[#1A1A1A] bg-[#484848] rounded w-full px-4 py-3 md:px-[16px] md:py-[12px]" id="ContactFormMessage" name="contact[body]" rows="4"></textarea>
//         </div>
//         <input className=" outline-none flex gap-4 justify-center text-black items-center bg-[#D3E97A] px-8 py-3 md:py-4 rounded-full font-bold uppercase hover:bg-black hover:text-[#D3E97A] hover:border hover:border-[#D3E97A] transition duration-200" type="submit" value="send"/>
//       </div> 
//     </div>
//   </section>
//   )
// }

// export default Contact


const Contact = () => {
    return (
      <section
        id="contact"
        className="flex flex-col md:flex-row h-auto  px-6 md:px-[70px] xl:px-[100px] py-10 md:py-[80px] xl:py-[100px] text-white"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-between items-start mb-10 md:mb-0">
          <div className="flex flex-col gap-10 md:gap-[40px] xl:gap-[60px]">
            <h1
              className="text-4xl md:text-[76px] xl:text-[90px] leading-tight md:leading-[100%]"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Let&apos;s connect
            </h1>
            <div
              className="flex flex-col gap-2 md:gap-1 xl:gap-2 text-base md:text-[18px] xl:text-[20px]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              <p className="leading-[150%] text-[#C7C7C7]">
                Say hello at
                <span className="underline text-[#D3E97A] hover:text-white">
                  <a href="#"> sufiyanchishty71@gmail.com</a>
                </span>
              </p>
              <p>
                For more info, here is my
                <span className="underline text-[#D3E97A] hover:text-white">
                  <a href="" download="Sufiyan_Chishty.pdf">
                    {" "}
                    resume
                  </a>
                </span>
              </p>
            </div>
            <div className="text-2xl md:text-[32px] xl:text-[36px] text-[#D3E97A] flex gap-4 md:gap-6 xl:gap-8">
              <i className="ri-linkedin-fill"></i>
              <i className="ri-github-fill"></i>
              <i className="ri-twitter-x-fill"></i>
              <i className="ri-instagram-line"></i>
            </div>
          </div>
          <p
            className="font-medium text-sm md:text-base xl:text-lg text-[#C7C7C7] leading-[160%]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            © 2023 Robert Garcia
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="space-y-4 xl:space-y-6" style={{ fontFamily: "Manrope, sans-serif" }}>
            <div>
              <label
                htmlFor="ContactFormName"
                className="font-medium text-sm md:text-[18px] xl:text-[20px] leading-[160%] text-[#C7C7C7]"
              >
                Name
              </label>
              <br />
              <input
                className="outline-none border-2 border-[#1A1A1A] bg-[#484848] rounded w-full px-4 py-3 md:px-[16px] md:py-[12px] xl:px-[20px] xl:py-[14px]"
                type="text"
                id="ContactFormName"
                name="contact[name]"
              />
            </div>
            <div>
              <label
                htmlFor="ContactFormEmail"
                className="font-medium text-sm md:text-[18px] xl:text-[20px] leading-[160%] text-[#C7C7C7]"
              >
                Email
              </label>
              <br />
              <input
                className="outline-none border-2 border-[#1A1A1A] bg-[#484848] rounded w-full px-4 py-3 md:px-[16px] md:py-[12px] xl:px-[20px] xl:py-[14px]"
                type="text"
                id="ContactFormEmail"
                name="contact[email]"
              />
            </div>
            <div>
              <label
                htmlFor="ContactFormPhone"
                className="font-medium text-sm md:text-[18px] xl:text-[20px] leading-[160%] text-[#C7C7C7]"
              >
                Phone
              </label>
              <br />
              <input
                className="outline-none border-2 border-[#1A1A1A] bg-[#484848] rounded w-full px-4 py-3 md:px-[16px] md:py-[12px] xl:px-[20px] xl:py-[14px]"
                type="text"
                id="ContactFormPhone"
                name="contact[phone]"
              />
            </div>
            <div>
              <label
                htmlFor="ContactFormMessage"
                className="font-medium text-sm md:text-[18px] xl:text-[20px] leading-[160%] text-[#C7C7C7]"
              >
                Message
              </label>
              <br />
              <textarea
                className="outline-none border-2 border-[#1A1A1A] bg-[#484848] rounded w-full px-4 py-3 md:px-[16px] md:py-[12px] xl:px-[20px] xl:py-[14px]"
                id="ContactFormMessage"
                name="contact[body]"
                rows="4"
              ></textarea>
            </div>
            <input
              className="outline-none flex gap-4 justify-center text-black items-center bg-[#D3E97A] px-8 py-3 md:py-4 xl:px-10 xl:py-5 rounded-full font-bold uppercase hover:bg-black hover:text-[#D3E97A] hover:border hover:border-[#D3E97A] transition duration-200"
              type="submit"
              value="send"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  