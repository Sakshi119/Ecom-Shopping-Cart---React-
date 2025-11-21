const UserCard = ({name,age,email,index}) => {
    // console.log(index)
  return (
    <div className='user-card'>
        <h2>Card : {index+1}</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default UserCard