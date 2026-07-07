import { getTenantInformation } from "../model/tenantModel.js";

export async function fetchTenantInformation() {
  try {
    const tenantInformation = await getTenantInformation();

    return tenantInformation;
  } catch (error) {
    throw new Error("Failed to retrieve tenant information.");
  }
}