import React, { useEffect } from 'react'
import CounterSection from '../../Components/Counter'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../axios';
import { Link } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('/latest-reviews')
            .then(res => {
                setReviews(res.data);
            })
            .catch(err => {
                console.error('Error fetching reviews:', err);
            });
    }, []);
    const handleSearch = (e) => {
        e.preventDefault();

        // Retrieve form data and perform any necessary processing
        // For now, let's assume you want to redirect to the All Trips page
        navigate('/all-trips');
    };
    return (
        <div>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
            <div className="hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="intro-wrap">
                                <h1 className="mb-5">
                                    <span className="d-block">Let's Enjoy Your</span> Trip
                                    <span className=""> By Booking here</span>
                                </h1>

                                <div className="row">
                                    <div className="col-12">
                                        <form className="form" id="search-form" onSubmit={handleSearch}>
                                            <div className="row mb-2">
                                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4">
                                                    <select
                                                        name=""
                                                        id=""
                                                        className="form-control custom-select"
                                                    >
                                                        <option value="">Destination</option>
                                                        <option value="">Peru</option>
                                                        <option value="">Japan</option>
                                                        <option value="">Thailand</option>
                                                        <option value="">Brazil</option>
                                                        <option value="">United States</option>
                                                        <option value="">Israel</option>
                                                        <option value="">China</option>
                                                        <option value="">Russia</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-5">
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        name="daterange"
                                                        placeholder="Select a Date"
                                                    />
                                                </div>
                                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="# of Days"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4 text-start">
                                                    <button
                                                        className="btn btn-primary btn-block"

                                                    >
                                                        Search
                                                    </button>
                                                </div>
                                                <div className="col-lg-8 text-start">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="flexCheckDefault"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"

                                                        >
                                                            Save this Search
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-5">
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="0"
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="1"
                                        aria-label="Slide 2"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="2"
                                        aria-label="Slide 3"
                                    ></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src="images/hero-slider-1.jpg"
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src="images/hero-slider-2.jpg"
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src="images/hero-slider-3.jpg"
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExample"
                                    data-bs-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExample"
                                    data-bs-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="untree_co-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2 className="section-title text-center mb-3">Our Services</h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated
                                they live in Bookmarksgrove right at the coast of the Semantics, a
                                large language ocean.
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-stretch">
                        <div className="col-lg-4 order-lg-1">
                            <div className="h-100">
                                <div className="frame h-100">
                                    <div
                                        className="feature-img-bg h-100"
                                        style={{ backgroundImage: "url('images/hero-slider-1.jpg')" }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1"
                        >
                            <div className="feature-1 d-md-flex">
                                <div className="align-self-center">
                                    <span className="flaticon-house display-4 text-primary"></span>
                                    <h3>Beautiful Condo</h3>
                                    <p className="mb-0">
                                        Even the all-powerful Pointing has no control about the blind
                                        texts.
                                    </p>
                                </div>
                            </div>

                            <div className="feature-1">
                                <div className="align-self-center">
                                    <span className="flaticon-restaurant display-4 text-primary"></span>
                                    <h3>Restaurants & Cafe</h3>
                                    <p className="mb-0">
                                        Even the all-powerful Pointing has no control about the blind
                                        texts.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3"
                        >
                            <div className="feature-1 d-md-flex">
                                <div className="align-self-center">
                                    <span className="flaticon-mail display-4 text-primary"></span>
                                    <h3>Easy to Connect</h3>
                                    <p className="mb-0">
                                        Even the all-powerful Pointing has no control about the blind
                                        texts.
                                    </p>
                                </div>
                            </div>

                            <div className="feature-1 d-md-flex">
                                <div className="align-self-center">
                                    <span className="flaticon-phone-call display-4 text-primary"></span>
                                    <h3>24/7 Support</h3>
                                    <p className="mb-0">
                                        Even the all-powerful Pointing has no control about the blind
                                        texts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <CounterSection></CounterSection>
            </div>
            <div className="untree_co-section">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-lg-6">
                            <h2 className="section-title text-center mb-3 text-primary">
                                Special Offers &amp; Discounts
                            </h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated
                                they live in Bookmarksgrove right at the coast of the Semantics, a
                                large language ocean.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="media-1">
                                <a href="#" className="d-block mb-3"
                                ><img
                                        src="images/hero-slider-1.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    /></a>
                                <span className="d-flex align-items-center loc mb-2">
                                    <span className="icon-room mr-3"></span>
                                    <span>Italy</span>
                                </span>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h3><a href="#">Rialto Mountains</a></h3>
                                        <div className="price ml-auto">
                                            <span>$520.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="media-1">
                                <a href="#" className="d-block mb-3"
                                ><img
                                        src="images/hero-slider-2.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    /></a>
                                <span className="d-flex align-items-center loc mb-2">
                                    <span className="icon-room mr-3"></span>
                                    <span>United States</span>
                                </span>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h3><a href="#">San Francisco</a></h3>
                                        <div className="price ml-auto">
                                            <span>$520.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="media-1">
                                <a href="#" className="d-block mb-3"
                                ><img
                                        src="images/hero-slider-3.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    /></a>
                                <span className="d-flex align-items-center loc mb-2">
                                    <span className="icon-room mr-3"></span>
                                    <span>Malaysia</span>
                                </span>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h3><a href="#">Perhentian Islands</a></h3>
                                        <div className="price ml-auto">
                                            <span>$750.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <div className="media-1">
                                <a href="#" className="d-block mb-3"
                                ><img
                                        src="images/hero-slider-4.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    /></a>

                                <span className="d-flex align-items-center loc mb-2">
                                    <span className="icon-room mr-3"></span>
                                    <span>Switzerland</span>
                                </span>

                                <div className="d-flex align-items-center">
                                    <div>
                                        <h3><a href="#">Lake Thun</a></h3>
                                        <div className="price ml-auto">
                                            <span>$520.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="untree_co-section">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <figure className="img-play-video">
                                <a id="play-video" className="video-play-button" data-fancybox="">
                                    <span></span>
                                </a>
                                <video controls poster="images/hero-slider-2.jpg" className="img-fluid rounded-20">
                                    <source src="travel.mp4" type="video/mp4" />

                                    <source src="your-local-video.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                            </figure>
                        </div>

                        <div className="col-lg-5">
                            <h2 className="section-title text-left mb-4">
                                Take a look at Tour Video
                            </h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated
                                they live in Bookmarksgrove right at the coast of the Semantics, a
                                large language ocean.
                            </p>

                            <p className="mb-4">
                                A small river named Duden flows by their place and supplies it
                                with the necessary regelialia. It is a paradisematic country, in
                                which roasted parts of sentences fly into your mouth.
                            </p>

                            <ul className="list-unstyled two-col clearfix">
                                <li>Outdoor recreation activities</li>
                                <li>Airlines</li>
                                <li>Car Rentals</li>
                                <li>Cruise Lines</li>
                                <li>Hotels</li>
                                <li>Railways</li>
                                <li>Travel Insurance</li>
                                <li>Package Tours</li>
                                <li>Insurance</li>
                                <li>Guide Books</li>
                            </ul>

                            <p><a href="#" className="btn btn-primary">Get Started</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 cta-section">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h2 className="mb-2 text-white">
                                Lets you Explore the Best. Contact Us Now
                            </h2>
                            <p className="mb-4 lead text-white text-white-opacity">
                            "Embark on unforgettable journeys with our travel website, where every destination is a new adventure waiting to be explored."
                            </p>
                            <p className="mb-0">
                                {/* <a
                                    href="/"
                                    className="btn btn-outline-white text-white btn-md font-weight-bold"
                                >Get in touch</a> */}
                                 <Link className="nav-link" to="/About-us">
                                        <button className='btn btn-primary'>Get in Touch</button>
                                    </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h2 className="text-center">Frequently Asked Questions</h2>
                <div id="faqAccordion">
                    <div className="accordion">

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqHeading1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                                    What are the payment options for booking a trip?
                                </button>
                            </h2>
                            <div id="faqCollapse1" className="accordion-collapse collapse show" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    We accept payments via credit cards, PayPal, and bank transfers. You can choose the option that suits you best during the booking process.
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqHeading2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                                    Can I cancel my trip and get a refund?
                                </button>
                            </h2>
                            <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Yes, you can cancel your trip, but the refund policy depends on the specific trip and when you cancel. Please refer to our cancellation policy for more details.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqHeading3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                                    Is travel insurance included in the trip cost?
                                </button>
                            </h2>
                            <div id="faqCollapse3" className="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Travel insurance is not included in the trip cost. We recommend purchasing travel insurance to protect yourself in case of unexpected events during your journey.
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqHeading4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                                    How can I contact customer support for assistance?
                                </button>
                            </h2>
                            <div id="faqCollapse4" className="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    You can contact our customer support team by calling our toll-free number, sending an email to support@example.com, or using our online chat service available on our website.
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container mt-4">
            <h2 className="mb-3">Latest Reviews</h2>
            <div className="row">
                {reviews.map((review, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{review.trip.name}</h5>
                                <p className="card-text">{review.reviewText}</p>
                                {/* Display other trip details as needed */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {reviews.length === 0 && <p>No reviews available.</p>}
        </div>
            <div className="site-footer">
                <div className="inner first">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="widget">
                                    <h3 className="heading">About Tour</h3>
                                    <p>
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind texts.
                                    </p>
                                </div>
                                <div className="widget"></div>
                            </div>
                            <div className="col-md-6 col-lg-2 pl-lg-5">
                                <div className="widget">
                                    <h3 className="heading">Pages</h3>
                                    <ul className="links list-unstyled">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">About Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <div className="widget">
                                    <h3 className="heading">Trip Types</h3>
                                    <ul className="links list-unstyled">
                                        <li><a href="#">One Day</a></li>
                                        <li><a href="#">Two Day</a></li>
                                        <li><a href="#">Long Trip</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="widget">
                                    <h3 className="heading">Contact</h3>
                                    <ul className="list-unstyled quick-info links">
                                        <li className="email"><a href="#">mail@example.com</a></li>
                                        <li className="phone"><a href="#">+1 222 212 3819</a></li>
                                        <li className="address">
                                            <a href="#">43 Raymouth Rd. Baltemoer, London 3910</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="inner dark">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-8 mb-3 mb-md-0 mx-auto">
                                <p>
                                    Copyright &copy;
                                    <script>
                                        document.write(new Date().getFullYear());
                                    </script>
                                    . All Rights Reserved. Travel Blog
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
