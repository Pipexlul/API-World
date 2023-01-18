const Separator = ({ fromColor, midColor, toColor }) => {
  return (
    <div
      className={`mx-auto h-4 w-5/6 bg-gradient-to-r ${fromColor} ${midColor} ${toColor}`}
    ></div>
  );
};

export default Separator;
