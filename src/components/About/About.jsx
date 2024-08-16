// import { Link } from "react-router-dom"

// const About = () => {
//   return (
//     <section
//     id="about"
//       className="flex flex-col md:flex-row px-6 md:px-[70px] py-10 md:py-[80px] text-white border-b"
//     >
//       <div className="w-full md:w-1/2 h-auto  mb-8 md:mb-0">
//         <p
//           className="uppercase text-5xl md:text-[101px] text-white leading-[90%]"
//           style={{fontFamily: "Bebas Neue, sans-serif"}}
//         >
//           About me
//         </p>
//       </div>
//       <div
//         className="w-full md:w-1/2 h-auto  flex flex-col gap-8 justify-start items-start"
//       >
//         <div className="flex flex-col gap-3">
//           <p
//             className="text-xl md:text-[32px] leading-[140%] font-medium w-full md:w-fit"
//             style={{fontFamily: "Manrope, sans-serif"}}
//           >
//             A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
//           </p>
//           <p
//             className="text-sm md:text-lg leading-[150%] text-[#C7C7C7]"
//             style={{fontFamily: "Manrope, sans-serif"}}
//           >
//             As a result-oriented Web Developer, I specialize in building and managing websites and web applications that drive product success. With a strong foundation in front-end and back-end technologies, I create seamless, user-centric digital experiences that align with business goals. My passion for coding is matched by my commitment to continuous learning, allowing me to stay ahead of industry trends and implement innovative solutions. I thrive in collaborative environments, working closely with teams to deliver high-quality, scalable products. Whether it&apos;s optimizing site performance or crafting custom features, I am dedicated to turning ideas into impactful, functional realities.
//           </p>
//         </div>
//         <div>
//           <Link
//             to="about"
//             className="flex items-center space-x-2 border-b-2 border-[#D3E97A] hover:text-[#D3E97A] hover:border-[#D3E97A] transition duration-200"
//           >
//             <span
//               className="mb-2 uppercase font-bold text-sm md:text-base leading-[150%] text-[#D3E97A]"
//               style={{fontFamily: "Manrope, sans-serif"}}
//               >More about me</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About


import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row px-6 md:px-[70px] xl:px-[100px] py-10 md:py-[80px] xl:py-[100px] text-white border-b"
    >
      <div className="w-full md:w-1/2 h-auto mb-8 md:mb-0">
        <p
          className="uppercase text-5xl md:text-[101px] xl:text-[120px] text-white leading-[90%]"
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          About me
        </p>
      </div>
      <div className="w-full md:w-1/2 h-auto flex flex-col gap-8 justify-start items-start">
        <div className="flex flex-col gap-3">
          <p
            className="text-xl md:text-[32px] xl:text-[40px] leading-[140%] font-medium w-full md:w-fit"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            A Result-Oriented Web Developer building and managing Websites and Web Applications that lead to the success of the overall product.
          </p>
          <p
            className="text-sm md:text-lg xl:text-xl leading-[150%] text-[#C7C7C7]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            As a result-oriented Web Developer, I specialize in building and managing websites and web applications that drive product success. With a strong foundation in front-end and back-end technologies, I create seamless, user-centric digital experiences that align with business goals. My passion for coding is matched by my commitment to continuous learning, allowing me to stay ahead of industry trends and implement innovative solutions. I thrive in collaborative environments, working closely with teams to deliver high-quality, scalable products. Whether it's optimizing site performance or crafting custom features, I am dedicated to turning ideas into impactful, functional realities.
          </p>
        </div>
        <div>
          <Link
            to="about"
            className="flex items-center space-x-2 border-b-2 border-[#D3E97A] hover:text-[#D3E97A] hover:border-[#D3E97A] transition duration-200"
          >
            <span
              className="mb-2 uppercase font-bold text-sm md:text-base xl:text-lg leading-[150%] text-[#D3E97A]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              More about me
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
