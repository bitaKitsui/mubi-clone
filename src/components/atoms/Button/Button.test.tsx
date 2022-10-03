import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button Component", () => {
  test("Button が正しく表示されていること", () => {
    const { container } = render(
      <Button
        variant="text"
        color="primary"
        type="button"
        disabled={false}
        size="medium"
      >
        Button Component
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  test("[role='button']が正しく適用されていること", () => {
    render(
      <Button
        variant="text"
        color="primary"
        type="button"
        disabled={false}
        size="medium"
      >
        Button Component
      </Button>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("startIcon が渡ってきたとき、[role='img']が正しく適用されていること", () => {
    render(
      <Button
        variant="text"
        color="primary"
        type="button"
        disabled={false}
        size="medium"
        startIcon="icon"
      >
        Button Component
      </Button>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("endIcon が渡ってきたとき、[role='img']が正しく適用されていること", () => {
    render(
      <Button
        variant="text"
        color="primary"
        type="button"
        disabled={false}
        size="medium"
        endIcon="icon"
      >
        Button Component
      </Button>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("Button をクリックしたとき、 onClick が1度発動すること", async () => {
    const onClickMock = vitest.fn();
    render(
      <Button
        variant="text"
        color="primary"
        type="button"
        disabled={false}
        size="medium"
        onClick={onClickMock}
      >
        Button Component
      </Button>
    );
    await userEvent.click(screen.getByRole("button"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
