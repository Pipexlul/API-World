const defaultPath =
  "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z";

const Feature = ({
  iconPath,
  iconColor,
  name,
  originalSite,
  decorationText,
}) => {
  return (
    <div className="flex flex-col items-center p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`h-8 w-8 ${iconColor}`}
      >
        <path d={iconPath ? iconPath : defaultPath}></path>
      </svg>
      <h3 className="my-3 text-3xl font-semibold">{name}</h3>
      <div className="space-y-1 leading-tight">
        <p className="text-center">{originalSite}</p>
        <p>{decorationText}</p>
      </div>
    </div>
  );
};

export default Feature;
