export function validateTenantName(name) {
  if (name === undefined || name === null) {
    throw new Error("Tenant name is required.");
  }

  if (typeof name !== "string") {
    throw new Error("Tenant name must be a string.");
  }

  if (name.trim() === "") {
    throw new Error("Tenant name is required.");
  }
}