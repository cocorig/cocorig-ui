import { within, expect, userEvent, waitFor } from '@storybook/test';

import { Story } from './index.stories';

export const runTest = (story: Story) => {
  story.play = async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByPlaceholderText('값을 입력해주세요') as HTMLInputElement;

    await step('유효성 검사 성공 시 helperText가 사라진다', async () => {
      await userEvent.type(input, 'FormInput 테스트', {
        delay: 50,
      });
      const helperText = document.querySelector('.helperText');
      await waitFor(() => expect(helperText).toBeNull());
    });

    await step('유효성 검사 실패 시 helperText가 표시된다', async () => {
      await userEvent.type(input, ' 입력값입니다.', { delay: 50 });
      const helperText = document.querySelector('.helperText');
      await waitFor(() => expect(helperText).toBeInTheDocument());
    });

    await step('필드가 required 속성을 가지는지 확인하다', async () => {
      expect(input).toBeRequired();
    });
  };

  return story;
};
