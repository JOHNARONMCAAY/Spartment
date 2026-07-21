import {
  describe,
  it,
  expect,
  vi,
} from "vitest";

import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";

import CustomerRequests from "../pages/CustomerRequests";

import useCustomerRequests from "../hooks/useCustomerRequests";


vi.mock(
  "../hooks/useCustomerRequests",
  () => ({
    default: vi.fn(),
  })
);


describe(
  "Customer Requests Page",
  () => {

    it(
      "should display customer requests successfully",
      () => {

        useCustomerRequests.mockReturnValue({

          requests: [

            {
              id: 1,
              guestName:
                "Juan Dela Cruz",
              email:
                "juan@gmail.com",
              requestedRoom:
                "101",
              status:
                "Pending",
            },

          ],

          loading: false,

          error: null,

          approve:
            vi.fn(),

          reject:
            vi.fn(),

        });


        render(
          <CustomerRequests />
        );


        expect(
          screen.getByText(
            "Customer Requests"
          )
        )
        .toBeInTheDocument();


        expect(
          screen.getByText(
            "Juan Dela Cruz"
          )
        )
        .toBeInTheDocument();


      }
    );



    it(
      "should approve request successfully",
      () => {

        const approve =
          vi.fn();


        useCustomerRequests.mockReturnValue({

          requests: [

            {
              id: 1,
              guestName:
                "Juan Dela Cruz",
              status:
                "Pending",
            },

          ],

          loading: false,

          error: null,

          approve,

          reject:
            vi.fn(),

        });


        render(
          <CustomerRequests />
        );


        const button =
          screen.getByText(
            /approve/i
          );


        fireEvent.click(
          button
        );


        expect(
          approve
        )
        .toHaveBeenCalledWith(1);

      }
    );



    it(
      "should reject request successfully",
      () => {

        const reject =
          vi.fn();


        useCustomerRequests.mockReturnValue({

          requests: [

            {
              id: 1,
              guestName:
                "Juan Dela Cruz",
              status:
                "Pending",
            },

          ],

          loading: false,

          error: null,

          approve:
            vi.fn(),

          reject,

        });


        render(
          <CustomerRequests />
        );


        const button =
          screen.getByText(
            /reject/i
          );


        fireEvent.click(
          button
        );


        expect(
          reject
        )
        .toHaveBeenCalledWith(1);

      }
    );

  }
);