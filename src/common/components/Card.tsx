import React from 'react';

interface CardProps {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-custom-large overflow-hidden shadow-lg md:w-[900px] bg-white">
      {children}
    </div>
  )
}

export { Card };
