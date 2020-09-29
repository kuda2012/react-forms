import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});
it("shows title", function () {
  const { queryByText } = render(<BoxList />);
  const title = queryByText("Box List");
  expect(title).toBeInTheDocument();
});
it("should make a new box", () => {
  const { queryByLabelText, queryByText, queryByTestId } = render(<BoxList />);
  const BoxListBefore = queryByTestId("Box1");
  expect(BoxListBefore).not.toBeInTheDocument();
  const boxBeforeCreation = queryByTestId("Box1");
  expect(boxBeforeCreation).not.toBeInTheDocument();
  const width = queryByLabelText("Width");
  const height = queryByLabelText("Height");
  const color = queryByLabelText("Color");
  const btn = queryByText("Create Box");
  fireEvent.change(width, { target: { value: "300px" } });
  fireEvent.change(height, { target: { value: "300px" } });
  fireEvent.change(color, { target: { value: "blue" } });
  fireEvent.click(btn);
  const BoxListAfter = queryByTestId("BoxList");
  expect(BoxListAfter).toBeInTheDocument();
  const boxCreated = queryByTestId("Box0");
  expect(boxCreated).toBeInTheDocument();
});

it("should delete a box", () => {
  const { queryByLabelText, queryByText, queryByTestId } = render(<BoxList />);
  const BoxListBefore = queryByTestId("Box1");
  expect(BoxListBefore).not.toBeInTheDocument();
  const boxBeforeCreation = queryByTestId("Box1");
  expect(boxBeforeCreation).not.toBeInTheDocument();
  const width = queryByLabelText("Width");
  const height = queryByLabelText("Height");
  const color = queryByLabelText("Color");
  const btn = queryByText("Create Box");
  fireEvent.change(width, { target: { value: "300px" } });
  fireEvent.change(height, { target: { value: "300px" } });
  fireEvent.change(color, { target: { value: "blue" } });
  fireEvent.click(btn);
  const BoxListAfter = queryByTestId("BoxList");
  expect(BoxListAfter).toBeInTheDocument();
  const boxCreated = queryByTestId("Box0");
  expect(boxCreated).toBeInTheDocument();
  const deleteBox = queryByText("X");
  fireEvent.click(deleteBox);
  expect(BoxListAfter).not.toBeInTheDocument();
  expect(boxCreated).not.toBeInTheDocument();
});
