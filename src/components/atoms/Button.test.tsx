import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("button 要素が正しく描画されていること", () => {
  render(<Button />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
