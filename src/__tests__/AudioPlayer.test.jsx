import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AudioPlayer from "../components/AudioPlayer";

const mockPlay = vi.fn();
const mockPause = vi.fn();
const mockAddEventListener = vi.fn();
const mockRemoveEventListener = vi.fn();

const mockAudioRef = {
  current: {
    play: mockPlay,
    pause: mockPause,
    addEventListener: mockAddEventListener,
    removeEventListener: mockRemoveEventListener,
    volume: 1,
    currentTime: 0,
    duration: 180, // 3 minutes
  },
};

vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    useRef: () => mockAudioRef,
  };
});

describe("AudioPlayer Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockPlay.mockResolvedValue(undefined);
    mockAddEventListener.mockImplementation((event, callback) => {
      if (event === "loadedmetadata") {
        callback();
      }
    });
  });

  it("renders audio player with initial state", async () => {
    await act(async () => render(<AudioPlayer />));

    expect(screen.getByText("Forest Sound ᨒ ོ")).toBeInTheDocument();
    expect(screen.getByText(/0:00/)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("toggles play/pause when button is clicked", async () => {
    await act(async () => render(<AudioPlayer />));

    const playButton = screen.getByRole("button");

    expect(playButton).toHaveAttribute("aria-label", "Pause");

    await act(async () => fireEvent.click(playButton));
    expect(playButton).toHaveAttribute("aria-label", "Play");

    await act(async () => fireEvent.click(playButton));
    expect(playButton).toHaveAttribute("aria-label", "Pause");
  });

  it("updates volume when volume slider is changed", async () => {
    render(<AudioPlayer />);

    const volumeInput = screen.getByTestId("volume-slider");
    await act(async () => {
      fireEvent.change(volumeInput, { target: { value: "0.5" } });
    });

    expect(mockAudioRef.current.volume).toBe(0.5);
  });

  it("updates progress when seek slider is changed", async () => {
    render(<AudioPlayer />);

    const seekInput = screen.getByTestId("progress-slider");
    await act(async () => {
      fireEvent.change(seekInput, { target: { value: "0.8" } });
    });

    expect(mockAudioRef.current.currentTime).toBe(0.8);
  });

  it("formats time correctly", async () => {
    await act(async () => render(<AudioPlayer />));

    const timeUpdateCallback = mockAddEventListener.mock.calls.find(
      (call) => call[0] === "timeupdate"
    )?.[1];

    if (timeUpdateCallback) {
      await act(async () => {
        mockAudioRef.current.currentTime = 65; // 1:05
        timeUpdateCallback();
      });

      expect(screen.getByText(/1:05/)).toBeInTheDocument();
    }
  });
});
