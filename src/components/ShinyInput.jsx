const ShinyInput = ({
  label,
  type,
  bgColor,
  labelColor,
  changeHandler,
  value,
  disabled = false,
}) => {
  return (
    <>
      <label
        className={`text-xs font-semibold uppercase ${
          !disabled ? labelColor : "text-gray-400"
        }`}
      >
        {label}
      </label>
      <div>
        <input
          disabled={disabled}
          type={type}
          className="peer form-input max-w-md border-gray-300 bg-white bg-opacity-80 text-black placeholder-gray-400 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-500 disabled:bg-opacity-40"
          onChange={(e) => {
            changeHandler(e.target.value);
          }}
          value={value}
        />
        <span
          className={`absolute bottom-0 left-0 h-2 transform ${
            !disabled ? bgColor : "text-gray-400"
          } w-0 transition-all duration-300 ease-in peer-focus:w-7/12 peer-disabled:w-0`}
        />
        <span
          className={`absolute bottom-0 right-0 h-2 transform ${
            !disabled ? bgColor : "text-gray-400"
          } w-0 transition-all duration-300 ease-in peer-focus:w-7/12 peer-disabled:w-0`}
        />
      </div>
    </>
  );
};

export default ShinyInput;
