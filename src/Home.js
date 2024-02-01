import React from 'react'
import './css/Home.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import Headers from './Headers'
import Nav from './Nav'


const Home = () => {
  const images = [
    {
      url : require('./img/photo_1_2024-01-24_18-07-09.jpg'),
      caption : 'First Image',
    },
    {
      url : require('./img/photo_2_2024-01-24_18-07-09.jpg'),
      caption : 'Second Image',
    },
    {
      url : require('./img/photo_3_2024-01-24_18-07-09.jpg'),
      caption : 'Third Image',
    },
    {
      url : require('./img/photo_4_2024-01-24_18-07-09.jpg'),
      caption : 'Fourth Image',
    }
  ]

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain',
    backgroundRepeat : 'no-repeat',
    backgroundPosition : 'center',
    height: '500px',
  }

  return (
    <>
    <Headers />
    <Nav />
    <div>
        <article>
          <Slide>
            {images.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                </div>
              </div>
            ))} 
          </Slide>
        </article>
        <article>
          <h3>Details of Yogasala : </h3>
          <h5>Wellness Center</h5>
          <p>Yogasala serves as a wellness center within IIIT Nuzvid, focusing on promoting physical and mental well-being through yoga practices.</p>
          <h5>Yoga Classes</h5>
          <p>It offers regular yoga classes for students and possibly staff, providing opportunities to learn and practice various yoga postures and techniques.</p>
          <h5>Workshops and Events</h5>
          <p>Yogasala may organize workshops and events related to yoga, meditation, and holistic health to enhance awareness and participation.</p>
          <h5>Community Engagement</h5>
          <p>It fosters a sense of community by bringing students and faculty together in a shared space dedicated to promoting a healthy lifestyle.</p>
          <h5>Stress Relief</h5>
          <p>The Yogasala likely emphasizes stress relief and relaxation, acknowledging the academic pressures of a technical institute like IIIT Nuzvid.</p>
          <h5>Holistic Approach</h5>
          <p>The content and activities may encompass not only physical exercises but also mental and spiritual aspects of yoga, encouraging a holistic approach to well-being.</p>
          <h5>Flexible Programs:</h5>
          <p>Programs might cater to individuals with varying levels of experience, making it accessible for beginners as well as those with more advanced yoga practices.</p>
          <h5>Student Participation</h5>
          <p>Students may actively participate in organizing and leading activities, contributing to a sense of ownership and involvement in the Yogasala community.</p>
          <h5>Health Awareness</h5>
          <p>It plays a role in promoting health awareness on campus, encouraging a balanced and healthy lifestyle among the students and faculty.</p>
        </article>
        <footer className='home-social'>
          <ul className='social-ul'>
            <li className='social-li'><a href='https://m.facebook.com/iiityogamandir/'><i className="bi bi-facebook" style={{fontSize:"50px", color:"black"}}></i></a></li>
            <li className='social-li'><a href='https://youtube.com/@iiitn_yogasala?si=mHz4y0FkgltXkD6a'><i className="bi bi-youtube" style={{fontSize:"50px", color:"black"}}></i></a></li>
            <li className='social-li'><a href='https://www.instagram.com/iiitn_yogasala?igsh=aDZwNXM3YjBkZWJh'><i className="bi bi-instagram" style={{fontSize:"50px", color:"black"}}></i></a></li>
            <li className='social-li'><a href='https://in.linkedin.com/company/rgukt-yogasala'><i className="bi bi-linkedin" style={{fontSize:"50px",color:"black"}}></i></a></li>
          </ul>
        </footer>
    </div>
    </>
  )
}

export default Home
