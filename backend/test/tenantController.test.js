import {
  describe,
  expect,
  it,
  vi,
} from "vitest";

import request from "supertest";
import express from "express";

import router from "../routes/tenantRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/tenants", router);

vi.mock("../service/tenantService.js", () => ({
  createTenantAccount: vi.fn(),
  updateTenantPassword: vi.fn(),
}));

import {
  createTenantAccount,
  updateTenantPassword,
} from "../service/tenantService.js";

describe("Tenant Controller API", () => {
  it("should create tenant account successfully", async () => {
    createTenantAccount.mockResolvedValue({
      id: 1,
      fullName: "Juan Dela Cruz",
      email: "juan@gmail.com",
      roomNumber: "101",
    });

    const response = await request(app)
      .post("/api/tenants")
      .send({
        fullName: "Juan Dela Cruz",
        email: "juan@gmail.com",
        roomNumber: "101",
        password: "123456",
      });

    expect(response.status)
      .toBe(201);

    expect(response.body.message)
      .toBe(
        "Tenant created successfully"
      );

    expect(response.body.data.email)
      .toBe(
        "juan@gmail.com"
      );
  });


  it("should update tenant password successfully", async () => {
    updateTenantPassword.mockResolvedValue({
      id: 1,
      password: "newPassword",
    });

    const response = await request(app)
      .patch("/api/tenants/1/password")
      .send({
        password: "newPassword",
      });

    expect(response.status)
      .toBe(200);

    expect(response.body.message)
      .toBe(
        "Password updated successfully"
      );
  });


  it("should return error when tenant creation fails", async () => {
    createTenantAccount.mockRejectedValue(
      new Error(
        "Tenant already exists"
      )
    );

    const response = await request(app)
      .post("/api/tenants")
      .send({
        fullName: "Juan Dela Cruz",
        email: "juan@gmail.com",
      });

    expect(response.status)
      .toBe(400);

    expect(response.body.message)
      .toBe(
        "Tenant already exists"
      );
  });
});