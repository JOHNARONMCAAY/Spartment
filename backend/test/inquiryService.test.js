import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";


import {
  createInquiry,
  fetchInquiries,
  changeInquiryStatus,
} from "../service/inquiryService.js";


import * as inquiryModel from "../model/inquiryModel.js";


vi.mock(
  "../model/inquiryModel.js",
  () => ({

    createInquiryRecord:
      vi.fn(),

    getInquiryRecords:
      vi.fn(),

    getInquiryRecordById:
      vi.fn(),

    updateInquiryRecord:
      vi.fn(),

  })
);



describe(
  "Inquiry Service",
  () => {


    beforeEach(() => {
      vi.clearAllMocks();
    });



    it(
      "should create inquiry successfully",
      async () => {


        const mockInquiry = {
          id:1,
          name:"Juan",
          email:"juan@gmail.com",
          room:"101",
          type:"Inquiry",
          message:"Interested",
        };


        inquiryModel
        .createInquiryRecord
        .mockReturnValue(
          mockInquiry
        );


        const result =
          await createInquiry(
            mockInquiry
          );


        expect(
          result
        )
        .toEqual(
          mockInquiry
        );


      }
    );



    it(
      "should retrieve inquiries successfully",
      async()=>{


        inquiryModel
        .getInquiryRecords
        .mockReturnValue([]);


        const result =
          await fetchInquiries();


        expect(result)
        .toEqual([]);

      }
    );



    it(
      "should update inquiry status",
      async()=>{


        inquiryModel
        .getInquiryRecordById
        .mockReturnValue({
          id:1
        });


        inquiryModel
        .updateInquiryRecord
        .mockReturnValue({
          id:1,
          status:"Approved"
        });


        const result =
          await changeInquiryStatus(
            1,
            "Approved"
          );


        expect(result.status)
        .toBe(
          "Approved"
        );


      }
    );


  }
);