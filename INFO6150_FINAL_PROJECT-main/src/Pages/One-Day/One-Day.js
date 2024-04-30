import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripePaymentForm from "../../Components/Stripe-payment"; // import the Stripe payment form component
import moment from "moment";
import "./One-Day.css";
const stripePromise = loadStripe("pk_test_CqOkKhGgnK8DRlhPkEIWd7yY00UxtzqFBg");
const OneDayTrip = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [numPeople, setNumPeople] = useState(1);
  const navigate = useNavigate();
  const trips = [
    {
      id: 1,
      place: "City Exploration",
      durationDays: 1,
      price: 50,
      description:
        "Discover the vibrant city life in a single day. Visit iconic landmarks, taste local cuisine, and explore the city's culture.",
      tripImage: "images/slider-1.jpg",
    },
    {
      id: 2,
      place: "Nature Hike",
      durationDays: 1,
      price: 40,
      description:
        "Escape to nature with a one-day hiking trip. Enjoy scenic trails, breathe in fresh air, and connect with the great outdoors.",
      tripImage: "images/slider-2.jpg",
    },
    {
      id: 3,
      place: "Historical Tour",
      durationDays: 1,
      price: 60,
      description:
        "Step back in time with a historical tour. Visit ancient sites, museums, and learn about the rich history of the region.",
      tripImage: "images/slider-3.jpg",
    },
    {
      id: 4,
      place: "Beach Day",
      durationDays: 1,
      price: 45,
      description:
        "Relax and unwind with a day at the beach. Sunbathe, swim in crystal-clear waters, and enjoy the coastal atmosphere.",
      tripImage: "images/slider-4.jpg",
    },
    {
      id: 5,
      place: "Food Adventure",
      durationDays: 1,
      price: 55,
      description:
        "Indulge in a culinary journey with a one-day food adventure. Taste local specialties and explore hidden gems of the food scene.",
      tripImage: "images/slider-5.jpg",
    },
  ];

  // Function to handle booking modal open
  const handleBookTrip = (trip) => {
    console.log(trip);
    setSelectedTrip(trip);
    setNumPeople(1); // Reset the number of people input
  };

  // Function to handle booking
  // Function to handle booking
  const handleConfirmBooking = () => {
    const payload = {
      name: selectedTrip.place,
      status: "Confirmed",
      date: moment(new Date()).format("DD-MM-YYYY"),
      location: selectedTrip.place,
      price: (numPeople * selectedTrip.price).toString(),
    };

    axios
      .post("/my-trips", payload)
      .then((res) => {
        navigate("/my-trips");
        setSelectedTrip(null);
        setNumPeople(1);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(payload);
    // Implement your booking logic here
    // You can access the selectedTrip and numPeople states to get the details
    // For simplicity, just logging the details to the console for now
    console.log(`Booking ${numPeople} people for ${selectedTrip.destination}`);
    // Add further logic as needed
    handleCloseModal();
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedTrip(null);
  };
  const handlePaymentSuccess = (details, data) => {
    console.log("Payment Successful", details, data);

    // Here, you can send the booking details to your server
    const payload = {
      name: selectedTrip.place,
      status: "Confirmed",
      date: moment(new Date()).format("DD-MM-YYYY"),
      location: selectedTrip.place,
      price: (numPeople * selectedTrip.price).toString(),
    };
    axios
      .post("/my-trips", payload)
      .then((res) => {
        navigate("/my-trips");
        setSelectedTrip(null);
        setNumPeople(1);
      })
      .catch((err) => {
        console.error(err);
      });

    handleCloseModal();
  };
  return (
    <div className="trip-details container">
      <img src="images/slider-1.jpg" alt="Long Trip" className="trip-image" />
      <h2 className="trip-title">One Day Trip: Explore Nearby Wonders</h2>
      <p className="trip-description">
        Experience the thrill of a day-long adventure with our One Day Trip.
        Discover hidden gems, indulge in local culture, and make the most of
        your day.
      </p>
      <h3 className="section-title">Amenities:</h3>
      <ul className="amenities-list">
        <li>Guided Tours to Iconic Landmarks</li>
        <li>Local Cuisine Tasting</li>
        <li>Exciting Outdoor Activities</li>
        <li>Photography Opportunities</li>
      </ul>
      <p className="trip-description">
        Make the most of your day with our carefully curated One Day Trip,
        designed to offer a blend of excitement and relaxation.
      </p>
      <h3 className="section-title">Additional Information:</h3>
      <p className="trip-description">
        The One Day Trip is perfect for those seeking a quick getaway.
        Comfortable attire and footwear are recommended for various activities.
      </p>
      <h1 className="mb-4">One Day Trips</h1>
      <div className="row">
        {trips.map((trip) => (
          <div key={trip.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src={trip.tripImage}
                className="card-img-top"
                alt={trip.place}
              />
              <div className="card-body">
                <h5 className="card-title">{trip.place}</h5>
                <p className="card-text">{trip.description}</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Duration: {trip.durationDays} day
                  </li>
                  <li className="list-group-item">Price: ${trip.price}</li>
                </ul>
                <div className="card-body">
                  <button
                    className="btn btn-success"
                    onClick={() => handleBookTrip(trip)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Booking Modal */}
      <Modal show={!!selectedTrip} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">
            Book Trip - {selectedTrip?.place}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Enter the number of people for the trip to{" "}
            {selectedTrip?.place}.
          </p>
          <p>Price per person: ${selectedTrip?.place}</p>
          <Form>
            <Form.Group controlId="numPeople">
              <Form.Label>Number of People</Form.Label>
              <Form.Control
                min={1}
                type="number"
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
              />
            </Form.Group>
          </Form>
          <p className="mt-3">
            Total Price:{" "}
            <span className="text-primary">
              ${selectedTrip?.price * numPeople}
            </span>
          </p>
          <Elements stripe={stripePromise}>
            <StripePaymentForm
              amount={selectedTrip?.price * numPeople}
              onSuccessfulPayment={handlePaymentSuccess}
            />
          </Elements>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleConfirmBooking}>
                        Confirm Booking
                    </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OneDayTrip;