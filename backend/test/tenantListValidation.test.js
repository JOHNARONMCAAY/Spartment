import {
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";

import { validateTenantName } from "../validation/tenantListValidation.js";

describe("Tenant List Validation", () => {
  beforeEach(() => {});

  it("should validate a valid tenant name successfully", () => {
    // Arrange
    const tenantName = "John Doe";

    // Act & Assert
    expect(() =>
      validateTenantName(tenantName)
    ).not.toThrow();
  });

  it("should throw an error when the tenant name is empty", () => {
    // Arrange
    const tenantName = "";

    // Act & Assert
    expect(() =>
      validateTenantName(tenantName)
    ).toThrow("Tenant name is required.");
  });

  it("should throw an error when the tenant name only contains spaces", () => {
    // Arrange
    const tenantName = "     ";

    // Act & Assert
    expect(() =>
      validateTenantName(tenantName)
    ).toThrow("Tenant name is required.");
  });

  it("should throw an error when the tenant name is null", () => {
    // Arrange
    const tenantName = null;

    // Act & Assert
    expect(() =>
      validateTenantName(tenantName)
    ).toThrow("Tenant name is required.");
  });

  it("should throw an error when the tenant name is not a string", () => {
    // Arrange
    const tenantName = 12345;

    // Act & Assert
    expect(() =>
      validateTenantName(tenantName)
    ).toThrow("Tenant name must be a string.");
  });
});