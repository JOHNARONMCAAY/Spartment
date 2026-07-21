import express from "express";
import request from "supertest";

import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";


vi.mock(
 "../service/analyticsService.js",
 ()=>({
   fetchAnalyticsData:
      vi.fn(),
 })
);


import {
 fetchAnalyticsData,
} from "../service/analyticsService.js";


import analyticsRoutes from "../routes/analyticsRoutes.js";


const app =
 express();


app.use(
 express.json()
);


app.use(
 "/analytics",
 analyticsRoutes
);



describe(
"Analytics Controller",
()=>{


beforeEach(()=>{
 vi.clearAllMocks();
});



const mockResponse = {

 totalRevenue:80000,

 totalTenants:2,

 occupancyRate:50,

 paymentStatus:{
  paid:1,
  pending:1,
  overdue:1,
 },

 revenueTrend:[],

 recommendations:[],
};



it(
"should retrieve analytics successfully",
async()=>{


// Arrange

fetchAnalyticsData.mockResolvedValue(
 mockResponse
);


// Act

const response =
 await request(app)
 .get("/analytics");


// Assert

expect(
 response.status
)
.toBe(200);


expect(
 response.body
)
.toEqual(
 mockResponse
);


expect(
 fetchAnalyticsData
)
.toHaveBeenCalledTimes(1);


});



it(
"should return error when analytics retrieval fails",
async()=>{


fetchAnalyticsData.mockRejectedValue(
 new Error(
  "Failed to retrieve analytics information."
 )
);



const response =
 await request(app)
 .get("/analytics");



expect(
 response.status
)
.toBe(500);



expect(
 response.body
)
.toEqual({
 message:
 "Failed to retrieve analytics information."
});


});


});