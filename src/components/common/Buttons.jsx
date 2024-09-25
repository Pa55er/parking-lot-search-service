import styled from "@emotion/styled";
import Button from "./Button";

const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 24px;
    left: 495px;
    z-index: 10;
    align-items: flex-start;
`;

export default function Buttons() {
    return (
        <ButtonsDiv>
            <Button filterName="유료" />
            <Button filterName="무료" />
            <Button filterName="야간" />
            <Button filterName="노상" />
            <Button filterName="노외" />
            <Button filterName="현재 주차 가능" />
        </ButtonsDiv>
    );
}
