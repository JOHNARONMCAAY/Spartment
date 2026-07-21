import {
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
} from "vitest";

import OccupancyCard from "../components/OccupancyCard";


describe("Occupancy Card", () => {


it("should display occupancy rate correctly",()=>{


// Arrange

render(
 <OccupancyCard
  occupancyRate={95}
 />
);


// Assert

expect(
 screen.getByText(
  "Occupancy Rate"
 )
)
.toBeInTheDocument();


expect(
 screen.getByText("95%")
)
.toBeInTheDocument();


});


});