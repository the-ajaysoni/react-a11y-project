# Incubyte React Accessibility & String Calculator Project by Ajay Soni

## Overview

This project implements the **String Calculator** functionality while resolving multiple **accessibility (a11y)** issues in the provided React UI.  
The application now provides an inclusive experience for all users — including those relying on screen readers or keyboard navigation.

The solution follows **Test-Driven Development (TDD)** best practices, with incremental commits demonstrating the step-by-step development and testing process.

---

## Features Implemented

### Functional Features

- Added complete **String Calculator logic** supporting:
  - Comma-separated inputs (`1,2,3`)
  - Newline-separated inputs (`1\n2\n3`)
  - Mixed separators (`1\n2,3`)
  - Trims extra spaces automatically
  - Handles empty input gracefully (`returns 0`)
  - Throws meaningful error messages for negative numbers
  - Handles invalid inputs robustly

### Accessibility Enhancements

- Added descriptive **ARIA attributes** (`aria-label`, `aria-describedby`, `aria-live`)
- Used **semantic HTML elements** (`<main>`, `<label>`, `<button>` instead of `<div>`)
- Ensured full **keyboard navigation support**
- Provided **clear error and success feedback** using `role="alert"` and `aria-live="polite"`
- Improved **color contrast and focus visibility**
- Added `alt` text for images for screen reader accessibility

---

## Tech Stack

- **React** (Functional Components + Hooks)
- **TypeScript**
- **Vite** (for development and testing setup)
- **Vitest** (for unit testing)
- **CSS** (for styling and accessibility-friendly visuals)

---

## Project Structure

src/

- App.tsx ###Main accessible UI
- app.css ###Improved accessible styling
- stringCalculator.ts ###Calculator logic implementation
- stringCalculator.test.ts ###TDD unit tests with Vitest

---

## Steps to Run Locally

### 1. Clone the Repository

```bash
  git clone https://github.com/the-ajaysoni/react-a11y-project.git
  cd react-a11y-project
```

### 2. Install Dependencies

```bash
  npm install
```

### 3. Run the Application

```bash
  npm run dev
```

This will start the application at [**http://localhost:5173**](http://localhost:5173) (default Vite port).

### 4. Run the Tests

```bash
  npm test
```

All tests are implemented using **TDD principles** and can be found in `stringCalculator.test.ts`.

---

## TDD Workflow

1. **Write Tests First**: Defined expected behavior based on the problem statement.
2. **Run Tests → Fail**: Verified that unimplemented functions fail correctly.
3. **Implement Logic**: Wrote code to make failing tests pass.
4. **Refactor & Commit**: Cleaned up logic, improved readability, ensured accessibility compliance.

Each commit reflects a clear evolution — from red → green → refactor.

---

## Accessibility Verification

- Verified screen-reader output via **NVDA and VoiceOver**
- Ensured all interactive elements are **focusable via keyboard (Tab/Shift+Tab)**
- Used **Lighthouse** and **axe DevTools** for accessibility auditing
- Checked **contrast ratio compliance (WCAG 2.1 AA)**

---

## Deployment (Optional Bonus)

**Live Demo:** [https://string-calculator-by-ajay-soni.vercel.app/](https://string-calculator-by-ajay-soni.vercel.app/)

---

## Author

**Name:** Ajay Soni

**Role:** Candidate for Software Craftsperson – React Accessibility (3–5 Years)

**Company:** Incubyte (Assignment Submission)
