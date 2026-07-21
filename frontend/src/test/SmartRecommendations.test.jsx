import {
  describe,
  expect,
  it,
} from "vitest";


import {
  render,
  screen,
} from "@testing-library/react";


import SmartRecommendations
from "../components/SmartRecommendations";



describe(
  "Smart Recommendations",
  () => {


    it(
      "should display recommendations correctly",
      () => {


        const recommendations = [

          {

            id:
              1,

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



        render(

          <SmartRecommendations

            recommendations={
              recommendations
            }

          />

        );



        expect(

          screen.getByText(
            "Smart Recommendations"
          )

        )
        .toBeInTheDocument();



        expect(

          screen.getByText(
            "Overdue Payments Detected"
          )

        )
        .toBeInTheDocument();



        expect(

          screen.getByText(
            "5 tenants have overdue balances."
          )

        )
        .toBeInTheDocument();



        expect(

          screen.getByText(
            /Priority:/
          )

        )
        .toHaveTextContent(
          "High"
        );



        expect(

          screen.getByText(
            /Category:/
          )

        )
        .toHaveTextContent(
          "Payment"
        );


      }
    );



    it(
      "should display multiple recommendations correctly",
      () => {


        const recommendations = [

          {

            id:
              1,

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

            id:
              2,

            title:
              "Improve Collection Rate",

            message:
              "Send payment reminders to pending accounts.",

            priority:
              "Medium",

            category:
              "Revenue",

          },

        ];



        render(

          <SmartRecommendations

            recommendations={
              recommendations
            }

          />

        );



        expect(

          screen.getByText(
            "Overdue Payments Detected"
          )

        )
        .toBeInTheDocument();



        expect(

          screen.getByText(
            "Improve Collection Rate"
          )

        )
        .toBeInTheDocument();



        expect(

          screen.getByText(
            "Send payment reminders to pending accounts."
          )

        )
        .toBeInTheDocument();


      }
    );



    it(
      "should display unavailable message when recommendations are empty",
      () => {


        render(

          <SmartRecommendations

            recommendations={
              []
            }

          />

        );



        expect(

          screen.getByText(
            "No recommendations available."
          )

        )
        .toBeInTheDocument();


      }
    );



    it(
      "should display recommendation priority and category",
      () => {


        const recommendations = [

          {

            id:
              1,

            title:
              "Monitor Occupancy",

            message:
              "Review vacant rooms to improve occupancy.",

            priority:
              "Low",

            category:
              "Occupancy",

          },

        ];



        render(

          <SmartRecommendations

            recommendations={
              recommendations
            }

          />

        );



        expect(

          screen.getByText(
            /Priority:/
          )

        )
        .toHaveTextContent(
          "Low"
        );



        expect(

          screen.getByText(
            /Category:/
          )

        )
        .toHaveTextContent(
          "Occupancy"
        );


      }
    );


  }
);