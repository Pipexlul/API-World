import { useContext } from "react";
import { APIHandlerContext } from "../../contexts/appContexts";

const APIEndpointButton = ({
  label,
  setCanClick,
  endpointURL,
  setEndpointURL,
}) => {
  const { canClick, isLoading } = useContext(APIHandlerContext);

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        if (canClick) {
          setCanClick(false);
          setEndpointURL(endpointURL);
        }
      }}
      className={`group relative inline-block overflow-hidden rounded-full border-2 px-8 py-3 ${
        canClick && !isLoading
          ? "cursor-pointer border-fuchsia-600"
          : "cursor-not-allowed border-gray-500"
      }`}
      href="#"
    >
      <span
        className={`absolute inset-y-0 left-0 w-0 transition-all ${
          canClick && !isLoading
            ? "bg-fuchsia-600 group-hover:w-full group-active:bg-fuchsia-500"
            : "w-0 bg-gray-500 group-active:bg-gray-600"
        }`}
      ></span>
      <span
        className={`text-md relative font-medium transition-colors ${
          canClick && !isLoading
            ? "text-fuchsia-600 group-hover:text-white"
            : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </a>
  );
};

export default APIEndpointButton;
