import styled from 'styled-components';

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckboxContainer = styled.label<{ space?: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-bottom: ${({ space }) => space || '0px'};
`;

export const StyledCheckbox = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid #3f3f3f;
  border-radius: 5px;
  margin-right: 12px;
`;
