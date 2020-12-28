import React from 'react'
import './videoRow.css'



function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="videorow">
            <img src={image} alt=""/>
        <div className="videorow-text">
            <h3>{title}</h3>
            <p className="videorow-headline">{channel} .<span className="videorow-subs">{subs}</span>  Subscribers {views} views . {timestamp}</p>
            <p className="videorow-desc">{description}</p>
        </div>
        </div>
    )
}

export default VideoRow
