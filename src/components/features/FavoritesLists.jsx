import styled from "@emotion/styled";
import Header from "../layout/Header";
import FavoritesList from "../common/FavoritesList";
import NoList from "../common/NoList";
import useLocalStorage from "../../hooks/useLocalStorage";
import LoadingUi from "../common/LoadingUi";

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

const TitleDiv = styled.div`
    padding: 1.5rem;
    color: #666666;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;

    span {
        font-size: 15px;
        opacity: 0.54;
        cursor: pointer;
    }
    span:hover {
        opacity: 1;
    }
`;

export default function FavoritesLists() {
    const [lists, isLoading, setLocalStorage] = useLocalStorage();

    const handleClearFav = () => {
        setLocalStorage([]);
        alert("즐겨찾기 항목을 전체 삭제하였습니다.");
    };

    return (
        <FavoritesDiv>
            <Header linkTo="favorites" />
            <TitleDiv>
                <h2>즐겨찾기</h2>
                <span onClick={handleClearFav}>비우기</span>
            </TitleDiv>
            {isLoading ? (
                <LoadingUi />
            ) : lists.length === 0 ? (
                <NoList />
            ) : (
                lists.map((list) => (
                    <FavoritesList
                        key={list.PKLT_CD}
                        info={list}
                        setLocalStorage={setLocalStorage}
                    />
                ))
            )}
        </FavoritesDiv>
    );
}
