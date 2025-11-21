import React from 'react'

const DestructuringEg = () => {

    const colors = ["red", "green", "blue"];
    const [firstColor, secondColor] = colors

    const nums = [10, 20, 30, 40];
    const [, , thirdNum] = nums

    const arr = [1];
    const [a, b = 0] = arr
    // const a = arr[0];
    // const b = arr[1];


    const user = { name: "Sam", age: 25, city: "Delhi" };
    // Goal: get name and age in separate variables
    const {name,age} = user

    const product = { id: 1, price: 300 };
    // Goal: extract price but store it in var `cost`

    var {price:cost} = product

    return (
        <div>
            DestructuringEg
            {/* Goal: get `firstColor = "red"` and `secondColor = "green"` */}
            <p>colors: {firstColor + " " + secondColor}</p>

            {/* Goal: get only the third value in a variable called `thirdNum` */}
            <p>nums: {thirdNum}</p>

            {/* Goal: extract first element into `a`, and second element default = 0 into `b` */}
            <p>arr: {a + " " + b}</p>

            {/* Goal: get name and age in separate variables */}
            <p>name : {name} , age : {age}</p>

            {/* Goal: extract price but store it in var `cost` */}
            <p>cost : {cost}</p>


        </div>
    )
}

export default DestructuringEg