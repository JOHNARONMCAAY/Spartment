import {
  generateRecommendations,
} from "../service/recommendationService.js";


export async function getRecommendationsController(
  req,
  res
) {

  try {

    const recommendations =
      await generateRecommendations();


    if (
      !recommendations ||
      recommendations.length === 0
    ) {

      return res.status(404).json({

        success: false,

        message:
          "No recommendation information available.",

      });

    }


    return res.status(200).json({

      success: true,

      data: recommendations,

    });


  } catch(error) {

    return res.status(500).json({

      success: false,

      message:
        "Failed to retrieve recommendations.",

    });

  }

}