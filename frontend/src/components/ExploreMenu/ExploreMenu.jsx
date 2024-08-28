import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({ category, setCategory }) => {

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our components</h1>
            <p className='explore-menu-text'>Choose LEGO collection featuring a delectable assortment of sets crafted with the highest quality pieces and expert design.Our aim is to satisfy your creative urges and make your LEGO experience as smooth as debugging a well-structured React component, one fantastic model at a time.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "ALL" : item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu