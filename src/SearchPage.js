import React from 'react'
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage-filter">
               <TuneIcon />
               <h2>FILTER</h2>
            </div>
              

            <hr />
            <ChannelRow
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT__idEUOob0wKEM7O13kXCFhsNDp28V-h-GQ&usqp=CAU"
                    Channel="SomeThing"
                    verified
                    subs='700K'
                    noOfVideos={382}
                    description="you can find awesome programmers here..plz do subscribe and hv  fun with programming"

                />

                <hr />

                <VideoRow
                views="1M Views"
                subs="700K"
                description="Insterested one can hv a look at this"
                timestamp="1 minute ago"
                channel="Some Thing"
                title="Lets Build a youtube clone"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrKTRX0ztICkGUfY-EC5YwJNOeW0KvOza_Ug&usqp=CAU"
                 />

                <VideoRow
                views="1M Views"
                subs="700K"
                description="Insterested one can hv a look at this"
                timestamp="1 minute ago"
                channel="Some Thing"
                title="Lets Build a youtube clone"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrKTRX0ztICkGUfY-EC5YwJNOeW0KvOza_Ug&usqp=CAU"
                 />

                <VideoRow
                views="1M Views"
                subs="700K"
                description="Insterested one can hv a look at this"
                timestamp="1 minute ago"
                channel="Some Thing"
                title="Lets Build a youtube clone"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrKTRX0ztICkGUfY-EC5YwJNOeW0KvOza_Ug&usqp=CAU"
                 />

                <VideoRow
                views="1M Views"
                subs="700K"
                description="Insterested one can hv a look at this"
                timestamp="1 minute ago"
                channel="Some Thing"
                title="Lets Build a youtube clone"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrKTRX0ztICkGUfY-EC5YwJNOeW0KvOza_Ug&usqp=CAU"
                 />

                <VideoRow
                views="1M Views"
                subs="700K"
                description="Insterested one can hv a look at this"
                timestamp="1 minute ago"
                channel="Some Thing"
                title="Lets Build a youtube clone"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrKTRX0ztICkGUfY-EC5YwJNOeW0KvOza_Ug&usqp=CAU"
                 />

        </div>
    )
}

export default SearchPage
