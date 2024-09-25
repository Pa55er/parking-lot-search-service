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

    h2 {
        color: #4395f6;
        font-size: 20px;
    }
    p {
        opacity: 0.54;
        font-size: 15px;
    }
`;

const LinkButton = styled(Link)`
    color: #4395f6;
    font-size: 13px;
`;

export default function SearchList({ info }) {
    const setDetailTarget = useZustandStore((state) => state.setDetailTarget);

    const handleDetailTarget = () => {
        setDetailTarget(info);
    };

    return (
        <>
            <Hr />
            <List>
                <h2>{info.PKLT_NM}</h2>
                <p>{`${info.ADDR} / ${info.PRK_TYPE_NM.split(" ")[0]} / ${
                    info.PAY_YN_NM
                }`}</p>
                <LinkButton onClick={handleDetailTarget} to={`/list`}>
                    상세보기
                </LinkButton>
            </List>
        </>
    );
}
