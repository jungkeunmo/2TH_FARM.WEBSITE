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

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    box-shadow: 3px 3px 7px #999;

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
            <TopImage src="https://i.pinimg.com/474x/72/cb/7b/72cb7b87f64c6f6819c2f2cedf09b17f.jpg"/>
            <TopBar />

            <div>건강한 식단과 신선한 식단을</div>
            <div>농산물 가격을 마트에 절반가격으로 코코팜이 답입니다.</div>

            <DescView mode={1} 
                title="코코팜은"
                image="https://i.pinimg.com/474x/c4/ec/c0/c4ecc0c80aa0dce3ec267949535fe707.jpg"
                desc1="저희 코코팜은 쌀,콩,고추,옥수수,감자,오이,고구마,깨,배추,양배추,포도,수박, 등등을"
                desc2="무농약으로 재배하고 있습니다."
                desc3="앞으로도 고객 여러분들께 깨끗하고 신선한 농산물을 전달하겠습니다."
            />
            <DescView mode={2} 
                title="코코팜의 환경"
                image="https://i.pinimg.com/474x/c8/b8/95/c8b895ca679ea00116bb75f435cb54ec.jpg"
                desc1="농부의 노력으로 특허 받은 친환경 비료만을 사용하여"
                desc2="채소를 재배하고 있습니다."
                desc3="항상 최고를 드리겠다는 마인드로 하겠습니다."
            />
        </Wrapper>
    );
}

export default Brand;