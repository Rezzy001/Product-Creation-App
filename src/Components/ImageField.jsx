const ImageField = ({ label, name, id, value, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        className="input-field"
        type="file"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ImageField;
