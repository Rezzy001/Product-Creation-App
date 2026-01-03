const Button = ({ children, className }) => {
    return (
      <div className={className}>
        <button className="submit-btn" type="submit">
          {children}
        </button>
      </div>
    );
}
 
export default Button;