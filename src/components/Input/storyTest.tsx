import { within, expect, userEvent, waitFor } from '@storybook/test';

import { Story } from './index.stories';

export const runTest = (story: Story) => {
  story.play = async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByPlaceholderText('값을 입력해주세요');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    await step('사용자가 값을 입력하면 value가 업데이트된다', async () => {
      await userEvent.type(input, 'Input 테스트', {
        delay: 50,
      });
      expect(input).toHaveValue('Input 테스트');
    });

    await step('10자 초과 시 에러 상태로 변환된다', async () => {
      await userEvent.type(input, ' 입력값입니다.', {
        delay: 50,
      });
      await waitFor(() => {
        expect(input).toHaveStyle('border-color: #EF2B2A');
      });
    });
  };

  return story;
};
