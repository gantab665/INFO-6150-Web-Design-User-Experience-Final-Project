import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripePaymentForm from "../../Components/Stripe-payment"; // import the Stripe payment form component
const stripePromise = loadStripe("pk_test_CqOkKhGgnK8DRlhPkEIWd7yY00UxtzqFBg");
// Sample data for demonstration
const tripsData = [
  {
    id: 1,
    destination: "Machu Picchu",
    date: "2023-11-15",
    people: 2,
    description: "Discover the ancient ruins of Machu Picchu in Peru.",
    image: "images/slider_1.jpg",
    price: 100,
  },
  {
    id: 2,
    destination: "Santorini",
    date: "2023-10-20",
    people: 4,
    description: "Relax on the beautiful beaches of Santorini, Greece.",
    image: "images/slider_2.jpg",
    price: 200,
  },
  {
    id: 3,
    destination: "Kyoto",
    date: "2023-09-25",
    people: 3,
    description: "Experience the rich culture and history of Kyoto, Japan.",
    image: "images/slider_3.jpg",
    price: 200,
  },
  {
    id: 4,
    destination: "Grand Canyon",
    date: "2023-12-05",
    people: 5,
    description:
      "Explore the breathtaking views of the Grand Canyon in the USA.",
    image: "images/slider-1.jpg",
    price: 200,
  },
  {
    id: 5,
    destination: "Rio de Janeiro",
    date: "2023-11-10",
    people: 2,
    description: "Celebrate the vibrant carnival in Rio de Janeiro, Brazil.",
    image: "images/slider-2.jpg",
    price: 200,
  },
  {
    id: 6,
    destination: "Bangkok",
    date: "2023-10-15",
    people: 3,
    description:
      "Discover the bustling streets and temples of Bangkok, Thailand.",
    image: "images/slider-3.jpg",
    price: 200,
  },
  {
    id: 7,
    destination: "Sydney",
    date: "2023-09-30",
    people: 4,
    description:
      "Experience the iconic landmarks and beaches of Sydney, Australia.",
    image: "images/slider-3.jpg",
    price: 200,
  },
  {
    id: 8,
    destination: "Barcelona",
    date: "2023-12-20",
    people: 2,
    description: "Enjoy the art and architecture of Barcelona, Spain.",
    image: "images/slider-4.jpg",
    price: 200,
  },
  {
    id: 9,
    destination: "Cape Town",
    date: "2023-11-05",
    people: 3,
    description:
      "Explore the stunning landscapes and wildlife of Cape Town, South Africa.",
    image: "images/slider-5.jpg",
    price: 200,
  },
  {
    id: 10,
    destination: "Tokyo",
    date: "2023-10-10",
    people: 5,
    description:
      "Immerse yourself in the futuristic cityscape of Tokyo, Japan.",
    image: "images/slider-5.jpg",
    price: 200,
  },
];

const AllTrips = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [numPeople, setNumPeople] = useState(1);
  const navigate = useNavigate();

  // Function to handle search
  const handleSearch = (value) => {
    setSearchTerm(value);
    const results = tripsData.filter(
      (trip) =>
        trip.destination.toLowerCase().includes(value.toLowerCase()) ||
        trip.description.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

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
      name: selectedTrip.destination,
      status: "Confirmed",
      date: moment(selectedTrip?.date).format("DD-MM-YYYY"),
      location: selectedTrip.destination,
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
    <div className="all-trips container">
      <div className="row mb-4">
        <div className="col-12 text-center mt-5">
          <h1 className="mb-2">All Trips</h1>
          <p className="lead">
            Explore our amazing trips and find the perfect adventure for you.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="row mb-3">
        <div className="col-12">
          <form className="form d-flex justify-content-end">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Destination or Description"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        {(searchTerm === "" ? tripsData : searchResults).map((trip) => (
          <div key={trip.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img
                src={trip.image} // Replace with the actual image path
                className="card-img-top"
                alt={trip.destination}
              />
              <div className="card-body border-bottom">
                <h5 className="card-title">{trip.destination}</h5>
                <p className="card-text">{trip.description}</p>
                <p className="card-text">
                  <strong>Date:</strong> {trip.date}
                </p>

                <p className="card-text">
                  <strong>Price:</strong> ${trip.price} per person
                </p>
                {/* <button className="btn btn-primary" onClick={() => handleBookTrip(trip)}>
                                    View Trip
                                </button> */}
              </div>
              <div className="text-end p-2">
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => handleBookTrip(trip)}
                >
                  Book Trip
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      <Modal show={!!selectedTrip} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">
            Book Trip - {selectedTrip?.destination}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Enter the number of people for the trip to{" "}
            {selectedTrip?.destination}.
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

export default AllTrips;
