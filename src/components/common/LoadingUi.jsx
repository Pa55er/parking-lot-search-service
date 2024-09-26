import styled from "@emotion/styled";

const LoadingCom = styled.div`
    width: 100%;
    height: 460px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    color: #666666;
`;

export default function LoadingUi() {
    return <LoadingCom>잠시만 기다려주세요...</LoadingCom>;
}
