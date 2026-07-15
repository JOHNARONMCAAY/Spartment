import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

vi.mock("../service/billingService.js", () => ({
  fetchBillingInformation: vi.fn(),
}));

import {
  fetchBillingInformation,
} from "../service/billingService.js";

import {
  getBilling,
} from "../controller/billingController.js";

describe("Billing Controller", () => {
  let req;
  let res;

  beforeEach(() => {
    vi.clearAllMocks();

    req = {};

    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
  });

  it("should return billing information successfully", async () => {
    // Arrange
    const billing = {
      summary: {
        electricity: 850,
        water: 220,
        totalUtilities: 1070,
      },

      rentStatements: [
        {
          period: "May 2026",
          dueDate: "2026-05-15",
          amount: 6500,
          status: "Paid",
        },
      ],

      utilityStatements: [
        {
          period: "May 2026",
          dueDate: "2026-05-20",
          electricity: 850,
          water: 220,
          total: 1070,
          status: "Paid",
        },
      ],
    };

    fetchBillingInformation.mockResolvedValue(
      billing
    );

    // Act
    await getBilling(req, res);

    // Assert
    expect(
      fetchBillingInformation
    ).toHaveBeenCalledTimes(1);

    expect(
      res.status
    ).toHaveBeenCalledWith(200);

    expect(
      res.json
    ).toHaveBeenCalledWith(billing);
  });

  it("should return an internal server error when billing retrieval fails", async () => {
    // Arrange
    fetchBillingInformation.mockRejectedValue(
      new Error(
        "Failed to retrieve billing information."
      )
    );

    // Act
    await getBilling(req, res);

    // Assert
    expect(
      res.status
    ).toHaveBeenCalledWith(500);

    expect(
      res.json
    ).toHaveBeenCalledWith({
      message:
        "Failed to retrieve billing information.",
    });
  });
});