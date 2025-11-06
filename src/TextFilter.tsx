import React, { useState, ChangeEvent } from "react";

interface TextFilterProps {
  onChange: (value: string) => void;
}

const TextFilter: React.FC<TextFilterProps> = ({ onChange }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setText(value);
    onChange(value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="search" className="block text-sm font-medium mb-2">
        Filter sanger
      </label>
      <input 
        id="search" 
        value={text} 
        onChange={handleChange}
        className="border border-gray-300 px-3 py-2 rounded-md w-full max-w-xs"
        placeholder="Søk etter artist, sang eller år..."
      />
    </div>
  );
};

export default TextFilter;