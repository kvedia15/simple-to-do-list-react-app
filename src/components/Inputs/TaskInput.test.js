import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TasksContextProvider } from "../../store/task-context";
import App from "../../App"

describe("Task List Component", () => {


  test("adding task resets the input box ", () => {
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
    const taskInputElementAfterEnterTask=dom.container.querySelector('#task-input')


    //Assert
    expect(taskInputElementAfterEnterTask.innerHTML).toStrictEqual("")
  });

 


});