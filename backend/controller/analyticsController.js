import {
  fetchAnalyticsData,
} from "../service/analyticsService.js";


export async function getAnalytics(
  req,
  res
) {

  try {

    const analytics =
      await fetchAnalyticsData();


    res.status(200).json(
      analytics
    );


  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }

}