import React from 'react';

export default function Button({ icon, title, color, className }) {
  return (
    <button
      type='button'
      className={`${className} appButton flex items-center ${
        icon ? 'justify-between' : 'justify-center'
      } rounded-md ${
        color || 'bg-red-700'
      } px-2 py-1.5 md:px-2.5 md:py-2 lg:px-4 lg:py-3  text-white font-light`}
      data-ripple-light='true'
    >
      <span className={`text-sm sm: text-md md:text-lg font-semibold pr-3`}>
        {title}
      </span>
      {icon}
    </button>
  );
}
