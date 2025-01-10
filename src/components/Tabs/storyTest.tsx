import { within, expect, userEvent } from '@storybook/test';

import { Story } from './index.stories';

export const runTest = (story: Story) => {
  story.play = async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('tab');

    await step('탭을 클릭하면 해당 탭이 활성화된다', async () => {
      await userEvent.click(tabs[1]);
      expect(tabs[1].ariaSelected).toBe('true');
    });

    await step('다른 탭을 클릭하면 이전 탭은 비활성화된다', async () => {
      await userEvent.click(tabs[0]);
      expect(tabs[1].ariaSelected).toBe('false');
      expect(tabs[0].ariaSelected).toBe('true');
    });
  };

  return story;
};
