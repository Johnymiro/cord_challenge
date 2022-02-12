import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

const movieUrl =
  "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg";
export default class MovieItem extends React.Component {
  render() {
    return (
      // Complete the MovieItem component
      <MovieItemWrapper>
        <LeftCont>
          <Image src={movieUrl} alt={"moviePoster"} />
        </LeftCont>
        <RightCont>
          <div style={{ zIndex: 2 }}>
            <Heading>
              <Title>Bad Genius</Title>
              <Points>1.4</Points>
            </Heading>
            <Label> Label </Label>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
          </div>
          <ReleaseDate>2017-05-03</ReleaseDate>
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
`;

const MovieItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: white;
  border-radius: 3px;
  padding: 20px;
  margin-top: 15px;
`;

const LeftCont = styled.div`
  display: block;
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  border: 1px solid aqua;
  width: auto;
  max-height: 265px;
`;
