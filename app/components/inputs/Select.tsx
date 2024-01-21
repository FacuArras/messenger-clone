import ReactSelect from "react-select";

interface SelectProps {
  label: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  options: Record<string, any>[];
  disabled?: boolean;
  isDarkMode: boolean; // Supongamos que tienes esta información del modo oscuro
}

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  disabled,
  isDarkMode,
}) => {
  return (
    <div className="z-[100]">
      <label
        className={`block text-sm font-medium leading-6 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 9999,
            }),
            control: (provided, state) => ({
              ...provided,
              background: isDarkMode ? "#111827" : "white",
              color: isDarkMode ? "white" : "#333",
              borderColor: state.isFocused
                ? isDarkMode
                  ? "white"
                  : "#333"
                : provided.borderColor,
              boxShadow: state.isFocused
                ? isDarkMode
                  ? "0 0 0 2px rgba(255, 255, 255, 0.5)"
                  : "0 0 0 2px rgba(0, 0, 0, 0.2)"
                : provided.boxShadow,
            }),
            option: (provided) => ({
              ...provided,
              background: isDarkMode ? "#111827" : "white",
              color: isDarkMode ? "white" : "#111827",
            }),
            multiValue: (provided) => ({
              ...provided,
              background: isDarkMode ? "#6b7280" : "white",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              color: isDarkMode ? "white" : "black",
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Select;
