import TestRenderer, { ReactTestRenderer, create } from "react-test-renderer";
import { ProfileStatus } from "./ProfileStatus";
import * as ReactDOM from "react-dom";

describe("ProfileStatus Component", () => {
  test("status from props should be in the state", () => {
    const testRenderer = TestRenderer.create(
      <ProfileStatus status='it-icuba-artem' updateStatus={() => {}} />
    );
    const tree = create(
      <ProfileStatus status='it-icuba-artem' updateStatus={() => {}} />
    );
    const testInstance = testRenderer.root;
    expect(testInstance.instance.state?.status).toEqual("it-icuba-artem");
    expect(tree).toMatchSnapshot();
  });
  describe("render title", () => {
    it("renders with  title", () => {
      const tree = create(
        <ProfileStatus status='it-icuba-artem' updateStatus={() => {}} />
      );
      expect(tree).toMatchSnapshot();
    });
    it("renders with new props", () => {
      const tree = create(
        <ProfileStatus status='it-icuba-123' updateStatus={() => {}} />
      );
      expect(tree).toMatchSnapshot();
    });
  });
  test("agter creation <span> should be displayed with correct status ", () => {
    const testRenderer = TestRenderer.create(
      <ProfileStatus status='it-icuba-artem' updateStatus={() => {}} />
    );

    const testInstance = testRenderer.root;
    // шляпа
    // const span = testInstance.findByType();
    // console.log("asdfasdf>>>>>>>>>>>>>>>.", span);

    // expect(testInstance.instance.state?.status).toEqual("it-icuba-artem");
  });
});

describe("ProfileStatusTest with render", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    // eslint-disable-next-line testing-library/no-render-in-setup
    ReactDOM.render(
      <ProfileStatus status='123' updateStatus={() => {}} />,
      container
    );
  });
  // afterEach(() => {
  //   document.removeChild(container);
  //   container.remove();
  // });
  it("Renders correctly initial document", () => {
    const span = container.querySelector("span");
    expect(span?.innerHTML).toHaveLength(3);
  });
});
