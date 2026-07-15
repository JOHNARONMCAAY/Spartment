import { fetchBillingInformation } from "../service/billingService.js";

export async function getBilling(
  req,
  res
) {
  try {
    const billing =
      await fetchBillingInformation();

    res.status(200).json(billing);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}