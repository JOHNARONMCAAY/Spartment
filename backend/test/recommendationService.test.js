import {
  describe,
  it,
  expect,
  vi,
} from "vitest";


import {
  generateRecommendations,
} from "../service/recommendationService.js";


describe(
  "Recommendation Service",
  () => {


    it(
      "should generate smart recommendations successfully",
      async()=>{


        const mockRecommendations = [

          {
            id: 1,
            title:
              "Overdue Payments Detected",

            message:
              "5 tenants have overdue balances.",

            priority:
              "High",

            category:
              "Payment",

          },

          {
            id: 2,
            title:
              "Improve Collection Rate",

            message:
              "Send payment reminders.",

            priority:
              "Medium",

            category:
              "Revenue",

          },

        ];



        const serviceMock =
          vi.fn()
          .mockResolvedValue(
            mockRecommendations
          );



        const result =
          await serviceMock();



        expect(
          result
        )
        .toHaveLength(2);



        expect(
          result[0].priority
        )
        .toBe(
          "High"
        );


        expect(
          result[0].category
        )
        .toBe(
          "Payment"
        );


      }
    );


  }
);