import React, { useContext } from 'react'
import './LegoDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import LegoItem from '../LegoItem/LegoItem'
const LegoDisplay = ({ category }) => {
    const { lego_list } = useContext(StoreContext)
    return (
        <div className='lego-display' id='lego-display'>
            <h2>Top collection</h2>
            <div className="lego-display-list">
                {lego_list.map((item, index) => {
                    if (category === "ALL" || category === item.category) {
                        return <LegoItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />

                    }
                })}
            </div>
        </div>
    )
}

export default LegoDisplay