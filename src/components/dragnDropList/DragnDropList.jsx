"use client"

import React, { useRef, useState } from 'react'

const DragnDropList = () => {
    const [items, setItems] = useState([
        {
            index: 1, title: "Beautiful Evening", image: "/Capecod.jpg", details: "Capecod, MA"
        },
        {
            index: 2, title: "Fall Colors",  image: "/Fallcolors2.jpg", details: "White Mountains, NH"
        },
        {
            index: 3, title: "Holland Tunnel",  image: "/HollandTunnel.jpg", details: "New Jersey City, NJ"
       },
       {
            index: 4, title: "Skyline at Night",  image: "/Skyline.jpg", details: "New Jersey City, NJ"
       },
       {
        index: 5, title: "Skyline",  image: "/skyline2.jpg", details: "New Jersey City, NJ"
   },
   {
        index: 6, title: "Statue of Liberty",  image: "/StatueofLiberty.jpg", details: "New Jersey City, NJ"
   },
    ])

    const dragItem = useRef(0)
    const draggedOverItem = useRef(0)
    let dragStart

    const handleDrag = () => {       
        const itemsList = [...items];             
        const draggedItem = itemsList[dragItem.current];
        itemsList.splice(dragItem.current, 1);
        itemsList.splice(draggedOverItem.current,0,draggedItem);
        dragStart.classList.remove("opacity-25"); 
        setItems(itemsList);
    }

  return (
    <main className="max-w-sm mt-40 ml-60 p-3 bg-gray-100">       
        {items.map((item, index) => (
            <div className="flex bg-gray-100 p-2 rounded-md"
                draggable
                onDrag={(e) => {
                    e.target.classList.add("opacity-25");
                    dragStart = e.target;
                }}
                onDragStart={() =>{dragItem.current =index;                   
                }}
                onDragEnter={(e) =>{draggedOverItem.current =index;
                    e.target.classList.add("border-t-2");
                    e.target.classList.add("border-blue-500");                    
                }}
                onDragLeave={(e) => {
                    e.target.classList.remove("border-t-2");
                    e.target.classList.remove("border-blue-500");
                }}
                onDragEnd={handleDrag}
                key={index}
            >
                <img className="border rounded-md size-16" src={item.image}/>
                <div className="p-2">
                    <p className="text-xs font-normal">{item.title}</p>
                    <p className='flex p-2 opacity-30'><img className="size-3 content-start" src="/icon2.png"  />
                    <span className='content-end text-xs *:text-slate-200'>
                        {item.details}</span>
                    </p>
                </div>
            </div>                         
        ))}       
    </main>
  )
}

export default DragnDropList;
