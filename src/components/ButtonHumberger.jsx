import React, { useEffect, useState } from 'react';

const ButtonHumberger = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(props.isOpen);
    }, [props.isOpen]);

  return (
    <div>
      <label htmlFor="nav_bar_icon" className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5">
        <input id="nav_bar_icon" type="checkbox" className="hidden peer" onClick={props.toggle} checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        <div className={`w-2/3 h-1.5 bg-white dark:bg-black rounded-lg transition-all duration-300 origin-right ${isOpen ? 'peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]' : ''}`}></div>
        <div className={`w-full h-1.5 bg-white dark:bg-black rounded-lg transition-all duration-300 origin-center ${isOpen ? 'peer-checked:rotate-90 peer-checked:translate-x-4' : ''}`}></div>
        <div className={`w-2/3 h-1.5 bg-white dark:bg-black rounded-lg transition-all duration-300 origin-right ${isOpen ? 'peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]' : ''}`}></div>
      </label>
    </div>
  );
};

export default ButtonHumberger;
