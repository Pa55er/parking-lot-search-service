import styled from "@emotion/styled";
import Header from "../layout/Header";
import InputCon from "../common/InputCon";
import SearchList from "../common/SearchList";
import Buttons from "../common/Buttons";
import useFilteredFetch from "../../hooks/useFilteredFetch";
import LoadingUi from "../common/LoadingUi";

const SearchDiv = styled.div`
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
`;

export default function SearchLists() {
    const [lists, isLoading] = useFilteredFetch();

    return (
        <>
            <Buttons />
            <SearchDiv>
                <Header linkTo="main" />
                <InputCon />
                {lists.length ? (
                    <TitleDiv>
                        <h2>송파구 근처 주차장이에요.</h2>
                    </TitleDiv>
                ) : isLoading ? (
                    <LoadingUi />
                ) : (
                    <TitleDiv>
                        <h2>해당 구에는 주차장이 없는 것 같아요.</h2>
                    </TitleDiv>
                )}
                {lists.map((list) => (
                    <SearchList key={list.PKLT_CD} info={list} />
                ))}
            </SearchDiv>
        </>
    );
}
