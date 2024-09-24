import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

const HeaderDiv = styled.header`
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > i {
        font-size: 30px;
        color: #595959;
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    gap: 1rem;
    align-items: center;

    i {
        font-size: 50px;
        color: #4395f6;
    }
    h1 {
        font-size: 30px;
        font-weight: bold;
        color: #666666;
    }
`;

export default function Header({ linkTo }) {
    const navigate = useNavigate();

    const linkClass =
        linkTo === "back"
            ? "fa-regular fa-map"
            : linkTo === "favorites"
            ? "fa-solid fa-thumbtack"
            : "fa-solid fa-bars";

    const routingTo = () => {
        if (linkTo === "back") {
            navigate(-1);
        } else if (linkTo === "favorites") {
            navigate("/favorites");
        } else {
            navigate("/");
        }
    };

    return (
        <HeaderDiv>
            <StyledLink to="/">
                <i className="fa-solid fa-square-parking" />
                <h1>주차자리요</h1>
            </StyledLink>
            <i className={linkClass} onClick={routingTo} />
        </HeaderDiv>
    );
}
