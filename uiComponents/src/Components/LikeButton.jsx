import React,{useState} from 'react'

const likeButton = () => {
    const[likeDislikeCount,setLikeDislikeCount] = useState([0,0])

    const likeDislikeClicked = (index) =>{
      // console.log(`Item at index ${index} was clicked.`);
      // setLikeDislikeCount(likeDislikeCount[index] + 1)

      setLikeDislikeCount((prev)=>{
        const newCount = [...prev];
        newCount[index] += 1;
        return newCount
      })
    }

    const icons = ["👍", "👎"]

  return (
    <div style={{marginBottom:"20px"}} id="likeButton">
        <h1>Click me</h1> 

        {icons.map((icons,index) => {
          return(
            <button key={index} onClick={() => likeDislikeClicked(index)} style={{marginRight:"20px"}}>{icons} {likeDislikeCount[index]}</button>
          )   
        })}
    </div>
  )
}

export default likeButton