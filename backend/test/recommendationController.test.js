import express from "express";

import request from "supertest";

import {
  describe,
  it,
  expect,
  vi,
} from "vitest";


import recommendationRoutes
from "../routes/recommendationRoutes.js";


import * as recommendationService
from "../service/recommendationService.js";


vi.mock(
  "../service/recommendationService.js"
);



const app =
  express();


app.use(
  express.json()
);


app.use(
  "/api",
  recommendationRoutes
);



describe(
  "Recommendation Controller and Routes",
  ()=>{


    it(
      "should retrieve recommendations successfully",
      async()=>{


        const mockRecommendations = [

          {
            id:1,

            title:
              "Overdue Payments Detected",

            message:
              "5 tenants have overdue balances.",

            priority:
              "High",

            category:
              "Payment",

          },

        ];



        recommendationService
        .generateRecommendations
        .mockResolvedValue(
          mockRecommendations
        );



        const response =
          await request(app)
          .get(
            "/api/recommendations"
          );



        expect(
          response.status
        )
        .toBe(200);



        expect(
          response.body.success
        )
        .toBe(true);



        expect(
          response.body.data[0].priority
        )
        .toBe(
          "High"
        );


        expect(
          response.body.data[0].category
        )
        .toBe(
          "Payment"
        );


      }
    );



    it(
      "should return unavailable message when no recommendations exist",
      async()=>{


        recommendationService
        .generateRecommendations
        .mockResolvedValue([]);



        const response =
          await request(app)
          .get(
            "/api/recommendations"
          );



        expect(
          response.status
        )
        .toBe(404);



        expect(
          response.body.message
        )
        .toBe(
          "No recommendation information available."
        );


      }
    );



    it(
      "should return server error when service fails",
      async()=>{


        recommendationService
        .generateRecommendations
        .mockRejectedValue(
          new Error()
        );



        const response =
          await request(app)
          .get(
            "/api/recommendations"
          );



        expect(
          response.status
        )
        .toBe(500);



        expect(
          response.body.message
        )
        .toBe(
          "Failed to retrieve recommendations."
        );


      }
    );


  }
);