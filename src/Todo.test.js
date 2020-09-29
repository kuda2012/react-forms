import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function () {
  render(<Todo />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
it("shows title", function () {
  const { queryByText } = render(<Todo />);
  const title = queryByText("To-do List");
  expect(title).toBeInTheDocument();
});
it("should make a new Todo", () => {
  const { queryByLabelText, queryByText, queryByTestId } = render(<Todo />);
  const TodoListBeforeCreation = queryByTestId("Todo");
  expect(TodoListBeforeCreation).not.toBeInTheDocument();
  const todo = queryByLabelText("Enter To-do Item");
  const btn = queryByText("Add Item");
  fireEvent.change(todo, { target: { value: "Kuda" } });
  fireEvent.click(btn);
  const TodoListAfter = queryByTestId("Todo");
  expect(TodoListAfter).toBeInTheDocument();
  const itemCreated = queryByTestId("Item0");
  expect(itemCreated).toBeInTheDocument();
});

it("should delete a todo", () => {
  const { queryByLabelText, queryByText, queryByTestId } = render(<Todo />);
  const TodoListBeforeCreation = queryByTestId("Todo");
  expect(TodoListBeforeCreation).not.toBeInTheDocument();
  const todo = queryByLabelText("Enter To-do Item");
  const btn = queryByText("Add Item");
  fireEvent.change(todo, { target: { value: "Kuda" } });
  fireEvent.click(btn);
  const TodoListAfter = queryByTestId("Todo");
  expect(TodoListAfter).toBeInTheDocument();
  const itemCreated = queryByTestId("Item0");
  expect(itemCreated).toBeInTheDocument();
  const deleteItem = queryByText("X");
  fireEvent.click(deleteItem);
  expect(TodoListAfter).not.toBeInTheDocument();
  expect(itemCreated).not.toBeInTheDocument();
});
