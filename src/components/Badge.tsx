import React from 'react';


interface BadgeProps {
  label: string; // Prop to accept a label string
}

const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <div className="rounded-full px-4 py-1 text-xs bg-[#482F54] text-purple-200">
      {label}
    </div>
  );
};

export default Badge;
