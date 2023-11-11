import { StoreItem } from "./StoreItem"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { DataProps } from "../App"

export const ShortcutProducts = ({ data }: { data: DataProps[] }) => {
  let settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-center mt-12 font-medium text-4xl">Our products</h2>
      <div className="mt-12">
        <Slider {...settings}>
          {data.map((product: DataProps) => (
            <StoreItem key={product.id} {...product} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
