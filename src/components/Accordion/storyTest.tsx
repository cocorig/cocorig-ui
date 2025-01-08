import { within, expect, userEvent } from '@storybook/test';

import { Story } from './index.stories';

export const runTest = (story: Story) => {
  story.play = async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const headers = canvas.getAllByRole('button');
    const contents = canvasElement.querySelectorAll('[role="region"]');

    await step('초기 상태에서 모든 항목이 닫혀있는지 확인한다', async () => {
      contents.forEach((content) => {
        expect(content).toHaveAttribute('aria-hidden', 'true');
      });
    });

    await step('아코디언 항목 클릭 시 해당 항목이 열린다', async () => {
      await userEvent.click(headers[0]);
      expect(contents[0]).toHaveAttribute('aria-hidden', 'false');
    });

    await step('한 번에 하나의 항목만 열 수 있음을 확인한다', async () => {
      await userEvent.click(headers[1]);
      expect(contents[1]).toHaveAttribute('aria-hidden', 'false');
      expect(contents[0]).toHaveAttribute('aria-hidden', 'true');
    });

    await step('ArrowDown, ArrowUp 키를 사용하여 포커스 이동을 확인한다', async () => {
      headers[0].focus();
      await userEvent.keyboard('[ArrowDown]');
      expect(headers[1]).toHaveFocus();

      await userEvent.keyboard('[ArrowUp]');
      expect(headers[0]).toHaveFocus();
    });

    await step('포커스 이동 후 Enter 키를 눌러 아코디언이 열기', async () => {
      headers[0].focus();
      await userEvent.keyboard('[Enter]');
      expect(contents[0]).toHaveAttribute('aria-hidden', 'false');
    });
  };

  return story;
};

export const runTestWithArgs = (story: Story) => {
  story.play = async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const headers = canvas.getAllByRole('button');
    const contents = canvasElement.querySelectorAll('[role="region"]');

    await step('defaultId가 [1]로 설정된 경우, 처음 렌더링 시 해당 아코디언이 열린 상태임을 확인한다', async () => {
      expect(contents[1]).toHaveAttribute('aria-hidden', 'false');
    });

    await step('allowMultiple가 true인 경우, 여러 항목을 동시에 열 수 있다', async () => {
      await userEvent.click(headers[2]);

      expect(contents[1]).toHaveAttribute('aria-hidden', 'false');
      expect(contents[2]).toHaveAttribute('aria-hidden', 'false');
    });
  };

  return story;
};
