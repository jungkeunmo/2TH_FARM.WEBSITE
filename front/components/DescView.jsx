import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 800px;
    height: 300px;

    display: flex;
    flex-direction: ${(props) => props.mode ===1 ? "row" : "row-reverse"};
    margin-top: 150px;
`;

const ImageSection = styled.img`
    width: 400px;
    height: 300px;

    border-radius: 5px;

    box-shadow: 3px 3px 7px #999;

    &:hover {
        filter: blur(3px);
    }
`;

const TextSection = styled.div`
    width: 400px;
    height: 300px;

    padding: 30px;
`;

const TextContent = styled.div``;

const DescView = ({mode, image, desc1, desc2, desc3}) => {
    return (
        <Wrapper mode={mode}>
            <ImageSection src={image}/>

            <TextSection>
                <TextContent>{desc1}</TextContent>
                <TextContent>{desc2}</TextContent>
                <TextContent>{desc3}</TextContent>
            </TextSection>
        </Wrapper>
    )
};

export default DescView;