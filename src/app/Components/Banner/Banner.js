'use client';
import { BannerContainer, DarkOverlay, BannerMainText } from "./Banner_styled";

const Banner = ({text,  image}) => {
  return (
    <>
        <BannerContainer image={image}>
            <DarkOverlay/>
            <BannerMainText>{text}</BannerMainText>
        </BannerContainer>
    </>
  )
}

export default Banner