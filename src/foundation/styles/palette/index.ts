import {
  blue,
  red,
  green,
  yellow,
  gray,
  purple,
  indigo,
  orange,
} from '../../color';

// primary : 주요 색상
export const primary = orange[500];
export const primaryLight = orange[50];

// neutral : 기본 텍스트 및 보조 UI 요소에 사용, disable
export const neutral = gray[200];
export const neutralLight = gray[100];
export const neutralDark = gray[700];

// information : 정보 아이콘 등 정보 제공용 UI나 진행 중인 일을 전달하는 UI에 사용
export const info = blue[100];
export const infoLight = blue[50];
export const infoDark = blue[500];

// danger : 위험 또는 심각한 오류 상태를 전달하는 UI에 사용
export const danger = red[100];
export const dangerLight = red[50];
export const dangerDark = red[500];

// warning : 실수나 오류가 발생하지 않도록 주의사항을 전달하는 UI에 사용
export const warning = yellow[100];
export const warningLight = yellow[50];
export const warningDark = yellow[500];

// success : 성공 메시지, 결과를 전달하는 데 사용
export const success = green[100];
export const successLight = green[50];
export const successDark = green[500];

// discovery : 새로운 기능 정보 등 새로운 것을 전달하는 UI에 사용
export const discovery = purple[300];

// Action : 버튼, 뱃지 등 사용자의 동작에 따라 화면을 이어나갈 수 있도록 주요 동선 UI에 사용
export const action = indigo[900];

// 스토리북
export const palette = {
  primary: primary,
  primaryLight: primaryLight,
  infoLight: infoLight,
  info: info,
  infoDark: infoDark,
  neutralLight: neutralLight,
  neutral: neutral,
  neutralDark: neutralDark,
  dangerLight: dangerLight,
  danger: danger,
  dangerDark: dangerDark,
  warningLight: warningLight,
  warning: warning,
  warningDark: warningDark,
  successLight: successLight,
  success: success,
  successDark: successDark,
  discovery: discovery,
  action: action,
} as const;
