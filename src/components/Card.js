import React from 'react'
import { useDrag } from 'react-dnd'
import { Link } from 'react-router-dom'
//import { ItemTypes } from './Constants'

/**
 * Your Component
 */
export default function Card({ isDragging, text }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "image",
      item: { text : text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )
  return (
    // <div ref={dragRef} style={{ opacity }}>
    //   {text}
    // </div>
    <div ref={dragRef} style={{ opacity }} className="sub-component">
        
        {text === "BGC" && <Link to="/createBGC">{text}</Link> }
        {text !== "BGC" && text}
        
        </div>
  )
}