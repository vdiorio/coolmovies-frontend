import "@testing-library/jest-dom";
import React from "react";
import { useRouter } from "next/router";

jest.mock("next/image", () => {
  // eslint-disable-next-line react/display-name
  return ({ src, ...props }: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img src={src} {...props} />;
  };
});

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks(); // Reset mocks
  (useRouter as jest.Mock).mockImplementation(() => ({
    push: jest.fn(),
    query: {},
  }));
});
