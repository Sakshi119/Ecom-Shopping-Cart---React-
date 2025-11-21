import React, { useState } from 'react'

const randomColor = () => {
  const [bgColor, setBgColor] = useState("pink")
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);



  const [randomColors, setRandomColors] = useState("#324442")

  const colors = ["#894302", "#843957", "#839465", "#324442", "#894302", "#843957", "#839465"]

  function pickRandomColor() {
    var randomColor = Math.floor(Math.random() * colors.length)
    // console.log(randomColor)
    setRandomColors(colors[randomColor])
  }

  
  return (
    <>
      <div style={{ background: bgColor, padding: "20px", cursor: "pointer" }} onClick={() => setBgColor(`#${randomColor}`)} id="randomColor">
        <h1>Click for Color Change (method 1)</h1>
      </div>
      <div style={{ background: randomColors, padding: "20px", cursor: "pointer", marginTop: "20px" }} onClick={pickRandomColor}>
        <h1>Click for Color Change (method 2)</h1>
      </div>

    </>
  )
}

export default randomColor