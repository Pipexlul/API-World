import HowToUseDisplayTextInfo from "./HowToUseDisplayTextInfo";
import HowToUseRoute from "./HowToUseRoute";

const HowToUseDisplayText = ({ routes, entryText }) => {
  return (
    <>
      <HowToUseRoute routesList={routes} />
      <HowToUseDisplayTextInfo infoToShow={entryText} />
    </>
  );
};

export default HowToUseDisplayText;
