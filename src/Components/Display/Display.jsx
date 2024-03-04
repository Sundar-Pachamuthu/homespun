import React from 'react'
import './Display.css'
import star_icon from '../Assets/star_icon.png';
import stardull_icon from '../Assets/star_dull_icon.png'
const Display = (props) => {
  const {product} = props;
  return (
    <div className='display'>
      <div className="display-left">
        <div className="display-img">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="display-right">   
        <h1>{product.name}</h1>
        <div className="display-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={stardull_icon} alt="" />
          <p>(47)</p>
        </div>
        <div className="display-prices">
          <div className="display-oldprice">
            ₹{product.old_price}
          </div>
          <div className="display-newprice">
           ₹{product.new_price}
          </div>
        </div>
        <div className="display-discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error eius, neque unde accusantium impedit ratione aspernatur reiciendis necessitatibus eum quaerat! Culpa incidunt iure consequatur similique itaque repudiandae amet odit!
        </div>
        <button> ADD TO CART</button>
      </div>        
    </div>
  )
}

export default Display
