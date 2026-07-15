# Objective #2: Financial Dashboard and Revenue Analytics

**Owner (Member Name):** Marco A. Labo-Labo

## Objective Title

**Financial Dashboard and Revenue Analytics**

## Objective Description

This objective focuses on implementing financial monitoring features that track apartment revenue, tenant payments, and overall financial performance. The module provides apartment owners with financial insights through revenue analysis, payment monitoring, financial reports, and performance evaluation.

---

# 6-Week Task Breakdown

## Week 1 - Day 1

### Task Description

**Implement Revenue Monitoring**

#### Sub-Tasks

- Create Monthly Revenue, Occupancy, Active Tenants, and Late Payments components
- Create Dashboard Title and Sub-title
- Create Side Bar

#### Deliverables

- KPI Components
- Dashboard Title and Sub-title
- Side Bar

#### Test Suite / PR Acceptance Criteria

- It should display the title, metric value, and subtitle for KPI cards.
- It should render the dashboard title and subtitle.
- It should render the side bar items.

---

## Week 2 - Day 1

### Task Description

**Implement Rent Billing**

#### Sub-Tasks

- Create Rent Billing Button
- Create Billed, Collected, Pending, and Late Payment components

#### Deliverables

- Rent Billing Button
- Billed, Collected, Pending, and Late Payment Cards

#### Test Suite / PR Acceptance Criteria

- It should render the Rent Billing button successfully.
- It should display the Billed, Collected, Pending, and Late payment cards successfully.

---

## Week 2 - Day 2

### Task Description

**Implement Utility Billing**

#### Sub-Tasks

- Create Utility Billing Button
- Create Electricity, Water, and Combined Utilities components

#### Deliverables

- Utility Billing Button
- Electricity, Water, and Combined Utilities Cards

#### Test Suite / PR Acceptance Criteria

- It should render the Utility Billing button successfully.
- It should display the Electricity, Water, and Combined Utilities cards successfully.

---

## Week 3 - Day 1

### Task Description

**Tenant List & Implement Tenant Management Backend**

#### Sub-Tasks

- Create Tenant Header/Sub-Header for the Tenant List on the admin side
- Create Tenant Cards containing the tenant's name, email, room number, and rent price
- Create Add Tenant Button
- Create Add Tenant Module
- Implement Tenant List Model
- Implement Tenant List Service
- Implement Tenant List Unit Tests

#### Deliverables

- Tenant List Header and Sub-Header
- Tenant Cards
- Add Tenant Button
- Add Tenant Module
- Tenant List Model
- Tenant List Service
- Tenant List Service Test

#### Test Suite / PR Acceptance Criteria

- It should render the Tenant List Header and Sub-Header correctly.
- It should display each Tenant Card with the tenant's name, email, room number, and rent price correctly.
- It should render the Add Tenant button correctly.
- It should display the Add Tenant module when the Add Tenant button is clicked.
- It should retrieve all tenant records successfully.
- It should return tenant name, email, room number, and rent amount correctly.
- It should pass all Tenant List Service Vitest unit tests successfully.

---

## Week 3 - Day 2

### Task Description

**Implement Authentication Backend**

#### Sub-Tasks

- Create Authentication Model
- Create Authentication Service
- Create Authentication Validation
- Implement Role-Based Authentication
- Create Authentication Service Unit Tests
- Create Authentication Validation Unit Tests

#### Deliverables

- Authentication Model
- Authentication Service
- Authentication Validation
- Role-Based Authentication
- Authentication Service Test
- Authentication Validation Test

#### Test Suite / PR Acceptance Criteria

- It should validate the user's login credentials successfully.
- It should authenticate the user using the provided email and password.
- It should determine whether the authenticated user is an **Admin** or **Tenant**.
- It should return the authenticated user's information successfully.
- It should reject invalid login credentials successfully.
- It should pass all Authentication Service Vitest unit tests successfully.
- It should pass all Authentication Validation Vitest unit tests successfully.

---

## Week 4 - Day 1

### Task Description

**Integrate Revenue Dashboard with Backend**

#### Sub-Tasks

- Create Revenue Dashboard API
- Connect Revenue Dashboard to Revenue Service
- Display dashboard KPI metrics from the backend
- Display revenue monitoring data from the backend
- Synchronize dashboard metrics
- Handle unavailable dashboard data
- Create Revenue Dashboard Integration Unit Tests

#### Deliverables

- Revenue Dashboard API
- Revenue Dashboard Integration
- Connected KPI Components
- Connected Revenue Dashboard Data
- Dashboard Error Message Handling
- Revenue Dashboard Integration Test

#### Test Suite / PR Acceptance Criteria

- It should retrieve dashboard KPI metrics from the backend successfully.
- It should connect the Revenue Dashboard to the Revenue Service successfully.
- It should display KPI values correctly using backend data.
- It should display revenue monitoring information correctly using backend data.
- It should display an appropriate message when dashboard information is unavailable.
- It should pass all Revenue Dashboard Integration Vitest unit tests successfully.

---

## Week 4 - Day 2

### Task Description

**Integrate Analytics and Reports with Backend**

#### Sub-Tasks

- Create Analytics API
- Connect Analytics Dashboard to Analytics Service
- Display forecast revenue analytics from the backend
- Display moving average analytics from the backend
- Display revenue trend analytics from the backend
- Display occupancy analytics from the backend
- Display payment status analytics from the backend
- Display tenant growth analytics from the backend
- Display smart recommendations from the backend
- Handle unavailable analytics data
- Create Analytics Integration Unit Tests

#### Deliverables

- Analytics API
- Analytics Dashboard Integration
- Connected Forecast Revenue Analytics
- Connected Moving Average Analytics
- Connected Revenue Trend Analytics
- Connected Occupancy Analytics
- Connected Payment Status Analytics
- Connected Tenant Growth Analytics
- Connected Smart Recommendations
- Analytics Error Message Handling
- Analytics Integration Tests

#### Test Suite / PR Acceptance Criteria

- It should retrieve analytics information from the backend successfully.
- It should connect the Analytics Dashboard to the Analytics Service successfully.
- It should calculate and display forecast revenue analytics correctly using backend data.
- It should calculate and display moving average analytics correctly using backend data.
- It should display revenue trend analytics correctly using backend data.
- It should display occupancy analytics correctly using backend data.
- It should display payment status analytics correctly using backend data.
- It should display tenant growth analytics correctly using backend data.
- It should display smart recommendations correctly using backend data.
- It should display an appropriate message when analytics information is unavailable.
- It should pass all Analytics Service Unit Tests and Analytics Integration Tests successfully.

---

## Week 5 - Day 1

### Task Description

**Implement Report Export**

#### Sub-Tasks

- Export Reports to PDF

#### Deliverables

- Report Export Module

#### Test Suite / PR Acceptance Criteria

- It should generate and export revenue and payment reports to PDF format successfully while preserving the report data and layout.

---

## Week 5 - Day 2

### Task Description

**Integrate Financial Components**

#### Sub-Tasks

- Connect Dashboard and Reports
- Connect Analytics Modules

#### Deliverables

- Dashboard Integration
- Analytics Integration

#### Test Suite / PR Acceptance Criteria

- It should display report data accurately on the financial dashboard after report generation.
- It should synchronize analytics results, including revenue loss analysis and payment behavior analysis, with the dashboard and reporting modules successfully.

---

## Week 6 - Day 1

### Task Description

**Finalize Financial Dashboard**

#### Sub-Tasks

- Display Financial Summaries

#### Deliverables

- Financial Summary Dashboard

#### Test Suite / PR Acceptance Criteria

- It should display accurate financial summaries, including total revenue, collected payments, outstanding balances, projected income, and revenue loss based on the latest system records.