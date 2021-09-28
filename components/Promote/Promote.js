import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  PromoteContainer,
  PromoteBg,
  VideoBg,
  PromoteContent,
  PromoteH1,
  PromoteP,
  PromoteBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./PromoteElements";

const Promote = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <PromoteContainer>
      <PromoteBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </PromoteBg>
      <PromoteContent>
        <PromoteH1>Start Search with Us</PromoteH1>
        <PromoteP>Search engine never been like this before</PromoteP>
        <PromoteBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}
            big={true}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </PromoteBtnWrapper>
      </PromoteContent>
    </PromoteContainer>
  );
};

export default Promote;
