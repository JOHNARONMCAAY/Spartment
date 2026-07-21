import {
 render,
 screen,
} from "@testing-library/react";

import {
 describe,
 expect,
 it,
} from "vitest";

import PaymentStatusCard from "../components/PaymentStatusCard";


describe("Payment Status Card",()=>{


it("should display payment status information correctly",()=>{


// Arrange

render(
 <PaymentStatusCard
  paymentStatus={{
    paid:20,
    pending:5,
    overdue:2,
  }}
 />
);


// Assert

expect(
 screen.getByText(
  "Payment Status"
 )
)
.toBeInTheDocument();


expect(
 screen.getByText(
  "Paid: 20"
 )
)
.toBeInTheDocument();


expect(
 screen.getByText(
  "Pending: 5"
 )
)
.toBeInTheDocument();


expect(
 screen.getByText(
  "Overdue: 2"
 )
)
.toBeInTheDocument();


});


});