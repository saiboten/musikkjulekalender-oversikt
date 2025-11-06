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
    <div className="w-full sm:max-w-xs">
      <label htmlFor="search" className="block text-sm font-medium mb-2 text-gray-700">
        Filter sanger
      </label>
      <input 
        id="search" 
        value={text} 
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Søk etter artist, sang eller år..."
      />
    </div>
  );
};

export default TextFilter;