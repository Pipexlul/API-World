const helperPreventDefault = (e) => {
  e.preventDefault();
};

const HowToUseSubsection = ({ label, setHelperText, textData }) => {
  return (
    <a
      rel="noopener noreferrer"
      href="#"
      onClick={(e) => {
        helperPreventDefault(e);
        setHelperText(textData);
      }}
    >
      {label}
    </a>
  );
};

export default HowToUseSubsection;
