import Certifications from "../Certifications/certifications"
import Experience from "../Experience/Experience"

const AboutMe = () => {
  return (
    <>
    <section className="flex flex-col px-6 md:px-[70px] py-8 md:py-[80px] text-white border-b">
    <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <p className="uppercase text-4xl md:text-[101px] text-white leading-[90%]" style={{fontFamily: "Bebas Neue, sans-serif"}}>
                About me
            </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6 justify-start items-start">
            <div className="flex flex-col gap-2 md:gap-3">
                <p className="text-lg md:text-[32px] leading-[140%] font-medium w-full md:w-fit" style={{fontFamily: "Manrope, sans-serif"}}>
                  A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
                </p>
                <p className="text-sm md:text-lg leading-[150%] text-[#C7C7C7]" style={{fontFamily: "Manrope, sans-serif"}}>
                  As a result-oriented Web Developer, I specialize in building and managing websites and web applications that drive product success. With a strong foundation in front-end and back-end technologies, I create seamless, user-centric digital experiences that align with business goals. My passion for coding is matched by my commitment to continuous learning, allowing me to stay ahead of industry trends and implement innovative solutions. I thrive in collaborative environments, working closely with teams to deliver high-quality, scalable products. Whether it&apos;s optimizing site performance or crafting custom features, I am dedicated to turning ideas into impactful, functional realities.
                </p>
            </div>
            <div className="contact flex flex-col sm:flex-row gap-4">
                <a style={{fontFamily: "Manrope, sans-serif"}} href=""
                  download="Sufiyan_Chishty.pdf"
                   className="text-black flex gap-2 justify-center items-center bg-[#D3E97A] px-5 py-3 md:py-4 rounded-full font-bold uppercase hover:bg-black hover:text-[#D3E97A] hover:border hover:border-[#D3E97A] animate-bounce">
                    Download my resume
                    <i className="ri-download-2-line text-lg md:text-xl"></i>
                </a>
                <div className="flex gap-4">
                    <a href='https://www.linkedin.com/in/sufiyan-chishty-9288101b9/' target="_blank">
                        <i className="ri-linkedin-fill text-[#D3E97A] text-xl md:text-2xl bg-gray-600 rounded-full p-2 text-center"></i>
                    </a>
                    <a href='https://github.com/sufiyan1234-heu' target="_blank">
                        <i className="ri-github-fill text-[#D3E97A] text-xl md:text-2xl bg-gray-600 rounded-full p-2 text-center"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div className="py-8 text-white border-y mt-3">
        <h2 className="uppercase text-4xl md:text-[56px] font-bold mb-8" style={{fontFamily: "Bebas Neue, sans-serif"}}>
          Education
        </h2>
        <div className="flex flex-col gap-8">
          {/* COMSATS University */}
          <div className="education-item">
            <h3 className="text-2xl md:text-3xl font-semibold" style={{fontFamily: "Manrope, sans-serif"}}>
              COMSATS University, Lahore, Pakistan
            </h3>
            <p className="text-lg md:text-xl text-[#C7C7C7]" style={{fontFamily: "Manrope, sans-serif"}}>
              Bachelor of Science in Computer Science
            </p>
            <p className="text-md md:text-lg text-[#C7C7C7]" style={{fontFamily: "Manrope, sans-serif"}}>
              GPA: 3.1 &middot; Sep 2020 – June 2024
            </p>
          </div>
          {/* Forman Christian College */}
          <div className="education-item">
            <h3 className="text-2xl md:text-3xl font-semibold" style={{fontFamily: "Manrope, sans-serif"}}>
              Forman Christian College, Lahore, Pakistan
            </h3>
            <p className="text-lg md:text-xl text-[#C7C7C7]" style={{fontFamily: "Manrope, sans-serif"}}>
              Intermediate – ICS, 87%
            </p>
            <p className="text-md md:text-lg text-[#C7C7C7]" style={{fontFamily: "Manrope, sans-serif"}}>
              2018 – 2020
            </p>
          </div>
        </div>
      </div>

    {/* <div className="w-full h-auto md:h-screen flex justify-center items-center mb-8 mt-8 md:mt-20">
        <div className="relative w-full h-[300px] md:h-[700px] bg-[#C7C7C7] rounded-lg overflow-hidden">
            <img className=" absolute md:top-[7%] md:left-[32%] inset-0 w-full h-full md:w-[464px] md:h-[652px] mix-blend-multiply object-contain md:object-cover" src="" alt="Bohemian man with arms crossed" />
        </div>
    </div> */}

    <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-16 ">
       
        <div className="w-full md:w-1/2">
          <p
            className="uppercase text-4xl md:text-5xl lg:text-[76px] text-white leading-tight"
            style={{fontFamily: "Bebas Neue, sans-serif"}}
          >
            My Capabilities
          </p>
        </div>
      
        
        <div style={{fontFamily: "Manrope, sans-serif"}} className="w-full md:w-1/2 flex flex-col gap-8">
          
          <div>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#C7C7C7]">
              Dedicated to continuous learning and skill enhancement, with a focus on mastering diverse technologies and innovative solutions to drive success.
            </p>
          </div>
      
         
          <div className="flex flex-wrap gap-4">
            <p className="border border-[#484848] font-bold leading-tight w-fit px-6 py-3 rounded-full text-center">
              HTML
            </p>
            <p className="border border-[#484848] font-bold leading-tight w-fit px-6 py-3 rounded-full text-center">
              CSS
            </p>
            <p className="border border-[#484848] font-bold leading-tight w-fit px-6 py-3 rounded-full text-center">
              Javascript
            </p>
            <p className="border border-[#484848] font-bold leading-tight w-fit px-6 py-3 rounded-full text-center">
              Tailwind CSS
            </p>
            <p className="border border-[#484848] font-bold leading-tight w-fit px-6 py-3 rounded-full text-center">
              React
            </p>
            <p className="border border-[#484848] font-bold leading-tight w-fit px-6 py-3 rounded-full text-center">
              Python
            </p>
            <p className="border border-[#484848] font-bold leading-tight w-fit px-6 py-3 rounded-full text-center">
              Django
            </p>
            <p className="border border-[#484848] font-bold leading-tight w-fit px-6 py-3 rounded-full text-center">
              Shopify
            </p>
          </div>
        </div>
    </div>
</section>
<Experience/>
<Certifications/>
    </>
  )
}

export default AboutMe
