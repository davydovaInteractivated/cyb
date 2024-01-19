import React from 'react';

/** Styled-components */
import { CustomAvatarStyled } from './CustomAvatar.styled';

/** Types */
import { ICustomAvatarProps } from './CustomAvatar.types';

const CustomAvatar = ({
  className = '',
  inverted = true,
  name = '', // user.displayName
  email = '', // user.email
}: ICustomAvatarProps) => {
  return (
    <CustomAvatarStyled className={`custom--avatar ${className}`} $inverted={inverted}>
      {name ? name.substr(0, 2).toUpperCase() : email.substr(0, 2).toUpperCase()}
    </CustomAvatarStyled>
  );
};

export default CustomAvatar;
