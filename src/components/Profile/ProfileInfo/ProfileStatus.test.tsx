import TestRenderer, { ReactTestRenderer, create } from "react-test-renderer";
import { ProfileStatus } from "./ProfileStatus";

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
