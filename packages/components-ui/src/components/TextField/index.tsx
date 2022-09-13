import { useState, InputHTMLAttributes } from 'react';
import {
  PlOutlineUser,
  PlOutlineSearch,
  PlOutlineEye,
  PlOutlineEyeInvisible,
  PlOutlineClose,
  PlOutlineLock,
} from '@drogo-ui/icons';

import * as S from './styles';

export type TextFieldProps = {
  variant?: 'outlined' | 'filled' | 'standard';
  type?: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'date';
  label?: string;
  error?: string;
  success?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  handleClear?: () => void;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  name,
  type = 'text',
  variant = 'standard',
  error,
  success,
  iconLeft,
  iconRight,
  handleClear,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleDelete = () => {
    !!handleClear && handleClear();
    setValue('');
  };

  return (
    <S.Wrapper variant={variant} error={!!error} success={success} {...props}>
      <S.InputContainer>
        {!!iconLeft && <S.IconLeft>{iconLeft}</S.IconLeft>}

        <S.Input
          placeholder=" "
          onChange={handleChange}
          value={value}
          name={name}
          type={type}
          iconLeft={iconLeft}
          iconRight={iconRight}
          variant={variant}
          {...props}
          {...(label ? { id: name } : {})}
        />
        {variant === 'outlined' && (
          <fieldset>
            <legend>
              <span>{label}</span>
            </legend>
          </fieldset>
        )}

        {!!label && (
          <S.Label variant={variant} iconLeft={iconLeft} htmlFor={name}>
            {label}
          </S.Label>
        )}

        {!!iconRight && type !== 'search' && (
          <S.IconRight>{iconRight}</S.IconRight>
        )}

        {type === 'search' && value.length !== 0 && (
          <S.IconRight>
            <PlOutlineClose
              size={16}
              onClick={handleDelete}
              style={{ cursor: 'pointer' }}
              color="currentColor"
            />
          </S.IconRight>
        )}
      </S.InputContainer>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

const InputPassword = ({ label, name, ...props }: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      label={label}
      name={name}
      type={showPassword ? 'text' : 'password'}
      iconLeft={<PlOutlineLock size={20} color="currentColor" />}
      iconRight={
        showPassword ? (
          <PlOutlineEye
            size={20}
            onClick={togglePasswordVisibility}
            style={{ cursor: 'pointer' }}
            color="currentColor"
          />
        ) : (
          <PlOutlineEyeInvisible
            size={20}
            style={{ cursor: 'pointer' }}
            onClick={togglePasswordVisibility}
            color="currentColor"
          />
        )
      }
      {...props}
    />
  );
};

const InputSearch = ({
  label,
  name,
  handleClear,
  ...props
}: TextFieldProps) => {
  return (
    <Input
      label={label}
      name={name}
      type="search"
      handleClear={handleClear}
      iconLeft={<PlOutlineSearch size={20} color="currentColor" />}
      {...props}
    />
  );
};

export const TextField = ({ label, name, type, ...props }: TextFieldProps) => {
  switch (type) {
    case 'email':
      return (
        <Input
          label={label}
          name={name}
          type="email"
          iconLeft={<PlOutlineUser size={20} color="currentColor" />}
          {...props}
        />
      );

    case 'password':
      return <InputPassword label={label} name={name} {...props} />;

    case 'search':
      return <InputSearch label={label} name={name} {...props} />;

    default:
      return <Input type={type} label={label} name={name} {...props} />;
  }
};
