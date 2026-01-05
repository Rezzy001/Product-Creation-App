const Button = ({ children, className, onClick }) => {
  return (
    <div className={className}>
      <button className="submit-btn" type="submit" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;