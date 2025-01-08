import { within, expect, userEvent } from '@storybook/test';

import { Story } from './index.stories';

export const runTest = (story: Story) => {
  story.play = async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    if (typeof args.children === 'string') {
      expect(button).toHaveTextContent(args.children);
    }

    await step('버튼 클릭 시 onClick 핸들러가 호출된다', async () => {
      await userEvent.click(button);
      expect(args.onClick).toHaveBeenCalled();
    });
    await step('포커스가 버튼에 맞춰지는지 확인한다', async () => {
      await userEvent.click(canvasElement);
      await userEvent.tab();
      expect(button).toHaveFocus();
    });
    await step('외부 클릭 시 포커스가 버튼에서 벗어나는지 확인한다', async () => {
      await userEvent.click(canvasElement);
      expect(button).not.toHaveFocus();
    });
  };
  return story;
};
