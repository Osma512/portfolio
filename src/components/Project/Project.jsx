// Project.js
import React from 'react';

const Project = ({ name, link, description, image, year, role, liveDemoLink, githubLink }) => {
    return (
        // <div className="projects flex flex-col lg:flex-row xl:flex-row xl:items-center xl:justify-center gap-5">
        //     <div className="relative project-left w-full lg:w-[600px] xl:w-[700px] h-[400px] lg:h-[600px] xl:h-[700px] bg-[#1A1A1A] px-[20px] py-[20px] rounded-xl hover:-translate-y-8 hover:bg-[#4D4D4D] hover:transition-all hover:ease-in-out">
        //         {/* <div style={{ fontFamily: "Manrope, sans-serif" }} className="bg-black text-white px-5 py-3 w-fit rounded-full">
        //             Conceptual Work
        //         </div> */}
        //         <img
        //             className="absolute mt-[15%] ml-[7%] rounded-lg w-[70%] h-[50%] lg:w-[486px] lg:h-[347px] xl:w-[586px] xl:h-[447px]"
        //             src={image}
        //             alt={name}
        //             loading="lazy"
        //         />
        //     </div>
        //     <div className="flex flex-col justify-center items-start gap-10 project-right py-10 lg:py-[48px] xl:py-[60px] w-full lg:w-1/2 xl:w-1/2 px-4 lg:px-[60px] xl:px-[80px]">
        //         <div className="flex flex-col gap-4">
        //             <p style={{ fontFamily: "Manrope, sans-serif" }} className="font-medium text-xl lg:text-[32px] xl:text-[40px] leading-[45px]">
        //                 {name}
        //             </p>
        //             <p style={{ fontFamily: "Manrope, sans-serif" }} className="font-normal text-sm lg:text-lg xl:text-xl text-[#C7C7C7] text-pretty">
        //                 {description}
        //             </p>
        //         </div>
        //         <div className="bg-black text-white rounded-lg w-full">
        //             <h3 style={{ fontFamily: "Manrope, sans-serif" }} className="text-[16px] font-semibold border-b border-gray-700 pb-4">
        //                 PROJECT INFO
        //             </h3>
        //             <div className="flex justify-between py-2 lg:py-4 xl:py-6 border-b border-gray-700">
        //                 <span style={{ fontFamily: "Manrope, sans-serif" }} className="text-[16px] xl:text-lg text-white">
        //                     Year
        //                 </span>
        //                 <span style={{ fontFamily: "Manrope, sans-serif" }} className="text-[#C7C7C7]">
        //                     {year}
        //                 </span>
        //             </div>
        //             <div className="flex justify-between py-2 lg:py-4 xl:py-6 border-b border-gray-700">
        //                 <span style={{ fontFamily: "Manrope, sans-serif" }} className="text-[16px] xl:text-lg text-white">
        //                     Role
        //                 </span>
        //                 <span style={{ fontFamily: "Manrope, sans-serif" }} className="text-[#C7C7C7]">
        //                     {role}
        //                 </span>
        //             </div>
        //         </div>
        //         <div className="flex flex-col lg:flex-row xl:flex-row space-y-4 lg:space-y-0 xl:space-y-0 lg:space-x-8 xl:space-x-10 text-[#D3E97A] items-start lg:items-center xl:items-center">
        //             {
        //                 link ? (<a
        //                     href={link}
        //                     className="flex items-center space-x-2 border-b-2 border-[#D3E97A] hover:text-[#D3E97A] hover:border-[#D3E97A] transition duration-200"
        //                     target="_blank"
        //                     rel="noopener noreferrer"
        //                 >
        //                     <span className="uppercase font-bold text-sm lg:text-base xl:text-lg leading-[150%] text-[#D3E97A]">
        //                         LIVE DEMO
        //                     </span>
        //                     <i className="ri-arrow-right-up-line text-xl xl:text-2xl"></i>
        //                 </a>) : (" ")
        //             }
        //            {
        //             githubLink ? (
        //                 <a
        //                 href={githubLink}
        //                 className="flex items-center space-x-2 border-b-2 border-[#D3E97A] hover:text-[#D3E97A] hover:border-[#D3E97A] transition duration-200"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 <span className="uppercase font-bold text-sm lg:text-base xl:text-lg leading-[150%] text-[#D3E97A]">
        //                     SEE ON GITHUB
        //                 </span>
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xl:h-6 xl:w-6" viewBox="0 0 24 24" fill="currentColor">
        //                     <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579v-2.176c-3.338.726-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.494.997.108-.774.419-1.305.762-1.604-2.665-.303-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.521.117-3.168 0 0 1.008-.322 3.3 1.23.96-.267 1.983-.4 3.003-.405 1.02.005 2.043.138 3.003.405 2.291-1.552 3.297-1.23 3.297-1.23.655 1.647.243 2.865.119 3.168.77.84 1.234 1.911 1.234 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.815 1.102.815 2.222v3.293c0 .32.219.695.825.577C20.565 21.797 24 17.301 24 12c0-6.627-5.373-12-12-12z" />
        //                 </svg>
        //             </a>
        //             ) : ("")
        //            }
        //         </div>
        //     </div>
        // </div>

        <div className="projects flex flex-col lg:flex-row xl:flex-row xl:items-center xl:justify-center gap-5">
    <div className="relative project-left w-full lg:w-[600px] xl:w-[700px] h-[400px] lg:h-[600px] xl:h-[700px] bg-[#1A1A1A] px-[20px] py-[20px] rounded-xl hover:-translate-y-8 hover:bg-[#4D4D4D] hover:transition-all hover:ease-in-out flex justify-center items-center">
        {/* <div style={{ fontFamily: "Manrope, sans-serif" }} className="bg-black text-white px-5 py-3 w-fit rounded-full">
            Conceptual Work
        </div> */}
        <img
            className="rounded-lg w-[70%] h-[50%] lg:w-[486px] lg:h-[347px] xl:w-[586px] xl:h-[447px] object-contain"
            src={image}
            alt={name}
            loading="lazy"
        />
    </div>
    <div className="flex flex-col justify-center items-start gap-10 project-right py-10 lg:py-[48px] xl:py-[60px] w-full lg:w-1/2 xl:w-1/2 px-4 lg:px-[60px] xl:px-[80px]">
        <div className="flex flex-col gap-4">
            <p style={{ fontFamily: "Manrope, sans-serif" }} className="font-medium text-xl lg:text-[32px] xl:text-[40px] leading-[45px]">
                {name}
            </p>
            <p style={{ fontFamily: "Manrope, sans-serif" }} className="font-normal text-sm lg:text-lg xl:text-xl text-[#C7C7C7] text-pretty">
                {description}
            </p>
        </div>
        <div className="bg-black text-white rounded-lg w-full">
            <h3 style={{ fontFamily: "Manrope, sans-serif" }} className="text-[16px] font-semibold border-b border-gray-700 pb-4">
                PROJECT INFO
            </h3>
            <div className="flex justify-between py-2 lg:py-4 xl:py-6 border-b border-gray-700">
                <span style={{ fontFamily: "Manrope, sans-serif" }} className="text-[16px] xl:text-lg text-white">
                    Year
                </span>
                <span style={{ fontFamily: "Manrope, sans-serif" }} className="text-[#C7C7C7]">
                    {year}
                </span>
            </div>
            <div className="flex justify-between py-2 lg:py-4 xl:py-6 border-b border-gray-700">
                <span style={{ fontFamily: "Manrope, sans-serif" }} className="text-[16px] xl:text-lg text-white">
                    Role
                </span>
                <span style={{ fontFamily: "Manrope, sans-serif" }} className="text-[#C7C7C7]">
                    {role}
                </span>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row xl:flex-row space-y-4 lg:space-y-0 xl:space-y-0 lg:space-x-8 xl:space-x-10 text-[#D3E97A] items-start lg:items-center xl:items-center">
            {
                link ? (
                    <a
                        href={link}
                        className="flex items-center space-x-2 border-b-2 border-[#D3E97A] hover:text-[#D3E97A] hover:border-[#D3E97A] transition duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="uppercase font-bold text-sm lg:text-base xl:text-lg leading-[150%] text-[#D3E97A]">
                            LIVE DEMO
                        </span>
                        <i className="ri-arrow-right-up-line text-xl xl:text-2xl"></i>
                    </a>
                ) : ("")
            }
            {
                githubLink ? (
                    <a
                        href={githubLink}
                        className="flex items-center space-x-2 border-b-2 border-[#D3E97A] hover:text-[#D3E97A] hover:border-[#D3E97A] transition duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="uppercase font-bold text-sm lg:text-base xl:text-lg leading-[150%] text-[#D3E97A]">
                            SEE ON GITHUB
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xl:h-6 xl:w-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579v-2.176c-3.338.726-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.494.997.108-.774.419-1.305.762-1.604-2.665-.303-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.521.117-3.168 0 0 1.008-.322 3.3 1.23.96-.267 1.983-.4 3.003-.405 1.02.005 2.043.138 3.003.405 2.291-1.552 3.297-1.23 3.297-1.23.655 1.647.243 2.865.119 3.168.77.84 1.234 1.911 1.234 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.815 1.102.815 2.222v3.293c0 .32.219.695.825.577C20.565 21.797 24 17.301 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                ) : ("")
            }
        </div>
    </div>
</div>

    );
};

export default Project;
