import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import useZustandStore from "../../stores/AppStore";

const Hr = styled.div`
    width: calc(100% - 3rem);
    margin: auto;
    border: 1px solid #d9d9d9;
`;

const List = styled.article`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;

    h2 {
        color: #4395f6;
        font-size: 20px;
        cursor: pointer;
    }
    p {
        opacity: 0.54;
        font-size: 15px;
    }
    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

const LinkButton = styled(Link)`
    color: #4395f6;
    font-size: 13px;
`;

const AddFavButton = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 13px;

    &:hover {
        color: purple;
    }
`;

export default function SearchList({ info, index }) {
    const setDetailTarget = useZustandStore((state) => state.setDetailTarget);
    const setTargetMarker = useZustandStore((state) => state.setTargetMarker);

    const handleDetailTarget = () => {
        setDetailTarget(info);
    };

    const handleAddFav = () => {
        const favLists = JSON.parse(localStorage.getItem("favLists") || "[]");
        const check = favLists.some((list) => list.PKLT_CD === info.PKLT_CD);

        if (check) {
            alert("이미 즐겨찾기된 주차장입니다.");
        } else {
            favLists.unshift({ ADDR: info.ADDR, PKLT_CD: info.PKLT_CD });
            localStorage.setItem("favLists", JSON.stringify(favLists));
            alert("즐겨찾기가 완료되었습니다.");
        }
    };

    const handleClickTitle = () => {
        setTargetMarker({
            latitude: info.LAT,
            longitude: info.LOT,
            index,
        });
    };

    return (
        <>
            <Hr />
            <List>
                <h2 onClick={handleClickTitle}>{info.PKLT_NM}</h2>
                <p>{`${info.ADDR} / ${info.PRK_TYPE_NM.split(" ")[0]} / ${
                    info.PAY_YN_NM
                }`}</p>
                <div>
                    <LinkButton onClick={handleDetailTarget} to={`/list`}>
                        상세보기
                    </LinkButton>
                    <AddFavButton onClick={handleAddFav}>
                        즐겨찾기 추가
                    </AddFavButton>
                </div>
            </List>
        </>
    );
}
