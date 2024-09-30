import styled from "@emotion/styled";
import Header from "../layout/Header";
import InputCon from "../common/InputCon";
import SearchList from "../common/SearchList";
import Buttons from "../common/Buttons";
import useFilteredFetch from "../../hooks/useFilteredFetch";
import LoadingUi from "../common/LoadingUi";
import useZustandStore from "../../stores/AppStore";
import NoList from "../common/NoList";

const SearchDiv = styled.div`
    position: relative;
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

const FixedCom = styled.section`
    width: 460px;
    position: fixed;
    background-color: white;
    z-index: 10;
`;

const SlideCom = styled.section`
    padding-top: 235px;
`;

export default function SearchLists() {
    const inputFilter = useZustandStore((state) => state.inputFilter);

    const [lists, isLoading] = useFilteredFetch();

    return (
        <>
            <Buttons />
            <SearchDiv>
                <FixedCom>
                    <Header linkTo="main" />
                    <InputCon />
                    <TitleDiv>
                        <h2>{`검색내용 : ${inputFilter}`}</h2>
                    </TitleDiv>
                </FixedCom>
                <SlideCom>
                    {isLoading ? (
                        <LoadingUi />
                    ) : lists.length === 0 ? (
                        <NoList />
                    ) : (
                        lists.map((list, index) => (
                            <SearchList
                                key={list.PKLT_CD}
                                info={list}
                                index={index}
                            />
                        ))
                    )}
                </SlideCom>
            </SearchDiv>
        </>
    );
}
