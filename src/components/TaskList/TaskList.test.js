import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TasksContextProvider } from "../../store/task-context";
import App from "../../App"

describe("Task List Component", () => {


  test("adding task changes the task list ", () => {
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

    //Assert
    dom.getByText("Do homework", { exact: true });
  });

  test("clicking checkbox changes checked value  ", () => {
    //Arrange
      const dom=render(
        <TasksContextProvider>
            <App></App>
        </TasksContextProvider>
      );

    //Act
    const buttonElement = dom.getByRole("button");
    const taskInputElement=dom.container.querySelector('#task-input')
    userEvent.type(taskInputElement,"Do Work");
    userEvent.click(buttonElement);
    const checkbox = dom.getByTestId("checkbox-do-work-0")
    expect(checkbox.checked).toEqual(false)
    userEvent.click(checkbox)

    
    //Assert    
    expect(checkbox.checked).toEqual(true)
  });



});
