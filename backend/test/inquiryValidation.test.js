import {
  describe,
  expect,
  it,
} from "vitest";

import {
  validateInquiry,
} from "../validation/inquiryValidation.js";


describe(
  "Inquiry Validation",
  () => {


    it(
      "should validate complete inquiry information",
      () => {

        const data = {
          name:
            "Juan Dela Cruz",

          email:
            "juan@gmail.com",

          room:
            "101",

          type:
            "Inquiry",

          message:
            "Interested in room",
        };


        const result =
          validateInquiry(data);


        expect(result)
          .toBe(true);

      }
    );



    it.each([
      [
        {
          email:
            "test@gmail.com",
          room:
            "101",
          type:
            "Inquiry",
          message:
            "Hello",
        },
        "Name is required",
      ],

      [
        {
          name:
            "Juan",
          room:
            "101",
          type:
            "Inquiry",
          message:
            "Hello",
        },
        "Email is required",
      ],


      [
        {
          name:
            "Juan",
          email:
            "juan@gmail.com",
          type:
            "Inquiry",
          message:
            "Hello",
        },
        "Room is required",
      ],

    ])
    (
      "should throw validation error",
      (
        data,
        errorMessage
      ) => {


        expect(
          () =>
            validateInquiry(data)
        )
        .toThrow(
          errorMessage
        );


      }
    );


  }
);