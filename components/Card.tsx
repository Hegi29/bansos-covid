import React from 'react';

const Card = ({ children }: any) => {
  return (
    <div className="rounded-custom-large overflow-hidden shadow-lg w-[900px] bg-white">
      {children}
    </div>
  )
}

export { Card };