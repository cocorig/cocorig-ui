import { within, expect, userEvent, waitFor } from '@storybook/test';

import { Story } from './index.stories';

export const runTest = (story: Story) => {
  story.play = async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button');

    await step('버튼 클릭 시 메뉴가 열린다', async () => {
      await userEvent.click(menuButton);
      const menu = canvas.getByRole('menu');
      expect(menu).toBeInTheDocument();
    });

    await step('ArrowDown, ArrowUp 키 이벤트로 메뉴 이동 후 Enter 키로 값 선택한다', async () => {
      const menuItems = canvas.getAllByRole('menuitem');
      await userEvent.tab();
      expect(menuItems[0]).toHaveFocus();
      await userEvent.keyboard('{ArrowDown}');
      expect(menuItems[1]).toHaveFocus();
      await userEvent.keyboard('{ArrowUp}');
      expect(menuItems[0]).toHaveFocus();
      await userEvent.keyboard('{Enter}');
    });

    await step('외부 요소 클릭 시 메뉴가 닫힌다', async () => {
      await userEvent.click(document.body);
      await waitFor(() => {
        expect(canvas.queryByRole('menu')).not.toBeInTheDocument();
      });
    });
  };

  return story;
};
