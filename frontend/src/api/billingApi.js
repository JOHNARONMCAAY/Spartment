import { fetchBillingInformation } from "../../../backend/service/billingService.js";

export async function getBillingInformation() {
  try {
    const billing =
      await fetchBillingInformation();

    return billing;
  } catch (error) {
    throw new Error(error.message);
  }
}