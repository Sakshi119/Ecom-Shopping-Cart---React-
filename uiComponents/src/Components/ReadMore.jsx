import React,{useState} from 'react'
import { useEffect } from 'react';

const ReadMore = () => {
    const [readmore,setReadMore]= useState(false)
    const descData = "Lorem ipsum dolor sit amet consectetur adipisicing elit.unt quae et aliquam nesciunt eveniet dolor impedit blanditiis,ratione nemo consequuntur libero! Earum quibusdam tenetur natus,totam quia explicabo quisquam voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit.Sunt quae et aliquam nesciunt eveniet dolor impedit blanditiis, ratione nemo consequuntur libero! Earum quibusdam tenetur natus,totam quia explicabo quisquam voluptate?";
    const [data,setData] = useState(descData.slice(0, 100).concat('...'));

    // useEffect(()=>{
    //     setData()
    // },[])

    const dataButtonClicked = () =>{
        setReadMore(!readmore);
        if(readmore){            
            setData((descData.slice(0, 100)).concat('...') )
        }
        else{
            setData(descData)
        }
    }
  return (
    <div id="readMore" >

        <h3 id='data'>
            {data}
            {!readmore ? (<button onClick={dataButtonClicked} className='readmore'>Read More</button>):(<button onClick={dataButtonClicked} className='readmore'>Read Less</button>)}
        </h3>
        
    </div>
  )
}

export default ReadMore