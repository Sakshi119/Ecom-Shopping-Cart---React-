import { useState } from "react";

const AccordionItem =({title,description})=>{
    const [isOpen,setIsOpen] = useState(false)
    return (
        <>
            <button className="accordion" onClick={()=>setIsOpen(!isOpen)}>{title}</button>           
            {isOpen && (
                <div className="panel">
                    {description}
                </div>
            )}    
        </>
    )
}

const Accordion =()=>{
 const items =[
        {title:"Accordion 1", description:"lorem ipsum dolor sit amet"},
        {title:"Accordion 2", description:"lorem ipsum dolor sit amet"},
        {title:"Accordion 3", description:"lorem ipsum dolor sit amet"},
    ]
    return(
        <>
        {items.map((items,index)=>(
            <AccordionItem key={index} title={items.title} description={items.description} />
        ))}
        </>
    )
}

export default Accordion;