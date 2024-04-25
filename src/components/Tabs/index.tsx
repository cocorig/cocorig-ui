import React, { useRef, useEffect, useMemo } from 'react';
import { TabListProps, TabListStyles } from './type';
import { Tab, TabListContainer, DEFAULT_STYLES_SET } from './styles';

const TabList = ({
  onChange,
  options,
  selectedValue,
  fullWidth = false,
  styles,
  variant = 'rounded',
}: TabListProps & {
  styles?: TabListStyles;
}) => {
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabElements = useRef<HTMLButtonElement[]>([]);

  // tabList의 자식 요소들을 모두 가져와서 tabElements(버튼배열)에 할당
  useEffect(() => {
    tabElements.current = Array.from(
      tabListRef.current!.children,
    ) as HTMLButtonElement[];
  }, []);

  /**
   * Tab이 클릭되었을 때 tabElements 배열에서 찾고,새로 선택된 값이 이전에 선택된 값과 다를 경우에만 handleSelectTab가 실행된다.
   * @param event 클릭한 이벤트 객체
   */
  const handleSelectTab = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const targetTab = tabElements.current.find((tabElement) =>
      tabElement.contains(target),
    );
    if (targetTab) {
      const value = targetTab.dataset.value as string;
      if (selectedValue !== value) {
        onChange(event, value);
      }
    }
  };

  //  스타일이 매번 바뀌기 때문에 useMemo 적용
  const customStyles: TabListStyles = useMemo(() => {
    const defaultStyles = DEFAULT_STYLES_SET[variant];
    const propStyles = styles; // prop으로 받은 스타일이 있으면 적용

    return {
      tabList: { ...defaultStyles.tabList, ...propStyles?.tabList },
      tab: { ...defaultStyles.tab, ...propStyles?.tab },
    };
  }, [styles, variant]);

  return (
    <TabListContainer
      role="tablist"
      fullWidth={fullWidth}
      ref={tabListRef}
      styles={customStyles}
      onClick={handleSelectTab}
    >
      {options.map(({ value, label, disabled, ...tabProps }, index) => {
        const selected = value === selectedValue;
        return (
          <Tab
            role="tab"
            key={value}
            tabIndex={selected ? 0 : -1}
            aria-selected={selected}
            data-value={value}
            selected={selected}
            aria-controls={`tabpanel-${index + 1}`}
            styles={customStyles}
            {...tabProps}
          >
            {label || value}
          </Tab>
        );
      })}
    </TabListContainer>
  );
};

export default TabList;
