import React from 'react';

import { ChildProps } from '../interfaces';

const Card = ({ children }: ChildProps) => {
  return (
    <div className="rounded-custom-large overflow-hidden shadow-lg md:w-[900px] bg-white">
      {children}
    </div>
  )
}

export { Card };
