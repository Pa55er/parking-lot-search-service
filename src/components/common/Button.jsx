import styled from "@emotion/styled";
import useZustandStore from "../../stores/AppStore";

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

    &.active {
        color: white;
    }
    &.active > i {
        color: white;
    }
    &.a {
        background-color: #ffbc3b;
    }
    &.b {
        background-color: #3ba1ff;
    }
    &.c {
        background-color: #a687ff;
    }
    &.d {
        background-color: #22c8aa;
    }
    &.e {
        background-color: #2f8b6f;
    }
    &.f {
        background-color: #00ffff;
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

    const color =
        filterName === "유료"
            ? "a"
            : filterName === "무료"
            ? "b"
            : filterName === "야간"
            ? "c"
            : filterName === "노상"
            ? "d"
            : filterName === "노외"
            ? "e"
            : "f";

    const filterOpt = useZustandStore((state) => state.filterOpt);
    const setFilterOpt = useZustandStore((state) => state.setFilterOpt);

    const handleButton = () => {
        if (filterName === filterOpt) {
            setFilterOpt("");
        } else {
            setFilterOpt(filterName);
        }
    };

    return (
        <ButtonDiv
            onClick={handleButton}
            className={filterName === filterOpt && `active ${color}`}
        >
            <i className={fontAwesName} />
            <span>{filterName}</span>
        </ButtonDiv>
    );
}
