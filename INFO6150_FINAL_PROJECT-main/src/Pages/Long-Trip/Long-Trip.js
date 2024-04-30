import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "./Long-Trip.css"; // Import custom styles
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripePaymentForm from "../../Components/Stripe-payment"; // import the Stripe payment form component
const stripePromise = loadStripe("pk_test_CqOkKhGgnK8DRlhPkEIWd7yY00UxtzqFBg");
const LongTrip = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [numPeople, setNumPeople] = useState(1);
  const navigate = useNavigate();
  const trips = [
    {
      id: 1,
      place: "Machu Picchu, Peru",
      price: 1200,
      durationDays: 10,
      description:
        "Explore the ancient ruins of Machu Picchu and immerse yourself in the rich history of Peru.",
      tripImage: "images/trip-1.jpg",
      amenities: [
        "Guided Tours by Archaeologists",
        "Accommodation in Historic Inns",
        "Traditional Peruvian Cuisine",
        "Hiking in the Andes",
      ],
    },
    {
      id: 2,
      place: "Banff National Park, Canada",
      price: 1500,
      durationDays: 8,
      description:
        "Discover the breathtaking landscapes of Banff National Park, including pristine lakes and mountain ranges.",
      tripImage: "images/trip-2.jpg",
      amenities: [
        "Wildlife Safari",
        "Luxury Mountain Lodge Stay",
        "Canoeing on Lake Louise",
        "Scenic Helicopter Tour",
      ],
    },
    {
      id: 3,
      place: "Patagonia, Argentina",
      price: 1800,
      durationDays: 12,
      description:
        "Embark on an adventure to the stunning landscapes of Patagonia, with its glaciers, mountains, and fjords.",
      tripImage: "images/trip-3.jpg",
      amenities: [
        "Trekking in Torres del Paine",
        "Boat Tours to Glaciers",
        "Local Patagonian Cuisine",
        "Stargazing in El Chaltén",
      ],
    },
    {
      id: 4,
      place: "Yellowstone National Park, USA",
      price: 1300,
      durationDays: 9,
      description:
        "Experience the wonders of Yellowstone National Park, home to geysers, hot springs, and diverse wildlife.",
      tripImage: "images/trip-4.jpg",
      amenities: [
        "Geothermal Features Exploration",
        "Camping in the Wilderness",
        "Wildlife Photography",
        "Old Faithful Observation",
      ],
    },
    {
      id: 5,
      place: "Serengeti National Park, Tanzania",
      price: 2000,
      durationDays: 14,
      description:
        "Embark on a safari adventure in Serengeti National Park, witnessing the Great Migration and diverse wildlife.",
      tripImage: "images/trip-5.jpg",
      amenities: [
        "Safari Game Drives",
        "Luxury Tented Camp Accommodation",
        "Balloon Safari",
        "Maasai Village Visit",
      ],
    },
    {
      id: 6,
      place: "Fiordland National Park, New Zealand",
      price: 1600,
      durationDays: 11,
      description:
        "Discover the stunning fiords and lush landscapes of Fiordland National Park in New Zealand.",
      tripImage: "images/trip-6.jpg",
      amenities: [
        "Milford Sound Cruise",
        "Hiking on the Kepler Track",
        "Scenic Helicopter Flight",
        "Wildlife Spotting",
      ],
    },
    {
      id: 7,
      place: "Great Wall of China, China",
      price: 1400,
      durationDays: 8,
      description:
        "Walk along the iconic Great Wall of China and explore ancient historical sites.",
      tripImage: "images/trip-7.jpg",
      amenities: [
        "Great Wall Hike",
        "Visit to Forbidden City",
        "Traditional Chinese Cuisine",
        "Cultural Performances",
      ],
    },
    {
      id: 8,
      place: "Amazon Rainforest, Brazil",
      price: 2200,
      durationDays: 15,
      description:
        "Experience the biodiversity of the Amazon Rainforest, with jungle excursions and river adventures.",
      tripImage: "images/trip-8.jpg",
      amenities: [
        "Jungle Trekking",
        "River Cruises",
        "Indigenous Community Visit",
        "Nighttime Wildlife Safari",
      ],
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
    console.log(`Booking ${numPeople} people for ${selectedTrip.place}`);
    // Add further logic as needed
    handleCloseModal();
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
  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedTrip(null);
  };

  return (
    <div className="trip-details container">
      <img src="images/img_4.jpg" alt="Long Trip" className="trip-image" />
      <h2 className="trip-title">Long Trip: Explore the Wilderness</h2>
      <p className="trip-description">
        Embark on an unforgettable adventure with our Long Trip. Discover the
        beauty of nature, explore remote landscapes, and create lasting
        memories.
      </p>
      <h3 className="section-title">Amenities:</h3>
      <ul className="amenities-list">
        <li>Comfortable Accommodation in Wilderness Lodges</li>
        <li>Guided Tours by Experienced Naturalists</li>
        <li>Daily Meals Featuring Local Cuisine</li>
        <li>Wildlife Safari Excursions</li>
        <li>Bonfire Nights with Stargazing</li>
      </ul>
      <p className="trip-description">
        Immerse yourself in the heart of nature, surrounded by lush forests,
        majestic mountains, and serene lakes. This long trip promises an
        enriching experience for nature enthusiasts.
      </p>
      <h3 className="section-title">Additional Information:</h3>
      <p className="trip-description">
        The Long Trip spans 10 days and covers multiple locations. Participants
        should be prepared for moderate physical activity, and it is recommended
        to bring suitable outdoor clothing and gear.
      </p>
      <h3 className="mb-4 text-center text-success">Long Trips</h3>
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
                    Duration: {trip.durationDays} days
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
            Enter the number of people for the trip to {selectedTrip?.place}.
          </p>
          <p>Price per person: ${selectedTrip?.price}</p>
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
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LongTrip;
