import React, { FC, Children, isValidElement } from "react"
import s from "./ProductSlider.module.css"
import { useKeenSlider } from "keen-slider/react"

const ProductSlider: FC = ({children}) => {

  // const [currentSlide, setCurrentSlide] = useState(0)
  // const [loaded, setLoaded] = useState(false)
  const [sliderRef, _] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      // setCurrentSlide(slider.track.details.rel)
    },
  })

  return (
    <div className={s.root}>
      <div ref={sliderRef as any} className="keen-slider h-full transition-opacity">
        { Children.map(children, child => {
            if (isValidElement(child)) {

              return React.cloneElement(child, {
                className: `${
                  child.props.className ? `${child.props.className}` : ""
                } keen-slider__slide`
              })
            }

            return child
          })
        }
      </div>
    </div>
  )
}

export default ProductSlider