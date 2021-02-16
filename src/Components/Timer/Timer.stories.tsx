import React from "react"
import {Timer} from "./Timer"

export default {
    title: "Timer",
    component:Timer,
    argTypes: {
        initialCount: {
            type: "number",
            min: 0
        }
    }

}

export const Basic = (args: {initialCount: number}) => {
    return <Timer {...args} />
}

Basic.args = {initialCount: 0}