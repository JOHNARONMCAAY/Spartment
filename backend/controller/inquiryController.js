import {
  createInquiry,
  fetchInquiries,
  changeInquiryStatus,
} from "../service/inquiryService.js";


export const submitInquiry = async (
  req,
  res
) => {

  try {

    const inquiry =
      await createInquiry(
        req.body
      );


    res.status(201).json({
      message:
        "Inquiry submitted successfully",
      data:
        inquiry,
    });


  } catch (error) {

    res.status(400).json({
      message:
        error.message,
    });

  }

};



export const getInquiries = async (
  req,
  res
) => {

  try {

    const inquiries =
      await fetchInquiries();


    res.status(200).json(
      inquiries
    );


  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }

};



export const updateInquiryStatus = async (
  req,
  res
) => {

  try {

    const updatedInquiry =
      await changeInquiryStatus(
        req.params.id,
        req.body.status
      );


    res.status(200).json({
      message:
        "Inquiry updated successfully",

      data:
        updatedInquiry,
    });


  } catch (error) {

    res.status(400).json({
      message:
        error.message,
    });

  }

};