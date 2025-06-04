import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Navigation } from "../sections/Header";
import { useTranslation } from "react-i18next";

const mockScrollTo = vi.fn();
window.scrollTo = mockScrollTo;

Object.defineProperty(window, "innerWidth", {
  value: 1024,
  writable: true,
});

Object.defineProperty(window, "scrollY", {
  value: 0,
  writable: true,
});

document.getElementsByClassName = vi.fn((className) => {
  const mockElement = {
    offsetTop: 100,
    getBoundingClientRect: () => ({
      top: 100,
      height: 200,
    }),
  };
  return [mockElement];
});

describe("Navigation Component", () => {
  beforeEach(() => {
    mockScrollTo.mockClear();

    document.getElementsByClassName = vi.fn((className) => {
      const mockElement = {
        offsetTop: 100,
        getBoundingClientRect: () => ({
          top: 100,
          height: 200,
        }),
      };
      return [mockElement];
    });
  });

  it("renders all navigation items", () => {
    render(<Navigation customStyle="test-style" />);

    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Experiences")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Educations")).toBeInTheDocument();
    expect(screen.getByText("Studies")).toBeInTheDocument();
  });

  it("applies custom styles correctly", () => {
    render(<Navigation customStyle="test-style" />);
    const navElement = screen.getByRole("list");
    expect(navElement).toHaveClass("test-style");
  });

  it("handles scroll to section when clicking navigation items", () => {
    render(<Navigation customStyle="test-style" />);

    fireEvent.click(screen.getByText("Skills"));

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: "smooth",
    });
  });

  it("updates current section based on scroll position", () => {
    const { rerender } = render(<Navigation customStyle="test-style" />);

    Object.defineProperty(window, "scrollY", {
      value: 150,
      writable: true,
    });

    fireEvent.scroll(window);

    rerender(<Navigation customStyle="test-style" />);

    const activeItem = screen.getByText("Skills");
    expect(activeItem).toHaveClass("hover:text-yellow-300");
  });

  it("handles mobile navigation visibility", () => {
    Object.defineProperty(window, "innerWidth", {
      value: 800,
      writable: true,
    });

    render(
      <Navigation
        isTop
        customStyle="test-style"
        style={{
          position: "fixed",
          zIndex: 20,
        }}
      />
    );

    const navElement = screen.getByRole("list");
    expect(navElement).toHaveStyle({
      position: "fixed",
      zIndex: 20,
    });
  });
});
