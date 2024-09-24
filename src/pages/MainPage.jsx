import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import MainMap from "../components/features/MainMap";

const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export default function MainPage() {
    return (
        <MainDiv>
            <Outlet />
            <MainMap />
        </MainDiv>
    );
}
