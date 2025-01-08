import { within, expect } from '@storybook/test';

import { Story } from './index.stories';
export const runTest = (story: Story) => {
  story.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const badge = await canvas.findByText('IconBadge');
    expect(badge).toBeInTheDocument();

    const icon = await canvas.findByTestId('badge-icon');
    expect(icon).toBeInTheDocument();
  };
  return story;
};
