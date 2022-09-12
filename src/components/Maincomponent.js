import React, { useState } from "react";
import Card from "./Card";
import SubComponent from "./SubComponent";
import { useDrop } from "react-dnd";

let ListOfComp = ["Requirment", "BGC", "Report", "Team"]

function Maincomponent(props) {

    let modifiedListOfComp = [...ListOfComp];
    const [dropDiv, setDropDiv] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addDivToBoard(item.text),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addDivToBoard = (income) => {
        console.log(income)
        setDropDiv((name) => [income, ...name])

        ListOfComp = ListOfComp.filter((name) => name !== income);
        modifiedListOfComp = [...ListOfComp];
        console.log(modifiedListOfComp);
    }

    return (
        <div className="ui divided two column grid" >
            <div className="ui column" ref={drop}>
                {dropDiv.map((name) => {
                    return <Card key={name} text={name} />
                })}
            </div>
            {/* <div class="ui active inverted dimmer">
            <div class="ui text loader">Loading</div>
        </div> */}
            <div className="ui column" >

                {modifiedListOfComp.map((name) => {
                    return <Card key={name} text={name} />
                })}
            </div>
        </div>
    );
}


export default Maincomponent;