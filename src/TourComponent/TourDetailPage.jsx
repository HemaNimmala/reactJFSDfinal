import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TourCarousel from "./TourCarousel"; // Import the updated TourCarousel

const TourDetailPage = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();

  const customer = JSON.parse(sessionStorage.getItem("active-customer"));
  const guide = JSON.parse(sessionStorage.getItem("active-guide"));

  const [tour, setTour] = useState({
    id: "",
    name: "",
    description: "",
    totalDaysOfTour: "",
    guide: { firstName: "", lastName: "" },
    fromLocation: { name: "" },
    toLocation: { name: "" },
    activities: [],
    meals: [],
    transport: { name: "" },
    lodging: { type: "" },
    lodgingName: "",
    totalTickets: "",
    availableTickets: "",
    ticketPrice: "",
    addedDate: "",
    startDate: "",
    endDate: "",
    status: "",
    image1: "",
    image2: "",
    image3: "",
  });

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/tour/fetch?tourId=${tourId}`);
        if (response.data && response.data.tours) {
          setTour(response.data.tours[0]);
        }
      } catch (error) {
        toast.error("Error fetching tour details. Please try again later.");
      }
    };
    fetchTourDetails();
  }, [tourId]);

  const formatDateFromEpoch = (epochTime) => new Date(Number(epochTime)).toLocaleString();

  const handleBooking = () => {
    if (!customer) {
      toast.warn("Please log in as a customer to book a tour!");
    } else {
      navigate("/tour/booking/page", { state: tour });
    }
  };

  const navigateToUpdatePage = (path) => navigate(path, { state: tour });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          margin: "0 auto",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            padding: "15px",
            margin: 0,
            color: "#4a4a4a",
            borderBottom: "1px solid #ddd",
          }}
        >
          Tour Details
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
          <TourCarousel item={{ image1: tour.image1, image2: tour.image2, image3: tour.image3 }} />

          <div style={{ padding: "10px" }}>
            <h3 style={{ margin: "10px 0" }}>{tour.name}</h3>
            <p style={{ margin: "10px 0", color: "#555" }}>{tour.description}</p>
            

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <div>
                <b>From:</b> {tour.fromLocation.name}
              </div>
              <div>
                <b>To:</b> {tour.toLocation.name}
              </div>
              <div>
                <b>Tour Guide:</b> {tour.guide.firstName} {tour.guide.lastName}
              </div>
              <div>
                <b>Start Date:</b> {formatDateFromEpoch(tour.startDate)}
              </div>
              <div>
                <b>End Date:</b> {formatDateFromEpoch(tour.endDate)}
              </div>
              <div>
                <b>Total Days:</b> {tour.totalDaysOfTour}
              </div>
              <div>
                <b>Tickets Available:</b> {tour.availableTickets} / {tour.totalTickets}
              </div>
              <div>
                <b>Price per Ticket:</b> ₹{tour.ticketPrice}
              </div>
              <div>
                <b>Transport:</b> {tour.transport.name}
              </div>
              <div>
                <b>Lodging:</b> {tour.lodging.type} - {tour.lodgingName}
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            {tour.status === "Active" && (
              <button onClick={handleBooking} style={buttonStyle}>
                Book Tour
              </button>
            )}
            {guide && guide.id === tour.guide.id && (
              <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
                <button onClick={() => navigateToUpdatePage("/tour-guide/tour/update/detail")} style={buttonStyle}>
                  Update Details
                </button>
                <button onClick={() => navigateToUpdatePage("/tour-guide/tour/images/update")} style={buttonStyle}>
                  Update Images
                </button>
                <button onClick={() => navigateToUpdatePage("/tour-guide/tour/activity/update")} style={buttonStyle}>
                  Update Activities
                </button>
                <button onClick={() => navigateToUpdatePage("/tour-guide/tour/meal/update")} style={buttonStyle}>
                  Update Meals
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s",
  fontSize: "14px",
};

export default TourDetailPage;
