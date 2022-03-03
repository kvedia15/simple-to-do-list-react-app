import { render, screen } from "@testing-library/react";
import ToDoListHeader from "./ToDoListHeader";
import userEvent from "@testing-library/user-event";
import { TasksContextProvider } from "../../store/task-context";
import App from "../../App"

describe("Header Component", () => {


  test("sub header shows total tasks added", () => {
    //Arrange
      const dom=render(
        <TasksContextProvider>
            <App></App>
        </TasksContextProvider>
      );

    //Act
    const buttonElement = dom.getByRole("button");
    const taskInputElement=dom.container.querySelector('#task-input')
    userEvent.type(taskInputElement,"Do homework");
    userEvent.click(buttonElement);
    userEvent.type(taskInputElement,"Go Shopping");
    userEvent.click(buttonElement);
    userEvent.type(taskInputElement,"Go Shopping with Dad");
    userEvent.click(buttonElement);

    //Assert
    const taskListElement=dom.container.querySelector('#task-list')
    expect(taskListElement.children.length).toBe(3)
    const taskTrackerElement=dom.getByTestId('tasks-tracker')
    expect(taskTrackerElement.innerHTML).toStrictEqual("3 Tasks")
  });

  test("clicking delete button should delete all tasks", () => {
    //Arrange
      const dom=render(
        <TasksContextProvider>
            <App></App>
        </TasksContextProvider>
      );

    //Act
    const EraserElement = screen.getByRole("img");
    userEvent.click(EraserElement);

    //Assert
    const taskListElement=dom.container.querySelector('#task-list')
    expect(taskListElement.children.length).toBe(0)
  });

});
