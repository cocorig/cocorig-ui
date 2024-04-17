import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { SIZE_SET } from '../../foundation/styles/size';
import { gray700 } from '../../foundation';
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  paths: BreadcrumbItem[];
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
}

const Breadcrumb = ({
  paths,
  containerClasses,
  listClasses,
  activeClasses,
}: BreadcrumbProps) => {
  return (
    <Wrapper className={containerClasses} aria-label="Breadcrumb">
      <BreadcrumbList className={listClasses}>
        {paths.map((path, index) => (
          <CrumbWrapper key={index}>
            {index === paths.length - 1 ? (
              <CrumbActive className={activeClasses}>{path.name}</CrumbActive>
            ) : (
              <CrumbLink href={path.url}>{path.name}</CrumbLink>
            )}
          </CrumbWrapper>
        ))}
      </BreadcrumbList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
  font-size: ${SIZE_SET.sm};
`;

const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CrumbWrapper = styled.li`
  display: flex;
  align-items: center;
  &:not(:first-of-type) {
    &::before {
      content: '';
      margin-left: 0.5rem;
      margin-right: 0.75rem;
      display: block;
      height: 0.375rem;
      width: 0.375rem;
      transform: rotate(45deg) scaleX(1) scaleY(1);
      opacity: 0.4;
      border-top: 1px solid;
      border-right: 1px solid;
      background-color: transparent;
    }
  }
`;

const CrumbLink = styled.a`
  color: ${gray700};
  text-decoration: none;
  &:hover {
    text-decoration: revert;
  }
`;

const CrumbActive = styled.span`
  display: inline-flex;
  align-items: center;
  font-weight: 500;
`;

export default Breadcrumb;
