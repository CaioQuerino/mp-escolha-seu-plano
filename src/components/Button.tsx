import React, { memo } from 'react';

interface ButtonProps {
  img: string;
  value: string;
}

export default memo(function Button({ img, value }: ButtonProps) {
  return (
    <button>
      <img src={img} alt={value} />
      {value}
    </button>
  );
});
