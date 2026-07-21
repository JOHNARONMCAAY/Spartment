import {
  createInquiryRecord,
  getInquiryRecords,
  getInquiryRecordById,
  updateInquiryRecord,
} from "../model/inquiryModel.js";


export const createInquiry = async (
  data
) => {

  if (
    !data.name ||
    !data.email ||
    !data.room ||
    !data.type
  ) {

    throw new Error(
      "Required inquiry information is missing"
    );

  }


  return createInquiryRecord(
    data
  );

};



export const fetchInquiries = async () => {

  return getInquiryRecords();

};



export const changeInquiryStatus = async (
  id,
  status
) => {

  const inquiry =
    getInquiryRecordById(id);


  if (!inquiry) {

    throw new Error(
      "Inquiry not found"
    );

  }


  if (
    ![
      "Pending",
      "Approved",
      "Rejected",
    ].includes(status)
  ) {

    throw new Error(
      "Invalid inquiry status"
    );

  }


  return updateInquiryRecord(
    id,
    {
      status,
    }
  );

};