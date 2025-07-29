import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BoldBtn } from "../components/BoldBtn";

vi.mock("react-syntax-highlighter", () => ({
  Prism: ({ children }) => (
    <div data-testid="syntax-highlighter">{children}</div>
  ),
}));

describe("BoldBtn Component", () => {
  beforeEach(() => vi.clearAllMocks());

  it("renders basic button with title", () => {
    render(<BoldBtn title="Test Button" />);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("renders button with refName and shows tooltip on hover", async () => {
    render(<BoldBtn title="Test Button" refName="Test Ref" />);

    const button = screen.getByText("Test Button");
    await userEvent.hover(button);

    const tooltip = screen.getByText(/Test Ref/);
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveClass("group-hover/ref:opacity-100");
  });

  it("renders button with images and shows them on hover", async () => {
    const imageUrls = ["image1.webp", "image2.webp"];

    render(<BoldBtn title="Test Button" imageUrls={imageUrls} />);

    const button = screen.getByText("Test Button");
    await userEvent.hover(button);

    const images = screen.getAllByAltText("Preview");
    expect(images).toHaveLength(2);
    // The component has fallback logic that converts .webp to .png
    const expectedUrls = ["image1.png", "image2.png"];
    images.forEach((img, index) =>
      expect(img).toHaveAttribute("src", expectedUrls[index])
    );
  });

  it("renders button with video and shows it on hover", async () => {
    const videoUrl = "test-video.mp4";

    render(<BoldBtn title="Test Button" videoUrl={videoUrl} />);

    const button = screen.getByText("Test Button");
    await userEvent.hover(button);

    const video = screen.getByTestId("video-preview");
    expect(video).toBeInTheDocument();
    expect(video.querySelector("source")).toHaveAttribute("src", videoUrl);
  });

  it("renders button with code block and shows it on hover", async () => {
    const codeBlock = 'const test = "Hello World";';

    render(<BoldBtn title="Test Button" codeBlock={codeBlock} />);

    const button = screen.getByText("Test Button");
    await userEvent.hover(button);

    expect(screen.getByText("Code example")).toBeInTheDocument();
    const syntaxHighlighter = screen.getByTestId("syntax-highlighter");
    expect(syntaxHighlighter).toHaveTextContent(codeBlock);
  });

  it("opens link in new tab when clicked", async () => {
    const link = "https://example.com";
    const originalOpen = window.open;
    window.open = vi.fn();

    render(<BoldBtn title="Test Button" link={link} />);

    const button = screen.getByText("Test Button");
    await userEvent.click(button);

    expect(window.open).toHaveBeenCalledWith(link, "_blank");
    window.open = originalOpen;
  });

  it("calls onClick handler when provided", async () => {
    const onClick = vi.fn();

    render(<BoldBtn title="Test Button" onClick={onClick} />);

    const button = screen.getByText("Test Button");
    await userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("applies custom styles correctly", () => {
    const customStyle = "custom-class";
    render(<BoldBtn title="Test Button" customStyle={customStyle} />);

    const button = screen.getByText("Test Button").closest("button");
    expect(button).toHaveClass(customStyle);
  });

  it("applies custom font weight correctly", () => {
    const fontWeight = "medium";
    render(<BoldBtn title="Test Button" fontWeight={fontWeight} />);

    const text = screen.getByText("Test Button");
    expect(text).toHaveClass(`font-${fontWeight}`);
  });

  it("shows tooltip in bottom direction when specified", async () => {
    render(
      <BoldBtn title="Test Button" refName="Test Ref" isBottomDirection />
    );

    const button = screen.getByText("Test Button");
    await userEvent.hover(button);

    const tooltip = screen.getByText(/Test Ref/);
    expect(tooltip).toHaveClass("group-hover/ref:translate-y-5");
  });
});
