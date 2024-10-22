type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  name: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

export const Input = ({
  label,
  type = "text",
  placeholder,
  required = true,
  name,
  value,
  onChange,
  className,
}: InputProps) => {
  return (
    <div className="mb-6">
      <label className="block text-lg text-[#6B7385]">{label}</label>
      <div className="relative">
        <input
          type={type}
          className={`block w-full py-3 border-b border-gray-300
            focus:border-primary-green focus:ring-primary-green focus:outline-none ${className}`}
          placeholder={placeholder}
          required={required}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
