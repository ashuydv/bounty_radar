import React from 'react';

interface InputFieldProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, name, placeholder, value, onChange, error }) => {
    return (
        <div>
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-[#0a0a0a] rounded drop-shadow-[0px_0px_1px_#ffffff90] h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-[#0a0a0a] rounded drop-shadow-[0px_0px_1px_#ffffff90] text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                />
            )}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default InputField;
