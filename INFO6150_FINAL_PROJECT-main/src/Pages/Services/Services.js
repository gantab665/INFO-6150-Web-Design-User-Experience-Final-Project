import React from 'react';

const Services = () => {
    return (
        <div>
            <header className="bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">Our Services</h1>
                    <p className="lead">Check out the services we offer to make your travel experience unforgettable.</p>
                </div>
            </header>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-4">
                            <div className="card h-100">
                                <img
                                    src="images/gal_1.jpg"
                                    className="card-img-top"
                                    alt="Adventure Tours"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Adventure Tours</h5>
                                    <p className="card-text">Embark on thrilling adventures with our expert guides. Explore breathtaking landscapes and challenge yourself with adrenaline-pumping activities.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-4">
                            <div className="card h-100">
                                <img
                                    src="images/gal_2.jpg"
                                    className="card-img-top"
                                    alt="Luxury Accommodations"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Luxury Accommodations</h5>
                                    <p className="card-text">Indulge in the lap of luxury with our handpicked selection of high-end accommodations. Immerse yourself in comfort and elegance during your stay.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-4">
                            <div className="card h-100">
                                <img
                                    src="images/gal_3.jpg"
                                    className="card-img-top"
                                    alt="Cultural Experiences"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Cultural Experiences</h5>
                                    <p className="card-text">Discover the rich tapestry of cultures around the world. Engage in authentic cultural experiences, from traditional ceremonies to local cuisine.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-4">
                            <div className="card h-100">
                                <img
                                    src="images/gal_4.jpg"
                                    className="card-img-top"
                                    alt="Wildlife Safaris"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Wildlife Safaris</h5>
                                    <p className="card-text">Embark on a journey through the heart of nature. Experience the thrill of observing wildlife in their natural habitats with our expert guides.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-4">
                            <div className="card h-100">
                                <img
                                    src="images/gal_5.jpg"
                                    className="card-img-top"
                                    alt="Family-Friendly Tours"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Family-Friendly Tours</h5>
                                    <p className="card-text">Create lasting memories with your loved ones. Our family-friendly tours cater to all ages, ensuring everyone has a fantastic and enjoyable experience.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-4">
                            <div className="card h-100">
                                <img
                                    src="images/gal_6.jpg"
                                    className="card-img-top"
                                    alt="Romantic Getaways"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Romantic Getaways</h5>
                                    <p className="card-text">Ignite the spark with a romantic escape. Our carefully curated getaways offer the perfect blend of intimacy and luxury, setting the stage for romance.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-4">
                            <div className="card h-100">
                                <img
                                    src="images/img_2.jpg"
                                    className="card-img-top"
                                    alt="Customized Travel Plans"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Customized Travel Plans</h5>
                                    <p className="card-text">Tailor your journey to perfection. Our experts will work with you to create a personalized travel plan that aligns with your preferences and desires.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-4">
                            <div className="card h-100">
                                <img
                                    src="images/img_1.jpg"
                                    className="card-img-top"
                                    alt="Group Adventures"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Group Adventures</h5>
                                    <p className="card-text">Share the excitement with fellow adventurers. Our group tours provide a dynamic and social environment, allowing you to connect with like-minded travelers.</p>
                                </div>
                            </div>
                        </div>

                        {/* Add more service cards as needed */}
                    </div>
                </div>
            </section>

            {/* Add more sections or content as needed */}

            <footer className="bg-dark text-light text-center py-3">
                <div className="container">&copy; 2023 Travel Blog. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Services;