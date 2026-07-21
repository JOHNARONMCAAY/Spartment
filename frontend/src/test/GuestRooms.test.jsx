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

import GuestRooms from "../pages/GuestRooms";

import useRooms from "../hooks/useRooms";


vi.mock(
  "../hooks/useRooms",
  () => ({
    default: vi.fn(),
  })
);


describe(
  "Guest Rooms Page",
  () => {

    it(
      "should display available rooms successfully",
      () => {

        useRooms.mockReturnValue({

          rooms: [

            {
              roomId: 1,
              roomNumber: "101",
              status: "Vacant",
              price: 5000,
            },

          ],

          loading: false,

          error: null,

        });


        render(
          <GuestRooms />
        );


        expect(
          screen.getByText(
            "Available Rooms"
          )
        )
        .toBeInTheDocument();


        expect(
          screen.getByText(
            "101"
          )
        )
        .toBeInTheDocument();


        expect(
          screen.getByText(
            "Vacant"
          )
        )
        .toBeInTheDocument();

      }
    );



    it(
      "should display loading state",
      () => {

        useRooms.mockReturnValue({

          rooms: [],

          loading: true,

          error: null,

        });


        render(
          <GuestRooms />
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
      "should display error message when rooms fail",
      () => {

        useRooms.mockReturnValue({

          rooms: [],

          loading: false,

          error:
            "Failed to retrieve rooms.",

        });


        render(
          <GuestRooms />
        );


        expect(
          screen.getByText(
            "Failed to retrieve rooms."
          )
        )
        .toBeInTheDocument();

      }
    );

  }
);