const Certifications = () => {
    return (
      <section className="flex flex-col px-6 md:px-[70px] py-8 md:py-[80px] text-white border-b">
        <div className="py-8 text-white">
          <h2 className="uppercase text-4xl md:text-[56px] font-bold mb-8" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Certifications
          </h2>
          <div className="flex flex-col gap-8">
            {/* Python Data Structures */}
            <div className="certification-item">
              <h3 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "Manrope, sans-serif" }}>
                Python Data Structures
              </h3>
              <p className="text-lg md:text-xl text-[#C7C7C7]" style={{ fontFamily: "Manrope, sans-serif" }}>
                University of Michigan &middot; Jun 2023 - Jul 2023
              </p>
              <p className="text-md md:text-lg text-[#C7C7C7]" style={{ fontFamily: "Manrope, sans-serif" }}>
                Acquired foundational Python concepts including list, tuples, array, and dictionary and their methods.
              </p>
            </div>
  
            {/* Programming for Everybody */}
            <div className="certification-item">
              <h3 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "Manrope, sans-serif" }}>
                Programming for Everybody (Getting started with Python)
              </h3>
              <p className="text-lg md:text-xl text-[#C7C7C7]" style={{ fontFamily: "Manrope, sans-serif" }}>
                University of Michigan &middot; Jul 2023 - Aug 2023
              </p>
              <p className="text-md md:text-lg text-[#C7C7C7]" style={{ fontFamily: "Manrope, sans-serif" }}>
                Described the basics of the Python programming language, used variables to store, retrieve, and calculate information, and utilized core programming tools such as functions and loops.
              </p>
            </div>
  
            {/* Shopify Theme Development */}
            <div className="certification-item">
              <h3 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "Manrope, sans-serif" }}>
                Build a Shopify Theme from Scratch
              </h3>
              <p className="text-lg md:text-xl text-[#C7C7C7]" style={{ fontFamily: "Manrope, sans-serif" }}>
                Udemy &middot; Jul 2023 - Aug 2023
              </p>
              <p className="text-md md:text-lg text-[#C7C7C7]" style={{ fontFamily: "Manrope, sans-serif" }}>
                Learned to create and customize Shopify themes using Shopify's Theme Kit and Liquid templating language, focusing on implementing pre-made HTML templates and understanding Shopify’s framework.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Certifications;
  