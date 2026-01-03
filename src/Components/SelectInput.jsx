const SelectInput = ({ label, name, id, value, onChange, options }) => {
    return (
      <div className="input-group">
        <label htmlFor={id}>{label}</label>
        <select
          className="input-field"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SelectInput;