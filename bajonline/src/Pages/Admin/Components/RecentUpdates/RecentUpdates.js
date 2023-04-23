import React from 'react'
import "./RecentUpdates.css"
const RecentUpdates = () => {
    const recentUpdates = [
        {
            id: 1,
            title: "New feature added",
            description: "We've just released a new feature that allows you to",
            date: "2023-04-21",
        },
        {
            id: 2,
            title: "Bug fix deployed",
            description: "We've fixed a bug that was causing issues with",
            date: "2023-04-19",
        },
        {
            id: 3,
            title: "Upcoming maintenance",
            description: "We'll be performing scheduled maintenance on",
            date: "2023-04-18",
        },
        {
            id: 4,
            title: "Product update",
            description: "We've made some changes to the product that",
            date: "2023-04-17",
        },
    ];

    return (
        <div className='recent__updates' title='Show More'>
            {recentUpdates.slice(0, 4).map((update) => (
                <div className='update' key={update.id} >
                    <p style={{margin: '4px'}}><strong>Albion Paqarizi</strong> has {update.description.slice(0, 120)}...</p>
                    <p style={{fontSize: '13px', fontWeight: '700', textAlign: 'right', margin: '0'}}>{update.date}</p>
                </div>
            ))}
        </div>
    )
}

export default RecentUpdates