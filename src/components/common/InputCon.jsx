import styled from "@emotion/styled";

const InputWrap = styled.div`
    width: 100%;
    padding: 0 1.5rem;
    position: relative;

    i {
        position: absolute;
        top: 1.1rem;
        left: 45px;
        color: #4395f6;
        font-size: 1rem;
        cursor: pointer;
    }
`;

const Input = styled.input`
    width: calc(100% - 4.5rem);
    padding: 1rem 1rem 1rem 50px;
    border: 3px solid #4395f6;
    border-radius: 0.5rem;
    font-weight: bold;
`;

export default function InputCon() {
    return (
        <InputWrap>
            <i className="fa-solid fa-magnifying-glass" />
            <Input
                type="text"
                placeholder="자치구를 입력해주세요 (예 : 강남구, 도봉구)"
            />
        </InputWrap>
    );
}
