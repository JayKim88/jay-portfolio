import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import App from "../App";

vi.mock("../hooks/useScrollY", () => ({
  useScrollY: () => window.scrollY,
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      language: "en",
    },
  }),
}));

describe("Scroll Behavior", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    const mockSections = {
      skills: {
        offsetTop: 200,
        offsetHeight: 400,
        getBoundingClientRect: () => ({
          top: 200,
          height: 400,
        }),
      },
      experiences: {
        offsetTop: 400,
        offsetHeight: 400,
        getBoundingClientRect: () => ({
          top: 400,
          height: 400,
        }),
      },
      projects: {
        offsetTop: 600,
        offsetHeight: 400,
        getBoundingClientRect: () => ({
          top: 600,
          height: 400,
        }),
      },
      educations: {
        offsetTop: 800,
        offsetHeight: 400,
        getBoundingClientRect: () => ({
          top: 800,
          height: 400,
        }),
      },
      studies: {
        offsetTop: 1000,
        offsetHeight: 400,
        getBoundingClientRect: () => ({
          top: 1000,
          height: 400,
        }),
      },
    };

    // Mock getElementsByClassName to return mock sections
    document.getElementsByClassName = vi.fn((className) => {
      return [
        mockSections[className] || {
          offsetTop: 0,
          offsetHeight: 0,
          getBoundingClientRect: () => ({
            top: 0,
            height: 0,
          }),
        },
      ];
    });

    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
    });

    Object.defineProperty(window, "innerHeight", {
      value: 800,
      writable: true,
    });

    window.scrollTo = vi.fn();
  });

  it("scrolls to top when clicking header title", async () => {
    render(<App />);

    const headerTitle = screen.getByRole("heading", { name: /yongjae kim/i });
    await userEvent.click(headerTitle);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("scrolls to correct section when clicking navigation items", async () => {
    render(<App />);

    const navigationItems = [
      { title: "Skills", expectedOffset: 80 },
      { title: "Experiences", expectedOffset: 280 },
      { title: "Projects", expectedOffset: 480 },
      { title: "Educations", expectedOffset: 620 },
      { title: "Studies", expectedOffset: 880 },
    ];

    const navigation = screen.getByTestId("navigation");

    for (const { title, expectedOffset } of navigationItems) {
      const navItem = within(navigation).getByText(title);
      await userEvent.click(navItem);

      expect(window.scrollTo).toHaveBeenCalledWith({
        top: expectedOffset,
        behavior: "smooth",
      });

      window.scrollTo.mockClear();
    }
  });
});
