import styled from "@emotion/styled";
import Header from "../layout/Header";

const FavoritesDiv = styled.div`
    width: 460px;
    height: 100vh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default function FavoritesLists() {
    return (
        <FavoritesDiv>
            <Header linkTo="favorites" />
        </FavoritesDiv>
    );
}
