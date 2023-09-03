import React from "react";
import { render } from "@testing-library/react";
import Gallery from "./Gallery";

describe("Gallery", () => {
//   beforeEach(() => {
    // Mocking image data for testing
    const mockImages = [
      { src: "image1.jpg", description: "Description for Image 1" },
      { src: "image2.jpg", description: "Description for Image 2" },
    ];
    
    // Adding images to the component's properties
    // const { container } = render(<Gallery images={mockImages} />);
    // container.images = mockImages;

  test("renders gallery component", () => {
    const { getByTestId } = render(<Gallery images={mockImages}/>);
    const galleryElement = getByTestId("gallery");
    expect(galleryElement).toBeInTheDocument();
  });

  test("displays images", () => {
    const { container } = render(<Gallery images={mockImages} />);
    const imageElements = container.querySelectorAll("img");
    expect(imageElements.length).toBe(2);
  });
});
