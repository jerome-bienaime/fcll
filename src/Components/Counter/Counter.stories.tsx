import React from "react"
import {Counter} from "./Counter"
import { CounterStore } from "./Counter.store"

export default {
    title: "Counter",
    component: Counter,
    argTypes: {
        counter: {
            type: "number",
            min: 0,
        }
    }
}

export const Basic = ({counter}: {counter:number}) => {
    CounterStore.update(state => {
        state.counter = counter
    })

return <Counter></Counter>

}

Basic.args = {counter: 0}