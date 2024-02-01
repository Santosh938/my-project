import React from 'react'
import Headers from './Headers'
import Nav from './Nav'
import './css/Announcements.css'

const Announcements = () => {
    return (
        <>
        <Headers />
        <Nav />
        <div className='card-content'>
            <h3 className='new'>15-04-2023</h3>
            <p>An interactive session with Prof.K.Subramanyam M.A(Eng), M.A(Phil), Ph.D sir, who is the president of IYA</p>
            <a href='/announcements'>Google form link for registration</a>
        </div>
        <div className='card-content'>
            <h3>03-09-2023</h3>
            <p>Webinar on Patajali yoga sutras niyama (self discipline) by yoga ratna. Dr.S.N.Omkar, who is the Chief Research Scientist, IISc, Bengaluru</p>
            <a href='/announcements'>Google form link for registration</a>
        </div>
        </>
    )
}

export default Announcements
