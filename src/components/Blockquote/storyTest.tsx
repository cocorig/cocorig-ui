import { within, expect } from '@storybook/test';

import { Story } from './index.stories';

export const runTest = (story: Story) => {
  story.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const blockquote = canvas.getByRole('blockquote');
    expect(blockquote).toBeInTheDocument();
  };
  return story;
};
