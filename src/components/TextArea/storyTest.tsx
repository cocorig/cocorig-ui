import { within, expect, userEvent } from '@storybook/test';

import { Story } from './index.stories';

export const runTest = (story: Story) => {
  story.play = async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    step('placeholder가 표시되는지 확인', async () => {
      const textarea = canvas.getByPlaceholderText('값을 입력해주세요');
      expect(textarea).toBeInTheDocument();
    });

    step('값이 업데이트 되는지 확인', async () => {
      const textarea = canvas.getByPlaceholderText('값을 입력해주세요');
      await userEvent.type(textarea, 'Textarea 컴포넌트 테스트');
      expect(textarea).toHaveValue('Textarea 컴포넌트 테스트');
    });
  };

  return story;
};
