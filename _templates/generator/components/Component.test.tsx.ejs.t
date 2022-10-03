---
to: <%= abs_path %>/<%= component_name %>.test.tsx
---
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { <%= component_name %> } from "./";
// ______________________________________________________
//
describe("<%= path %>", () => {
  it("Snap Shot", () => {

  });
});