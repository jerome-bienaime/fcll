import React from "react"
import {shallow} from "enzyme"
import {Cardslot} from "."
import { ChildComponent } from "./Cardslot.mocks"




describe("Cardslot", () => {
    it("have a container", () => {
        const wrapper  = shallow(<Cardslot></Cardslot>)

        expect(wrapper.find(".container").length).toEqual(1)
    })
    describe("without children", () => {
        it("render an empty cardslot", ()=> {
            const wrapper = shallow(<Cardslot></Cardslot>)

            expect(wrapper.find(".empty").length).toEqual(1)
        })
    })
    describe("with at least one child component", () => {
        it("render html", () => {
            const wrapper = shallow(<Cardslot><div className="child">child</div></Cardslot>)

            expect(wrapper.find(".child").length).toEqual(1)
        })
        it("render react stateless component", () => {
            const wrapper = shallow(
                <Cardslot><ChildComponent/></Cardslot>
            )

            expect(wrapper.find(ChildComponent).length).toEqual(1)
        } )
    })
})