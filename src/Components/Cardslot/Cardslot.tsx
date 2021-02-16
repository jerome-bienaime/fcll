import React, {FC} from "react"
import "./cardslot.css"

const Cardslot: FC<{}> = ({children}) => {
    return (
        <div className="container cardslot">
            {children || (<div className="empty"></div>)}
        </div>
    )
}

export {Cardslot}