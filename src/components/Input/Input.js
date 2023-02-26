import "./Input.css";

export const Input = ({id, type,  value, handleChange, error}) => {
    return (
      <div className="input-field">
        <label htmlFor={id}> {id} </label>
          <input
            id={id}
            className="input-field"
            type={type}
            placeholder={id}
            value={value}
            onChange={handleChange}
            error={error}
          />
        {error && <span className="error">Data is not valid</span>}
      </div>
    );
  }