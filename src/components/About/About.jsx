import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row px-6 md:px-[70px] xl:px-[100px] 2xl:px-[120px] py-10 md:py-[80px] xl:py-[100px] 2xl:py-[120px] text-white border-b"
    >
      <div className="w-full md:w-1/2 h-auto mb-8 md:mb-0">
        <p
          className="uppercase text-5xl md:text-[101px] xl:text-[120px] 2xl:text-[140px] text-white leading-[90%]"
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          About me
        </p>
      </div>
      <div className="w-full md:w-1/2 h-auto flex flex-col gap-8 justify-start items-start">
        <div className="flex flex-col gap-3 2xl:max-w-screen-lg">
          <p
            className="text-xl md:text-[32px] xl:text-[30px] 2xl:text-[48px] leading-[140%] font-medium w-full md:w-fit text-left"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            A Result-Oriented Web Developer building and managing Websites and Web Applications that lead to the success of the overall product.
          </p>
          <p
            className="text-sm md:text-lg xl:text-lg 2xl:text-2xl leading-[150%] text-[#C7C7C7] 2xl:text-pretty text-left "
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            As a result-oriented Web Developer, I specialize in building and managing websites and web applications that drive product success. With a strong foundation in front-end and back-end technologies, I create seamless, user-centric digital experiences that align with business goals. My passion for coding is matched by my commitment to continuous learning, allowing me to stay ahead of industry trends and implement innovative solutions. I thrive in collaborative environments, working closely with teams to deliver high-quality, scalable products. Whether it's optimizing site performance or crafting custom features, I am dedicated to turning ideas into impactful, functional realities.
          </p>
        </div>
        <div>
        <Link to="about" class="cta flex items-center justify-center">
  <span className="text-black">More About Me</span>
  <svg width="13px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</Link>
        </div>

      
  
      </div>
    </section>
  );
};

export default About;

