import { ReactNode, FC } from "react"
import s from "./Marquee.module.css"
import ReactFastMarquee from "react-fast-marquee"; 

interface Props {
    children: ReactNode[]
    direction?: "left" | "right"
    variant?: "primary" | "secondary"
    gradient?: boolean
}

const Marquee: FC<Props> = ({children, direction = "left", variant = "primary", gradient }) => {

    return (
        <div className={s.root}>
        <ReactFastMarquee speed={50} gradient={gradient} direction={direction} loop={0} play={true}>
            <div className={s.container}>
                {children}
            </div>
        
        </ReactFastMarquee>
        </div>

    )
}

export default Marquee