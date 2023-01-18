const ShinyInput = ({
  label,
  type,
  bgColor,
  labelColor,
  changeHandler,
  value,
}) => {
  return (
    <>
      <label className={`text-xs font-semibold uppercase ${labelColor}`}>
        {label}
      </label>
      <div>
        <input
          type={type}
          className="peer form-input max-w-md border-gray-300 bg-white bg-opacity-80 text-black placeholder-gray-400"
          onChange={(e) => {
            changeHandler(e.target.value);
          }}
          value={value}
        />
        <span
          className={`absolute bottom-0 left-0 h-2 transform ${bgColor} w-0 transition-all duration-300 ease-in peer-focus:w-7/12`}
        />
        <span
          className={`absolute bottom-0 right-0 h-2 transform ${bgColor} w-0 transition-all duration-300 ease-in peer-focus:w-7/12`}
        />
      </div>
    </>
  );
};

export default ShinyInput;
