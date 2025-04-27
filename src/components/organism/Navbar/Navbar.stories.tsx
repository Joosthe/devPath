import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { BrowserRouter } from "react-router";
import Navbar from "./Navbar";

// Wrap the Navbar component with BrowserRouter for routing support
const meta = {
  title: "Components/organism/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen", // Ensures the Navbar spans the full width of the viewport
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story for the Navbar
export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByRole("navigation");
    await step("check if element exists exists", async () => {
      await expect(navbar).toBeInTheDocument();
    });

//     await step("has the correct html", async () => {
//       expect(navbar).toContainHTML(`
//         <nav class="fixed top-0 left-0 z-50 w-full bg-white p-4 shadow-md"
//           role="navigation">
// </nav>
//         `);
    // });
  },
};
