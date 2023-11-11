import { useNavigate } from "react-router-dom"

export const Banner = () => {
  const navigate = useNavigate()

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../images/banner.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }

  return (
    <div className="">
      <div
        className="flex items-center h-96 w-full"
        style={backgroundImageStyle}
      >
        <div className="text-white text-center sm:text-left w-full mx-12">
          <h1 className="text-4xl font-light tracking-wide my-4 sm:text-5xl">
            Newest collection
          </h1>
          <button
            className="mx-auto my-4 bg-[#da5d61] hover:bg-[#ce4b4f] transition duration-300 text-xl font-medium text-white py-2 px-4 rounded-md w-36 h-12"
            onClick={() => navigate("/products")}
          >
            Check it
          </button>
        </div>
      </div>
    </div>
  )
}
