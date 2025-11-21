import { createSlice, nanoid } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name:"tasks",
    initialState:[],
    reducers:{
        addTask:(state,action)=>{
            const newTask = {
                id: nanoid(),
                name: action.payload.task,
                status:false
            }
            state.push(newTask)
        },
        deleteTask:(state,action)=>{
            return state.filter((item)=> item.id !== action.payload.id) 
        },
        updateTask:(state,action)=>{
            const {id,newText} = action.payload
            const todoToUpdate = state.find(todo => todo.id === id)
            if(todoToUpdate){
                todoToUpdate.name = newText
            }
        },

        toggleTask:(state,action)=>{
            const todo = state.find(data => data.id === action.payload.id);
            if(todo){
                todo.status = !todo.status
            }
        }
    }
})

export const {addTask,deleteTask,updateTask,toggleTask} = tasksSlice.actions
export default tasksSlice.reducer