

const Introduction = () => {
  return (
    <section
            className="intro flex flex-col md:flex-row px-6 md:px-[70px] border-b-[1px] xl:px-[400px] border-slate-200"
        >
            <div
                className="w-full md:w-1/2 h-auto  flex flex-col justify-center items-start gap-6 md:gap-[40px] py-10 md:py-0"
            >
                <div className="name">
                    <h1
                        className="text-white text-4xl md:text-5xl font-extrabold"
                        style={{ fontFamily: "Bebas Neue, sans-serif" }}
                    >
                        <span className="block leading-none text-[50px] md:text-[101px]"
                        >HI, I AM</span>
                        <span className="w-full">
                            <span className="inline-block text-[50px] md:text-[101px] uppercase"
                            >sufiyan Chishty.</span>
                        </span>
                    </h1>
                    <p
                        className="text-[16px] md:text-[18px] text-[#C7C7C7]"
                        style={{ fontFamily: "Manrope, sans-serif"}}
                    >
                        A Web developer passionate about building
                        accessible and user-friendly websites.
                    </p>
                </div>
                <div className="contact flex gap-4">
                    <a
                        style={{fontFamily: "Manrope, sans-serif"}}
                        href="#contact"
                        className="flex gap-4 justify-center items-center bg-[#D3E97A] px-5 py-3 md:py-4 rounded-full font-bold uppercase hover:bg-black hover:text-[#D3E97A] hover:border hover:border-[#D3E97A] animate-bounce"
                    >
                        contact me
                        <i className="ri-arrow-down-line text-lg md:text-xl"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/sufiyan-chishty-9288101b9/' target="_blank">
                        <i
                            className="ri-linkedin-fill text-[#D3E97A] text-xl md:text-2xl bg-gray-600 rounded-full p-[8px] md:p-[10px] text-center"
                        ></i>
                    </a>
                    <a href='https://github.com/sufiyan1234-heu' target="_blank">
                        <i
                            className="ri-github-fill text-[#D3E97A] text-xl md:text-2xl bg-gray-600 rounded-full p-[8px] md:p-[10px] text-center"
                        ></i>
                    </a>
                </div>
            </div>
            <div
                className="w-full md:w-1/2 h-auto flex justify-end items-end mb-8"
            >
                <div
                    className="relative w-full max-w-xs md:max-w-lg h-[300px] md:h-[700px] bg-[#C7C7C7] rounded-lg mt-10 md:mt-0 xl:h-[700px] xl:w-[1224px]"
                >
                    <img
                        className="absolute top-[20px] md:top-[55px] mix-blend-multiply w-full h-full object-cover"
                        src=""
                    alt="sufiyan chishty"
                    loading="lazy"/>
                </div>
            </div>
        </section>
  )
}

export default Introduction
