import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Stacks } from "../components/Stacks";

vi.mock("react-circular-progressbar", () => ({
  CircularProgressbar: ({ value }) => (
    <div data-testid="circular-progressbar">{value}%</div>
  ),
  buildStyles: () => ({}),
}));

describe("Stacks Component", () => {
  beforeEach(() => vi.clearAllMocks());

  it("renders all stack categories", () => {
    render(<Stacks />);

    // Check if all categories are rendered
    expect(screen.getByText("Client")).toBeInTheDocument();
    expect(screen.getByText("Server")).toBeInTheDocument();
    expect(screen.getByText("Both")).toBeInTheDocument();
  });

  it("shows usage percentage when hovering over stack items", async () => {
    render(<Stacks />);

    // Test React (100% usage)
    const reactItem = screen.getByAltText("React");
    const reactContainer = reactItem.closest('div[class*="relative"]');
    await userEvent.hover(reactContainer);
    const reactProgressBar = within(reactContainer).getByTestId(
      "circular-progressbar"
    );
    expect(reactProgressBar).toHaveTextContent("100%");
    await userEvent.unhover(reactContainer);

    // Test Three JS (20% usage)
    const threeJSItem = screen.getByAltText("Three JS");
    const threeJSContainer = threeJSItem.closest('div[class*="relative"]');
    await userEvent.hover(threeJSContainer);
    const threeJSProgressBar = within(threeJSContainer).getByTestId(
      "circular-progressbar"
    );
    expect(threeJSProgressBar).toHaveTextContent("20%");
    await userEvent.unhover(threeJSContainer);

    // Test Node JS (40% usage)
    const nodeJSItem = screen.getByAltText("Node JS");
    const nodeJSContainer = nodeJSItem.closest('div[class*="relative"]');
    await userEvent.hover(nodeJSContainer);
    const nodeJSProgressBar = within(nodeJSContainer).getByTestId(
      "circular-progressbar"
    );
    expect(nodeJSProgressBar).toHaveTextContent("40%");
  });
});
