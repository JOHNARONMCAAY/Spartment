import { describe, expect, it, vi } from "vitest";

import request from "supertest";

import express from "express";

import router from "../routes/inquiryRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/inquiries", router);

vi.mock("../service/inquiryService.js", () => ({
  createInquiry: vi.fn(),

  fetchInquiries: vi.fn(),

  changeInquiryStatus: vi.fn(),
}));

import {
  createInquiry,
  fetchInquiries,
  changeInquiryStatus,
} from "../service/inquiryService.js";

describe("PATCH /api/inquiries", () => {
  it("should create inquiry successfully", async () => {
    createInquiry.mockResolvedValue({
      id: 1,
      status: "Pending",
    });

    const response = await request(app).post("/api/inquiries").send({
      name: "Juan",
      email: "juan@gmail.com",
      room: "101",
      type: "Inquiry",
      message: "Hello",
    });

    expect(response.status).toBe(201);
  });

  it("should retrieve inquiries", async () => {
    fetchInquiries.mockResolvedValue([]);

    const response = await request(app).get("/api/inquiries");

    expect(response.status).toBe(200);
  });
});
