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
    display: block;
`;

const DeleteFavButton = styled.i`
    cursor: pointer;

    &:hover {
        color: red;
    }
`;

export default function FavoritesList({ info, setLocalStorage, index }) {
    const setDetailTarget = useZustandStore((state) => state.setDetailTarget);
    const setTargetMarker = useZustandStore((state) => state.setTargetMarker);

    const handleDetailTarget = () => {
        setDetailTarget(info);
    };

    const handleRemoveList = () => {
        let favLists = JSON.parse(localStorage.getItem("favLists") || "[]");
        favLists = favLists.filter((list) => list.PKLT_CD !== info.PKLT_CD);
        setLocalStorage(favLists, info);
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
                <div>
                    <p>{`${info.ADDR} / ${info.PRK_TYPE_NM.split(" ")[0]} / ${
                        info.PAY_YN_NM
                    }`}</p>
                    <DeleteFavButton
                        onClick={handleRemoveList}
                        className="fa-solid fa-x"
                    />
                </div>
                <LinkButton onClick={handleDetailTarget} to={`/list`}>
                    상세보기
                </LinkButton>
            </List>
        </>
    );
}
