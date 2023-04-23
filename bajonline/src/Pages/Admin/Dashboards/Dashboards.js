import React from 'react'
import SideNav from '../Components/SideNav/SideNav'
import StatisticCard from '../Components/StatisticCard/StatisticCard'
import RecentOrders from '../Components/RecentOrders/RecentOrders'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import "./Dashboards.css"
import RecentUpdates from '../Components/RecentUpdates/RecentUpdates';
import SimpleAnalytics from '../Components/SimpleAnalytics/SimpleAnalytics';
const Dashboards = () => {

  const StyledNavLink = styled(NavLink)`  
                        display: block;
                        width: 100%;
                        text-align: center;
                        text-decoration: none;
                        margin: 10px 0;
                        font-weight: 700;`;
  let postsStat = { icon: "analytics", mainText: "Number of posts", percentage: 81, stat: 25024, date: "Last 24 hours" }
  let commentsStat = { icon: "bar_chart", mainText: "Number of comments", percentage: 60, stat: 24000, date: "Last 24 hours" }
  let likesStat = { icon: "thumb_up", mainText: "Number of likes", percentage: 42, stat: 212222, date: "Last 24 hours" }
  return (
    <div className="dashboards">
      <SideNav />
      <div className='statistics'>
        <h1 className='title'>Dashboard</h1>
        <div className='cards'>
          <StatisticCard props={postsStat} />
          <StatisticCard props={commentsStat} />
          <StatisticCard props={likesStat} />
        </div>
        <div className='hide__md'>
          <p className='recent__orders__title'>Recent orders</p>
          <RecentOrders />
          <StyledNavLink to="/">Show All</StyledNavLink>
        </div>
      </div>
      <div>
        <p className='current__user'>Hey, <strong>Jeton Sllamniku</strong></p>
        <div>
          <p className='recent__updates__title'>Recent Updates</p>
          <RecentUpdates />
        </div>
        <div>
          <p className='simple__analytics__title'>Simple Analytics</p>
          <SimpleAnalytics />
        </div>
      </div>
    </div>
  )
}

export default Dashboards