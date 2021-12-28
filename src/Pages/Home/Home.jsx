import React from 'react'
import './home.css'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import { userData } from "../../data"



function Home() {
  return (
    <div className='homeContainer'>
      <FeaturedInfo />
      <Chart title="User Analytics" data={userData} dataKey="Active User" grid />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />

      </div>
    </div>
  )
}

export default Home
