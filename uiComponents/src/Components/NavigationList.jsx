const NavigationList = ({name,url}) => {
  return (
    <div className='navigation'>
        <ul style={{listStyleType:"none"}}>
            <li style={{cursor:"pointer"}}><a href={url} style={{color:'#fff8b6'}}>{name}</a></li>
        </ul>

    </div>
  )
}

export default NavigationList