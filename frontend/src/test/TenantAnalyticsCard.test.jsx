import {
 render,
 screen,
} from "@testing-library/react";

import {
 describe,
 expect,
 it,
} from "vitest";


import TenantAnalyticsCard from "../components/TenantAnalyticsCard";


describe("Tenant Analytics Card",()=>{


it("should display tenant count correctly",()=>{


// Arrange

render(
 <TenantAnalyticsCard
  totalTenants={32}
 />
);


// Assert

expect(
 screen.getByText(
  "Active Tenants"
 )
)
.toBeInTheDocument();


expect(
 screen.getByText("32")
)
.toBeInTheDocument();


});


});