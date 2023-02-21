import "./Button.css";

export const Button = ({onClick, name, className='button'}) => {
    return (
      <button
        onClick={onClick}
        className={className}
      >
        {name}
      </button>
    );
  }