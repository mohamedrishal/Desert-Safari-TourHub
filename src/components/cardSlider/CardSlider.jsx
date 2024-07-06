import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import './cardSlider.css';
import Card from 'react-bootstrap/Card';
import { Pagination } from 'swiper/modules';
import dummy from '../../assets/safari-car.jpg'
import PackageModal from '../packageModal/PackageModal';

const CardSlider = ({ desertSafari, buggyTours, cityTours }) => {

    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleShow = (item) => {
        setSelectedItem(item);
        setShow(true);
    };

    return (
        <>
            {
                desertSafari && (
                    <Swiper
                        navigation={true}
                        pagination={true}
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is >= 662px
                            662: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            // when window width is >= 1200px
                            992: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                            },
                        }}
                    >
                        {
                            desertSafari.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card style={{ width: '20rem' }} className='card-height shadow border border-2 border-danger p-2' onClick={() => handleShow(item)}>
                                        <Card.Img className='card-img' variant="top" src={dummy} />
                                        <Card.Body>
                                            <Card.Title className='card-title'>{item.title}</Card.Title>
                                            <Card.Text className='pt-2'>
                                                <p className='opacity-75 small-text'>
                                                    <ul>
                                                        {item.services.slice(0, 2).map((service, idx) => (
                                                            <li key={idx}>{service}</li>
                                                        ))}
                                                    </ul>
                                                    {item.services.length > 2 && (
                                                        <div style={{color:'rgb(25, 25, 78)'}} className='d-flex align-items-center justify-content-center gap-3 fw-bolder'>
                                                            <span>View Full Details</span>
                                                            <i class="fa-solid fa-right-long fa-beat-fade"></i>
                                                        </div>
                                                    )}
                                                </p>
                                            </Card.Text>
                                            <div className='tripCost-text'>
                                                <span>{item.cost}</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                )
            }

            {
                buggyTours && (
                    <Swiper
                        navigation={true}
                        pagination={true}
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is >= 662px
                            662: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            // when window width is >= 1200px
                            992: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                            },
                        }}
                    >
                        {
                            buggyTours.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card style={{ width: '20rem' }} className='card-height shadow border border-2 border-danger p-2' onClick={() => handleShow(item)}>
                                        <Card.Img className='card-img' variant="top" src={dummy} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text className='pt-2'>
                                                <p className='opacity-75 small-text'>
                                                    <ul>
                                                        {item.services.slice(0, 2).map((service, idx) => (
                                                            <li key={idx}>{service}</li>
                                                        ))}
                                                    </ul>
                                                    {item.services.length > 2 && (
                                                        <div style={{color:'rgb(25, 25, 78)'}} className='d-flex align-items-center justify-content-center gap-3 fw-bolder'>
                                                            <span>View Full Details</span>
                                                            <i class="fa-solid fa-right-long fa-beat-fade"></i>
                                                        </div>
                                                    )}
                                                </p>
                                            </Card.Text>
                                            <div className='tripCost-text'>
                                                <span>{item.cost}</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )
            }

            {
                cityTours && (
                    <Swiper
                        navigation={true}
                        pagination={true}
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        className="mySwiper"
                        breakpoints={{
                            // when window width is >= 662px
                            662: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            // when window width is >= 1200px
                            992: {
                                slidesPerView: 3,
                                slidesPerGroup: 1,
                            },
                        }}
                    >
                        {
                            cityTours.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card style={{ width: '20rem' }} className='card-height shadow border border-2 border-danger p-2' onClick={() => handleShow(item)}>
                                        <Card.Img className='card-img' variant="top" src={dummy} />
                                        <Card.Body className='d-flex flex-column align-items-center'>
                                            <Card.Title className='me-auto'>{item.title}</Card.Title>
                                            <Card.Text className='pt-2'>
                                                <p className='opacity-75 small-text'>
                                                    <ul>
                                                        {item.services.slice(0, 2).map((service, idx) => (
                                                            <li key={idx}>{service}</li>
                                                        ))}
                                                    </ul>
                                                    {item.services.length > 2 && (
                                                        <div style={{color:'rgb(25, 25, 78)'}} className='d-flex align-items-center justify-content-center gap-3 fw-bolder'>
                                                            <span>View Full Details</span>
                                                            <i class="fa-solid fa-right-long fa-beat-fade"></i>
                                                        </div>
                                                    )}
                                                </p>
                                            </Card.Text>
                                            <div className='tripCost-text'>
                                                <span>{item.cost}</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )
            }

            <PackageModal show={show} setShow={setShow} item={selectedItem} />
        </>
    );
}

export default CardSlider;
