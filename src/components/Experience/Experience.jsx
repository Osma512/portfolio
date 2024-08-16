const Experience = () => {
  return (
    <section className="flex flex-col md:flex-row px-6 md:px-[70px] py-8 md:py-[80px] text-white border-b">
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <p
          className="uppercase text-4xl md:text-5xl lg:text-[76px] text-white leading-tight"
          style={{fontFamily: "Bebas Neue, sans-serif"}}
        >
        My Experience 
        </p>
    </div>
    <div className="w-full md:w-1/2 flex flex-col gap-8">
        
        <div className="flex flex-col gap-4" style={{fontFamily: "Manrope, sans-serif"}}>
            <div className="flex flex-col w-full md:max-w-[650px] md:w-[650px] justify-between gap-3">
                <div className="flex flex-col sm:flex-row justify-between">
                    <h2 className="font-medium text-[20px] sm:text-[24px] leading-[130%] tracking-[-1%]">Frontend Developer</h2>
                    <p className="text-[16px] sm:text-[18px] text-[#C7C7C7] leading-[150%]">Nov 2023 — july 2024</p>
                </div>
                <p className="font-semibold text-[16px] sm:text-[18px] text-[#D3E97A] leading-[160%]">Expert System Solutions</p>
            </div>
            <p className="text-[#C7C7C7] text-[16px] sm:text-[18px] leading-[150%] w-full">
            • Collaborated with a team of designers and backend developers to build a responsive Web portal for asset management using
            Django, improving user experience <br/>
            • Participated in an Agile development internship, implementing new features, debugging code, and deploying
            updates for a company’s internal management system.</p>
        </div>

        <div className="flex flex-col gap-4" style={{fontFamily: "Manrope, sans-serif"}}>
            <div className="flex flex-col w-full md:w-[650px] justify-between gap-3">
                <div className="flex flex-col sm:flex-row justify-between">
                    <h2 className="font-medium text-[20px] sm:text-[24px] leading-[130%] tracking-[-1%]">Shopify Developer</h2>
                    <p className="text-[16px] sm:text-[18px] text-[#C7C7C7] leading-[150%]">August 2023 — Present</p>
                </div>
                <p className="font-semibold text-[16px] sm:text-[18px] text-[#D3E97A] leading-[160%]">Concept Beans</p>
            </div>
            <p className="text-[#C7C7C7] text-[16px] sm:text-[18px] leading-[150%] w-full">Developed and customized Shopify themes to create user-friendly and visually appealing e-commerce websites.</p>
        </div>
    </div>
</section>
  )
}

export default Experience
