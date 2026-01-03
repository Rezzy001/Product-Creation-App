const TextInput = ({ label, name, id, value, onChange, priceError }) => {
    return (
      <div className="input-group">
        <label htmlFor={id}>{label}</label>
        <input
          className="input-field"
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
        {priceError && <p>{priceError}</p>}
      </div>
    );
}
 
export default TextInput;