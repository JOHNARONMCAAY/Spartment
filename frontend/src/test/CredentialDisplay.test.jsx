import {
  describe,
  it,
  expect,
} from "vitest";


import {
  render,
  screen,
} from "@testing-library/react";


import CredentialDisplay
from "../components/CredentialDisplay";



describe(
  "Credential Display Component",
  () => {


    it(
      "should display tenant credentials",
      () => {


        render(

          <CredentialDisplay

            credentials={{

              email:
              "juan101@email.com",


              password:
              "Tenant123"

            }}

          />

        );



        expect(

          screen.getByText(
            "juan101@email.com"
          )

        )
        .toBeInTheDocument();




        expect(

          screen.getByText(
            "Tenant123"
          )

        )
        .toBeInTheDocument();


      }

    );


  }

);