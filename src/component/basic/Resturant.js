import React, { useState } from 'react';
import "./style.css";
import Menu from './Menuapi';
import Menucard from './Menucard';

const Resturant = () => {
  const [menudata, setmenudata] = useState(Menu);

 
  const filterItem = (category) => {
    const UpdatedList = Menu.filter((cur) => cur.category === category);
    setmenudata(UpdatedList);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
          <div className='btn-item' onClick={() => filterItem("breakfast")}>Breakfast</div>
          <div className='btn-item' onClick={() => filterItem("lunch")}>Lunch</div>
          <div className='btn-item' onClick={() => filterItem("evening")}>Evening</div>
          <div className='btn-item' onClick={() => filterItem("dinner")}>Dinner</div>
          <div className='btn-item' onClick={() => setmenudata(Menu)}>All</div>
        </div>
      </nav>

      {/* Pass filtered data to Menucard */}
      <Menucard menudata={menudata} />
    </>
  );
};

export default Resturant;
