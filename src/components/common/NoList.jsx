import styled from "@emotion/styled";

const NoListCom = styled.div`
    width: 100%;
    height: 460px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    color: #666666;
`;

export default function NoList() {
    return <NoListCom>아무것도 없어요</NoListCom>;
}
