/**
 * arg의 기본값을 설정하는 함수
 *
 * @param {string} summary - 기본값에 대한 요약 정보.
 * @param {string} [detail] - 선택적인 상세 정보.
 * @returns {object} argTypes의 기본값 설정 객체를 반환.
 */
export const getDefaultValue = (summary: string, detail?: string): object => ({
  defaultValue: {
    summary,
    detail,
  },
});
