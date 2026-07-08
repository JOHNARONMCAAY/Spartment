import {
  getTenantList,
  searchTenantByName,
} from "../model/tenantListModel.js";

import { validateTenantName } from "../validation/tenantListValidation.js";

export async function fetchTenantList() {
  try {
    const tenants = await getTenantList();

    return tenants;
  } catch (error) {
    throw new Error("Failed to retrieve tenant list.");
  }
}

export async function findTenantByName(name) {
  try {
    validateTenantName(name);

    const tenant = await searchTenantByName(name);

    return tenant;
  } catch (error) {
    throw new Error(error.message);
  }
}