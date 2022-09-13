import { PlOutlineArrowDown, PlOutlineArrowUp } from '@drogo-ui/icons';
import {
  forwardRef,
  LegacyRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { DropdownList } from './DropdownList';
import * as S from './styles';

export type DropdownHandle = {
  title?: string;
  children: JSX.Element[];
  onClick?: (value: string | number) => void;
};

export const DropdownHandle = forwardRef<HTMLDivElement, DropdownHandle>(
  ({ children, title, onClick, ...props }, ref) => {
    const dropdownRef = useRef<HTMLElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState(children[0]);

    const handlePressEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (!dropdownRef.current?.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handlePressEsc);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handlePressEsc);
      };
    }, [dropdownRef]);

    const handleClick = useCallback(() => {
      // abre e fecha o dropdown
      setIsOpen(!isOpen);
    }, [isOpen]);

    return (
      <div ref={dropdownRef as LegacyRef<HTMLDivElement> | undefined}>
        <S.DropDownHeader
          ref={ref}
          onClick={() => handleClick()}
          isOpen={isOpen}
          {...props}
          id={title}
          aria-label="dropdown toggle"
          role="listbox"
        >
          {selectedTitle}
          {isOpen ? (
            <PlOutlineArrowUp size={13} />
          ) : (
            <PlOutlineArrowDown size={13} />
          )}
        </S.DropDownHeader>
        {isOpen && (
          <DropdownList
            list={children}
            setIsOpen={setIsOpen}
            setSelectedTitle={setSelectedTitle}
            onClick={onClick}
            isOpen={isOpen}
          />
        )}
      </div>
    );
  },
);
