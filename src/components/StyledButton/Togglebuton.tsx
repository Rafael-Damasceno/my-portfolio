import React, { useState } from 'react';

type ToggleButtonProps = {
  initialChecked?: boolean; // Propriedade opcional para definir o estado inicial do botão
  onChange: (checked: boolean) => void; // Função chamada quando o estado do botão muda
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ initialChecked = false, onChange }) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleClick = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        backgroundColor: checked ? '#7A1B25' : '#00314F',
        color: '#FFFFFF',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        outline: 'none',
      }}
    >
      {checked ? 'PT' : 'EN'}
    </button>
  );
};

export default ToggleButton;
