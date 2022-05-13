import React from "react";
import styled from "styled-components";
import DescView from "../components/DescView";

const Wrapper = styled.div`
    width: 100%;
    padding: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopImage = styled.img`
    width: 600px;
    height: 340px;

    border-radius: 5px;
    margin-bottom: 25px;

    transition: 0.5s;

    & :hover {
        opacity: 0.7;
        transform: scale(1.05);
    }
`;

const TopBar = styled.div`
    width: 1px;
    height: 250px;

    background-color: #999;
    margin-bottom: 25px;
`;


const Brand = () => {
    return (
        <Wrapper>
            <TopImage src="https://i.pinimg.com/474x/5f/ed/27/5fed27543665e554197344f759f678d3.jpg"/>
            <TopBar />

            <div>건강한 당신의 식탁을 위한 현명한 선택</div>
            <div>땅에 가치를 더하는 근모농산이 답입니다.</div>

            <DescView mode={1} 
                image="https://i.pinimg.com/474x/81/10/07/811007a29eb5c32f9775f16238885f79.jpg"
                desc1="농부의 고집으로 특허 받은 친환경 비료만을 사용하여"
                desc2="무농약으로 재배하고 있습니다."
                desc3="앞으로도 고객 여러분들께 깨끗하고 신선한 농산물을 전달하겠습니다."
            />
            <DescView mode={2} 
                image="https://i.pinimg.com/474x/c8/b8/95/c8b895ca679ea00116bb75f435cb54ec.jpg"
                desc1="농부의 고집으로 특허 받은 친환경 비료만을 사용하여"
                desc2="무농약으로 재배하고 있습니다."
                desc3="앞으로도 고객 여러분들께 깨끗하고 신선한 농산물을 전달하겠습니다."
            />
        </Wrapper>
    );
}

export default Brand;