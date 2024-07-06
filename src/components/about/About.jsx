import React from 'react'
import './about.css'

const About = () => {
  return (
    <section className='about d-flex flex-column gap-3 py-3'>
        <div className='container d-flex flex-column align-items-center gap-3'>
            <h2>About Us</h2>
            <p className='text-secondary'>If you're in search of an exhilarating and entertaining outdoor adventure, our desert safaris in Dubai are the perfect choice! Whether you prefer morning, afternoon, sunset, or night safaris, we have options to cater to all preferences. Join us with your friends, family, or colleagues for an unforgettable journey into the vast and captivating desert landscape. With a variety of packages available, we strive to accommodate your needs and ensure a convenient and enjoyable experience for all.</p>
        </div>
        <div className='container d-flex flex-column align-items-center gap-3'>
            <h3 className='me-auto'>Mission and Vision:</h3>
            <p className='text-secondary'>Our mission is to provide exceptional Desert Safari experiences that showcase the natural beauty and cultural richness of the UAE. We aim to be the preferred choice for travelers seeking memorable adventures in the desert.</p>
        </div>
    </section>
  )
}

export default About  