import styled from 'styled-components';

export type ModalContentProps = {
  isOpen: boolean;
  widthModal?: string;
} & React.HTMLAttributes<HTMLElement>;

type ModalOverlayProps = {
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEscClick: boolean;
  isOpen: boolean;
};

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ModalContent = styled.div<ModalContentProps>`
  display: flex;
  flex-direction: column;
  width: ${({ widthModal }) => widthModal || 'fit-content'};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.content};
  color: ${({ theme }) => theme.colors.neutral_black};
  transition: ${({ theme }) => theme.transition.default};
  z-index: ${({ theme }) => theme.layers.modal};
`;

export const ModalOverlay = styled.div<ModalOverlayProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: ${({ theme }) => theme.transition.default};
  z-index: ${({ theme }) => theme.layers.overlay};
`;

export const ModalCloseButton = styled.button`
  margin-left: auto;
  margin-right: -14px;
  margin-top: -14px;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: 0;
  transition: 0.3s;
  border-radius: ${({ theme }) => theme.border.radius.circle};
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_20};
  }
`;

export const ModalRoot = styled.div`
  .paylivre-modal-enter {
    opacity: ${({ theme }) => theme.opacity.zero};

    ${ModalContent} {
      opacity: ${({ theme }) => theme.opacity.zero};
      transform: scale(0);
    }
  }

  .paylivre-modal-enter-active {
    opacity: ${({ theme }) => theme.opacity.normal};

    ${ModalContent} {
      opacity: ${({ theme }) => theme.opacity.normal};
      transform: scale(1);
    }
  }

  .paylivre-modal-exit {
    opacity: ${({ theme }) => theme.opacity.normal};

    ${ModalContent} {
      opacity: ${({ theme }) => theme.opacity.normal};
      transform: scale(1);
    }
  }

  .paylivre-modal-exit-active {
    opacity: ${({ theme }) => theme.opacity.zero};

    ${ModalContent} {
      opacity: ${({ theme }) => theme.opacity.zero};
      transform: scale(0);
    }
  }
`;
