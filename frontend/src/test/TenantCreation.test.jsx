import {
  describe,
  it,
  expect,
  vi,
} from "vitest";


import {
  render,
  screen,
} from "@testing-library/react";


import TenantCreation
from "../pages/TenantCreation";


import useTenantCreation
from "../hooks/useTenantCreation";



vi.mock(
  "../hooks/useTenantCreation",
  () => ({

    default:
      vi.fn(),

  })
);



describe(
  "Tenant Creation Page",
  () => {



    it(
      "should display tenant credentials after creation",
      () => {


        useTenantCreation.mockReturnValue({

          createTenant:
            vi.fn(),


          credentials:
            null,


          tenant: {

            email:
              "juan101@email.com",


            temporaryPassword:
              "Tenant123",

          },


          loading:
            false,


          error:
            null,


        });



        render(
          <TenantCreation />
        );



        expect(

          screen.getByText(
            "Tenant Creation"
          )

        )
        .toBeInTheDocument();




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





    it(
      "should display loading state",
      () => {


        useTenantCreation.mockReturnValue({

          createTenant:
            vi.fn(),


          credentials:
            null,


          tenant:
            null,


          loading:
            true,


          error:
            null,


        });



        render(
          <TenantCreation />
        );



        expect(

          screen.getByText(
            /loading/i
          )

        )
        .toBeInTheDocument();



      }

    );






    it(
      "should display error message when tenant creation fails",
      () => {


        useTenantCreation.mockReturnValue({

          createTenant:
            vi.fn(),


          credentials:
            null,


          tenant:
            null,


          loading:
            false,


          error:
            "Failed to create tenant.",


        });



        render(
          <TenantCreation />
        );



        expect(

          screen.getByText(
            "Failed to create tenant."
          )

        )
        .toBeInTheDocument();



      }

    );



  }

);