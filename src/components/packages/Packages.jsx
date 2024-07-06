import React from 'react'
import CardSlider from '../cardSlider/CardSlider'
import './packges.css'
import { desertSafari } from './packageData'
import { buggyTours } from './packageData'
import { cityTours } from './packageData'

const Packages = () => {
    return (
        <section className='packages'>
            <div className='profile pt-5 pb-2'>
                <div className='container text-center'>
                    <span>
                    <b>DESERT SAFARI TOURHUB</b> is a premier tour operator in the UAE, specializing in both desert safaris and city tours. We provide a wide range of thrilling desert safari experiences, including 4x4 dune bashing, quad biking, and exclusive VIP luxury packages. Our city tours highlight the iconic landmarks of Dubai and Abu Dhabi, seamlessly blending modern marvels with rich cultural heritage. Dedicated to exceptional service and safety, we aim to craft unforgettable adventures that showcase the natural beauty and vibrant culture of the UAE. Discover unparalleled desert and city experiences with DESERT SAFARI TOURHUB.
                    </span>
                </div>
            </div>
            <div className='slider'>
                <div className='container d-flex flex-column gap-5'>
                    <div className='d-flex flex-column align-items-center '>
                        <h2>Explore Desert Safari</h2>
                        <p style={{letterSpacing:'1px', fontSize:'10px'}} className='opacity-75'>The Leading Desert Safari Tour in Dubai</p>
                    </div>
                    <CardSlider desertSafari={desertSafari} />
                </div>
            </div>
            <div className='slider'>
                <div className='container d-flex flex-column gap-5'>
                    <h2>Buggy Tours</h2>
                    <CardSlider buggyTours={buggyTours} />
                </div>
            </div>
            <div className='slider'>
                <div className='container d-flex flex-column gap-5'>
                    <h2>City Tours</h2>
                    <CardSlider cityTours={cityTours} />
                </div>
            </div>
        </section>
    )
}

export default Packages