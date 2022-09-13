import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styles';

export type DropdownListProps = {
  list: JSX.Element[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTitle: React.Dispatch<React.SetStateAction<JSX.Element>>;
  onClick?: (value: string | number) => void;
  isOpen: boolean;
};

export function DropdownList({
  list,
  isOpen,
  setIsOpen,
  setSelectedTitle,
  onClick,
}: DropdownListProps) {
  const [keyPressed, setKeyPressed] = useState(-1);

  const keyPressedRef = useRef<number>(-1);

  const handleMouseOver = useCallback(() => {
    keyPressedRef.current = -1;
    setKeyPressed(keyPressedRef.current);
  }, [setKeyPressed]);

  const handleSelect = useCallback(
    (title: JSX.Element) => {
      setIsOpen(false);
      setSelectedTitle(title);
      if (onClick) onClick(title.props.value);
    },
    [onClick, setIsOpen, setSelectedTitle],
  );

  const handleKeyPressEnter = useCallback(() => {
    handleSelect(
      list[keyPressedRef.current !== -1 ? keyPressedRef.current : 0],
    );
  }, [handleSelect, list]);

  const handlePressArrowKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' && isOpen) {
        if (keyPressed < list.length - 1) keyPressedRef.current += 1;
        else keyPressedRef.current = 0;
        setKeyPressed(keyPressedRef.current);
      }
      if (event.key === 'ArrowUp' && isOpen) {
        if (keyPressedRef.current > 0) keyPressedRef.current -= 1;
        else keyPressedRef.current = list.length - 1;
        setKeyPressed(keyPressedRef.current);
      }
      if (event.key === 'Enter' && isOpen) handleKeyPressEnter();
    },
    [keyPressed, list.length, isOpen, handleKeyPressEnter],
  );
  useEffect(() => {
    document.addEventListener('keydown', handlePressArrowKey);

    return () => {
      document.removeEventListener('keydown', handlePressArrowKey);
    };
  }, [list.length, handlePressArrowKey, keyPressed, keyPressedRef]);

  return (
    <S.DropDownList role="list">
      {list.map((option, index) => (
        <S.ListItem
          onClick={() => handleSelect(option)}
          key={option.props.value}
          aria-label="dropdown list"
          keyActivated={keyPressed === index}
          onMouseOver={() => handleMouseOver()}
          role="listitem"
          data-testId={index}
        >
          {option}
        </S.ListItem>
      ))}
    </S.DropDownList>
  );
}
