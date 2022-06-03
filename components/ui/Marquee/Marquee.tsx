import { ReactNode, FC } from "react"
import s from "./Marquee.module.css"
import ReactFastMarquee from "react-fast-marquee"; 
import cn from "classnames";

interface Props {
    children: ReactNode[]
    variant?: "primary" | "secondary"

    direction?: "left" | "right"
    gradient?: boolean
}

const Marquee: FC<Props> = ({
    children, 
    variant = "primary", 
    direction = "left", 
    gradient,
}) => {

    const rootClassName = cn(
        s.root,
        {
            [s.secondary]: variant === "secondary"
        }
    )

    return ( 
        <div className={rootClassName}>
        <ReactFastMarquee speed={50} gradient={gradient} direction={direction} loop={0} play={true}>
            <div className={s.container}>
                {children}
            </div>
        
        </ReactFastMarquee>

        
        {/* <button className={s.btnWave}>Download
            <div className={s.wave}></div>
        </button> */}
        </div>
        


    )
}

export default Marquee