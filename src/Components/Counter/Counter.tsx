import type { FC } from "react";
import React from "react"
import { CounterStore } from "./Counter.store";

const Counter:FC<{}> = () => {
    const counter = CounterStore.useState(({counter}) => counter)
    return (
        <>
        {counter}

        </>
    )
}

export {Counter}