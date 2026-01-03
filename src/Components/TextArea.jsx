const TextArea = ({ label, name, id, value, onChange }) => {
    return (
      <div className="input-group">
        <label htmlFor={id}>{label}</label>
        <textarea
          className="input-field"
          id={id}
          name={name}
          value={value}
          cols={30}
          rows={6}
          onChange={onChange}
        ></textarea>
      </div>
    );
  };
  
  export default TextArea;