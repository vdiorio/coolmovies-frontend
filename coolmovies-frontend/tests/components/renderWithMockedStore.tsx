import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";

const mockStore = (initialState: any): any => {
  return {
    getState: () => initialState,
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };
};

const renderWithMockedStore = (
  ui: React.ReactElement,
  initialState: any,
  options?: RenderOptions
) => {
  const store = mockStore(initialState);

  return render(<Provider store={store}>{ui}</Provider>, options);
};

export default renderWithMockedStore;
