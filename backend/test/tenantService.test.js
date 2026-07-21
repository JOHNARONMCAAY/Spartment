import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  fetchTenantInformation,
  findTenantByName,
} from "../service/tenantService.js";

import { getTenants } from "../model/tenantModel.js";

vi.mock("../model/tenantModel.js", () => ({
  getTenants: vi.fn(),
}));

describe("Tenant Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should retrieve tenant information successfully", async () => {
    getTenants.mockResolvedValue([
      {
        id: 1,
        name: "Juan Dela Cruz",
        email: "juan@gmail.com",
        roomNumber: "101",
      },
    ]);

    const result = await fetchTenantInformation(1);

    expect(result.name).toBe("Juan Dela Cruz");
  });

  it("should search tenant by name successfully", async () => {
    getTenants.mockResolvedValue([
      {
        id: 1,
        name: "Juan Dela Cruz",
      },
    ]);

    const result = await findTenantByName("Juan Dela Cruz");

    expect(result.id).toBe(1);
  });

  it("should throw error when tenant cannot be found", async () => {
    getTenants.mockResolvedValue([]);

    await expect(findTenantByName("Pedro")).rejects.toThrow(
      "Tenant not found.",
    );
  });
});
