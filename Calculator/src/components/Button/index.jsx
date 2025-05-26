function Button({ title, btnType, onClick }) {
  function clickHandler(event) {
    onClick(title, event);
  }
  return (
    <button type={btnType} onClick={clickHandler}>
      {title}
    </button>
  );
}
export default Button;
