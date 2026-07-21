import {
  Router,
} from "express";


import {
  getRecommendationsController,
} from "../controller/recommendationController.js";


const router =
  Router();


router.get(
  "/recommendations",
  getRecommendationsController
);


export default router;