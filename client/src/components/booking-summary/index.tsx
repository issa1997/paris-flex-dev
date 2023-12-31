import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as HealthIcon } from "../../assets/icons/healthicons_travel-alt-outline.svg";
import { ReactComponent as PassengersDetails } from "../../assets/icons/passenger.svg";
import { ReactComponent as Extras } from "../../assets/icons/extras.svg";
import { ReactComponent as BabySeats } from "../../assets/icons/toddler-1.svg";
import Booster from "../../assets/seats-orange.png";
import { ReactComponent as FreeTag } from "../../assets/icons/free-tag.svg";
import { PassengerDetailsType } from "../../services/passengers-details";
import { PassengerDetailExtrasType } from "../../services/passengers-detail-extras";
import ConfirmationModal from "../confirmation-modal";
import { BookingType, createBooking } from "../../services/bookings";
import { toast, ToastContainer } from "react-toastify";
import "./index.css";
import { AxiosResponse } from "axios";

const BookingSummaryComponent: React.FC<{
  passengerDetails: Omit<PassengerDetailsType, "id" | "isDelete"> | undefined;
  passengerExtrasDetails:
    | Omit<PassengerDetailExtrasType, "id" | "isDelete">
    | undefined;
  bookingDetails: BookingType;
}> = (props) => {
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);

  const handleConfirmBooking = () => {
    createBooking(props.bookingDetails)
      .then((response: AxiosResponse) => {
        const restrcutredResponse: any = response.data;
        toast.success(restrcutredResponse.message, {
          position: "bottom-right",
        });
        setConfirmationModalOpen(true);
      })
      .catch((error: any) => {
        const response: any = error.response.data;
        toast.error(response.message, { position: "bottom-right" });
      });
  };

  return (
    <>
      <ToastContainer />
      <Card className="booking-detail-card-style">
        <Typography gutterBottom variant="h5" className="heading-style">
          <span>
            <HealthIcon className="health-icon-styles" />
          </span>
          BOOKING SUMMARY
        </Typography>
        <Grid
          container
          spacing={{ md: 3 }}
          rowGap={{ xs: 2, md: 0 }}
          className="grid-space"
        >
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h5"
              mt={3}
              className="sub-heading-style"
            >
              Passenger Details
              <span>
                <PassengersDetails className="icon-styles" />
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="data-heading">
              Name
            </Typography>
            <Typography className="data-heading-item">
              {props.passengerDetails?.name}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="data-heading">
              Email
            </Typography>
            <Typography className="data-heading-item">
              {props.passengerDetails?.email}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="data-heading">
              Contact Number
            </Typography>
            <Typography className="data-heading-item">
              {props.passengerDetails?.phone}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="data-heading">
              Flight/Train Number
            </Typography>
            <Typography className="data-heading-item">
              {props.passengerDetails?.travelNumber}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="data-heading">
              Flight/Train from
            </Typography>
            <Typography className="data-heading-item">
              {props.passengerDetails?.travelFrom}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>

        <Grid
          container
          spacing={{ md: 3 }}
          rowGap={{ xs: 2, md: 0 }}
          className="grid-space"
        >
          <Grid item xs={12} mt={3}>
            <Typography gutterBottom variant="h5" className="sub-heading-style">
              Extras
              <span>
                <Extras className="icon-styles" />
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="data-heading">
              Notes for chauffeur
            </Typography>
            <Typography className="data-heading-item">
              {props.passengerExtrasDetails?.extrasDescription}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} container direction="column" spacing={2}>
            <Box className="free-seats-styles-summary">
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                mt={1}
              >
                <BabySeats className="seating-icon-style" />
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <span className="seats-text-styles">Baby Seats</span>
                  <FreeTag />
                </Stack>

                <span className="seats-number">
                  {props.passengerExtrasDetails?.childSeats}
                </span>
              </Stack>
            </Box>
            <Box className="free-seats-styles-summary">
              {" "}
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                mt={1}
              >
                <img alt="booster-seats" src={Booster} width={50} />
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <span className="seats-text-styles">Booster Seats</span>
                  <FreeTag />
                </Stack>

                <span className="seats-number">
                  {props.passengerExtrasDetails?.boosterSeats}
                </span>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <button
              type="submit"
              className="summary-button-submit"
              onClick={handleConfirmBooking}
            >
              Confirm Booking {"  "}
            </button>
          </Grid>
        </Grid>
      </Card>
      <ConfirmationModal
        isModalVisible={confirmationModalOpen}
        onClose={() => setConfirmationModalOpen(false)}
      />
    </>
  );
};
export default BookingSummaryComponent;
