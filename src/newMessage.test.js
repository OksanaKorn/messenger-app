import React from "react";
import App from "./App";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("The user should be able to write messages in the chat window and see them appear", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("should apear new message on the screen when the button 'enter' is clicked on input", () => {
    let input = wrapper.find("input");
    input.simulate("change", { target: { value: "__some new message__" } });
    let form = wrapper.find("form");
    form.simulate("submit");
    expect(
      wrapper
        .find(".message-text")
        .last()
        .text()
    ).toContain("__some new message__");
  });
});
