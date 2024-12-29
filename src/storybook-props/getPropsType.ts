/**
 * argTypes의 table 속성에서 type 옵션에 사용
 *
 * @param {string} summary - 속성 타입에 대한 요약 정보.
 * @param {string} [detail] - 선택적인 상세 정보.
 * @returns {object} argTypes의 type 설정 객체를 반환.
 */
export const getPropsType = (summary: string, detail?: string): object => ({
  type: {
    summary,
    detail,
  },
});
