import { getTenants } from "../model/tenantModel.js";

export async function fetchTenantInformation(id) {
  const tenants = await getTenants();

  const tenant = tenants.find((item) => item.id === id);

  if (!tenant) {
    throw new Error("Tenant not found.");
  }

  return tenant;
}

export async function findTenantByName(name) {
  const tenants = await getTenants();

  const tenant = tenants.find(
    (item) => item.name.toLowerCase() === name.toLowerCase(),
  );

  if (!tenant) {
    throw new Error("Tenant not found.");
  }

  return tenant;
}
