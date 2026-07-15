import { getBillingInformation } from "../model/billingModel.js";

export async function fetchBillingInformation() {
  try {
    const billing =
      await getBillingInformation();

    return billing;
  } catch (error) {
    throw new Error(
      "Failed to retrieve billing information."
    );
  }
}