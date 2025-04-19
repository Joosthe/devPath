import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router";
import Navbar from "./Navbar";

// Wrap the Navbar component with BrowserRouter for routing support
const meta = {
  title: "Components/Organisms/Navbar",
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
export const Default: Story = {};
