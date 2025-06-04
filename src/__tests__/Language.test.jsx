import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Language } from "../components/Language";
import { useTranslation } from "react-i18next";

// Mock the useTranslation hook
vi.mock("react-i18next", () => ({
  useTranslation: vi.fn().mockImplementation(() => ({
    t: (key) => key,
    i18n: {
      language: "en",
      changeLanguage: vi.fn(),
    },
  })),
}));

describe("Language Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders language toggle button with correct initial text", () => {
    render(<Language />);
    expect(screen.getByText("KO")).toBeInTheDocument();
  });

  it("changes language when clicked", async () => {
    const mockChangeLanguage = vi.fn();

    vi.mocked(useTranslation).mockImplementation(() => ({
      t: (key) => key,
      i18n: {
        language: "en",
        changeLanguage: mockChangeLanguage,
      },
    }));

    render(<Language />);

    const button = screen.getByText("KO");
    await userEvent.click(button);

    expect(mockChangeLanguage).toHaveBeenCalledWith("ko");
  });

  it("shows correct text based on current language", () => {
    vi.mocked(useTranslation).mockImplementation(() => ({
      t: (key) => key,
      i18n: {
        language: "ko",
        changeLanguage: vi.fn(),
      },
    }));

    render(<Language />);
    expect(screen.getByText("EN")).toBeInTheDocument();
  });
});
