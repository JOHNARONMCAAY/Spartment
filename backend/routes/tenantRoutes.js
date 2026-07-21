import express from "express";

import {
  createTenant,
  changeTenantPassword,
} from "../controller/tenantController.js";


const router = express.Router();


router.post(
  "/",
  createTenant
);


router.patch(
  "/:id/password",
  changeTenantPassword
);


export default router;