import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import LegoDisplay from '../../components/LegoDisplay/LegoDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
    const [category, setCategory] = useState("ALL");
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <LegoDisplay category={category} />
            <AppDownload />
        </div>
    )
}
export default Home;
