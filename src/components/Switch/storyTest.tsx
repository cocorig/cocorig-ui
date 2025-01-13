import { within, expect, userEvent } from '@storybook/test';

import { Story } from './index.stories';

export const runTest = (story: Story) => {
  story.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  };

  return story;
};
