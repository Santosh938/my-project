import React from 'react'
import Headers from './Headers'
import Nav from './Nav'

const Competitions = () => {
  return (
    <>
        <Headers />
        <Nav />
        <div className='card-content'>
            <h3 className='new'>20-09-2023</h3>
            <p>By the directions given by the organisers of SGFI competitions, 2023 SGFI competitions (junior category) are held between 10th October 2023 to 15th October 2023 in Rayavaram.</p>
            <a href='/announcements'>Updated syllabus for the competition</a>
        </div>
        </>
  )
}

export default Competitions
