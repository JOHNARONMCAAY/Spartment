import express from "express";

import {
  submitInquiry,
  getInquiries,
  updateInquiryStatus,
} from "../controller/inquiryController.js";


const router = express.Router();


router.post(
  "/",
  submitInquiry
);


router.get(
  "/",
  getInquiries
);


router.patch(
  "/:id",
  updateInquiryStatus
);


export default router;