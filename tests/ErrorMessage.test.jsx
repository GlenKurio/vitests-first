import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "../src/components/ErrorMessage";

describe("Error message test", () => {
  it("Renders default error text", () => {
    render(<ErrorMessage />);

    expect(screen.getByTestId("message-container")).toHaveTextContent(
      "Something went wrong!"
    );
  });
});
