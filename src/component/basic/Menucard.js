import React from 'react'

const Menucard = ({menudata}) => {
  return (
   
    <>
     {menudata.map((cur)=>
        {
            return(<><div className='card-container'>
      <div className='card'>
        <div className='card-body'>
          <span className='card-number'>{cur.id}</span>
          <span className='author'>{cur.category}</span>
          <h2 className='card-title'>{cur.name}</h2>
          <span className='card-Description'>{cur.description}</span>
          <div className='card-read'>read</div>
          <img src={cur.image} alt="" />
          <span className='card-tag'>order</span>
        </div>
      </div>

    </div></>)
        })}
        
    </>
  )
}

export default Menucard
