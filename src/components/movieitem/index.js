import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

const movieUrl =
  "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg";
export default class MovieItem extends React.Component {
  render() {
    const {
      imgBaseUrl,
      overview,
      poster_path,
      release_date,
      title,
      vote_average,
    } = this.props;

    const imgSrc = `${imgBaseUrl}w500${poster_path}`;

    return (
      // Complete the MovieItem component
      <MovieItemWrapper>
        <LeftCont>
          <Image src={imgSrc} alt={"moviePoster"} />
        </LeftCont>
        <RightCont>
          <div style={{ zIndex: 2 }}>
            <Heading>
              <Title>{title}</Title>
              <Points>{vote_average}</Points>
            </Heading>
            <Label> Label </Label>
            <Description>{overview}</Description>
          </div>
          <ReleaseDate>{release_date}</ReleaseDate>
        </RightCont>
      </MovieItemWrapper>
    );
  }
}

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-size: 20pt;
  font-weight: bold;

  @media(max-width: 670px) {
    font-size: 16pt;
  }
  @media(max-width: 500px) {
    font-size: 12pt;
  }
`;
const Points = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 30px;
  background-color: ${colors.primaryColor};
  border-radius: 2px;
  color: white;
  font-weight: 700;
`;

const Label = styled.div`
  margin-bottom: 11px;
  color: ${colors.primaryColor};
`;

const Description = styled.div`
  max-height: 150px;
  overflow: auto;
  
  @media(max-width: 670px) {
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
    max-height: 100px;
    font-size: 10pt;
  }
  @media(max-width: 500px) {
    max-height: 75px;
    font-size: 8.5pt;
  }
`;

const ReleaseDate = styled.div`
  color: ${colors.primaryColor};
  font-size: 10pt;
  font-weight: lighter;
`;

const Image = styled.img`
  width: auto;
  height: 265px;
  border-radius: 3px;
  @media(max-width: 670px) {
    height: 200px;
  }
  @media(max-width: 500px) {
    height: 185px;
  }
`;

const MovieItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: white;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 15px;
  @media(max-width: 670px) {
  padding: 10px;
  }
`;

const LeftCont = styled.div`
  display: block;
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  width: auto;
  max-height: 265px;
`;
