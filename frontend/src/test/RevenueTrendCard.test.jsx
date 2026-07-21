import {
 render,
 screen,
} from "@testing-library/react";

import {
 describe,
 expect,
 it,
} from "vitest";


import RevenueTrendCard from "../components/RevenueTrendCard";


describe("Revenue Trend Card",()=>{


it("should display revenue trend data correctly",()=>{


// Arrange

render(
 <RevenueTrendCard
  revenueTrend={[
    {
      month:"January",
      amount:50000,
    },
    {
      month:"February",
      amount:60000,
    },
  ]}
 />
);


// Assert

expect(
 screen.getByText(
  "Revenue Trend"
 )
)
.toBeInTheDocument();


expect(
 screen.getByText(
  "January: ₱50000"
 )
)
.toBeInTheDocument();


expect(
 screen.getByText(
  "February: ₱60000"
 )
)
.toBeInTheDocument();


});


});