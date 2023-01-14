import { useStyles } from "../Hooks/useStyles";

const defaultStyle =
  "px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700";

const Button = ({ text, extraStyles, replaceStyles = false }) => {
  const styles = useStyles(defaultStyle, { extraStyles, replaceStyles });

  return <button className={styles}>{text}</button>;
};

export default Button;
