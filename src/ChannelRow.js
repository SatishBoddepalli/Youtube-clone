import React from 'react'
import './ChannelRow.css'
import {Avatar} from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'; 

function ChannelRow({image,Channel,verified,subs,noOfVideos,description}) {
    return (
        <div className="channelrow">
            <Avatar className="channelrow-logo" alt={Channel} src={image}/>
            <div className="channelrow-text">
                <h4>{Channel}{verified && <CheckCircleOutlineIcon/>}</h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
