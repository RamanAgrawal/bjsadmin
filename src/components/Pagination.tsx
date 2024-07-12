import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const PageButton = styled.button<{ active?: boolean }>`
  background-color: ${(props) => (props.active ? '#3b82f6' : 'transparent')};
  color: ${(props) => (props.active ? '#ffffff' : '#6b7280')};
  border: none;
  margin: 0 0.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    background-color: #3b82f6;
    color: #ffffff;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
    color: #d1d5db;
  }
`;

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <PageButton key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
          {i}
        </PageButton>
      );
    }

    return buttons;
  };

  return (
    <PaginationContainer>
      <PageButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </PageButton>
      {renderPageButtons()}
      <PageButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        &gt;
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
