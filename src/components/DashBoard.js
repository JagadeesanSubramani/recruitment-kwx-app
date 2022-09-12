import React from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Maincomponent from "./Maincomponent";



function DashBoard(props) {
    
    return <DndProvider backend={HTML5Backend}>
        <Maincomponent />
    </DndProvider>
}

export default DashBoard;