import { homeObjOne, homeObjTwo, homeObjThree } from "./InfoSection/Data";
import InfoSection from "./InfoSection/InfoSection";

import Promote from "./Promote/Promote";

const OpenPage = () => {
  return (
    <>
      <Promote />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default OpenPage;
