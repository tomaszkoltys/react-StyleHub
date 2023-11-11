export const AboutCompany = () => {
  return (
    <div>
      <h2 className="my-6 text-xl font-medium sm:text-3xl sm:my-12">
        What moves our company ?
      </h2>
      <div className="flex items-center justify-center gap-12 w-full flex-col md:flex-row">
        <div className="w-full md:w-[35%]">
          <h3 className="text-2xl font-semibold mb-4">
            Experience, passion, technology
          </h3>
          <div className="font-light">
            Our mission is simple:
            <br />
            Provide{" "}
            <span className="text-[#da5d61] font-medium">
              high-quality
            </span>{" "}
            products that meet your expectations. We{" "}
            <span className="text-[#da5d61] font-medium">care</span> about
            making every purchase in the e-commerce store a unique experience.
          </div>
        </div>
        <div className="w-full md:w-[65%]">
          <p className="font-light">
            For over a decade, our e-commerce venture has been turning our
            vision into reality. We are trailblazers in the online shopping
            industry, setting the standard for innovation and customer
            satisfaction. Our commitment to delivering the best shopping
            experience drives our continuous growth, enabling us to expand our
            technical and intellectual capabilities.With a focus on cutting-edge
            technology and seamless user experiences, we constantly push the
            limits of e-commerce. Our dedicated team is passionate about
            creating a shopping platform that not only meets but exceeds the
            expectations of our customers, making online shopping a easier.
          </p>
        </div>
      </div>
      <div className="mt-8 h-96 w-full">
        <img
          src="../../images/aboutBanner.jpg"
          alt="About banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  )
}
