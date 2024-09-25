import styled from "@emotion/styled";

const ButtonDiv = styled.div`
    padding: 10px 1rem;
    border-radius: 19px;
    background-color: white;
    display: flex;
    gap: 11px;
    cursor: pointer;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);

    &:hover {
        box-shadow: none;
        border: 3px solid goldenrod;
    }

    i {
        font-size: 18px;
        width: 18px;
        text-align: center;
    }
    i.yellow {
        color: #ffd43b;
    }
    i.blue {
        color: #3ba1ff;
    }
    i.fa-moon {
        color: #b197fc;
    }
    i.fa-road {
        color: #63e6be;
    }
    i.fa-ruler {
        color: #2f8b6f;
    }
    i.fa-car {
        color: #00ffff;
    }
    span {
        font-size: 15px;
        font-weight: bold;
    }
`;

export default function Button({ filterName }) {
    const fontAwesName =
        filterName === "유료"
            ? "fa-solid fa-won-sign yellow"
            : filterName === "무료"
            ? "fa-solid fa-won-sign blue"
            : filterName === "야간"
            ? "fa-solid fa-moon"
            : filterName === "노상"
            ? "fa-solid fa-road"
            : filterName === "노외"
            ? "fa-solid fa-ruler"
            : "fa-solid fa-car";

    return (
        <ButtonDiv>
            <i className={fontAwesName} />
            <span>{filterName}</span>
        </ButtonDiv>
    );
}
