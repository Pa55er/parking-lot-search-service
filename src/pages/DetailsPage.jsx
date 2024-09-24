import styled from "@emotion/styled";
import Header from "../components/layout/Header";
import DetailsMap from "../components/features/DetailsMap";

const Wrap = styled.div`
    width: 100%;
`;

const Main = styled.div`
    width: 90%;
    max-width: 850px;
    margin: auto;
    margin-bottom: 5rem;
    border: 1px solid #d9d9d9;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px 3px;
`;

const Article = styled.article`
    width: 100%;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
        font-size: 25px;
        font-weight: bold;
        color: #0875f5;
    }
`;

const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > span:nth-of-type(1) {
        font-size: 20px;
        font-weight: bold;
        opacity: 0.54;
    }
    & > span:nth-of-type(2) {
        font-size: 18px;
        opacity: 0.54;
    }
`;

const SubDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > span:nth-of-type(1),
    & > span:nth-of-type(2) {
        font-size: 18px;
        opacity: 0.54;
    }
`;

const Hr = styled.div`
    width: 100%;
    border: 1px dotted #5e5d5d;
`;

const Table = styled.table`
    th,
    td {
        background-color: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.75);
        border: 3px solid white;
        font-size: 20px;
    }
    th {
        padding: 1rem 0;
    }
    td {
        padding: 2rem 0;
        text-align: center;
    }
`;

export default function DetailsPage() {
    const target = {
        PKLT_CD: "171721",
        PKLT_NM: "세종로 공영주차장(시)",
        ADDR: "종로구 세종로 80-1",
        PKLT_TYPE: "NW",
        PRK_TYPE_NM: "노외 주차장",
        OPER_SE: "1",
        OPER_SE_NM: "시간제 주차장",
        TELNO: "02-2290-6566",
        PRK_STTS_YN: "1",
        PRK_STTS_NM: "현재~20분이내 연계데이터 존재(현재 주차대수 표현)",
        TPKCT: 1260,
        NOW_PRK_VHCL_CNT: 584,
        NOW_PRK_VHCL_UPDT_TM: "2024-09-24 14:01:50",
        PAY_YN: "Y",
        PAY_YN_NM: "유료",
        NGHT_PAY_YN: "N",
        NGHT_PAY_YN_NM: "야간 미개방",
        WD_OPER_BGNG_TM: "0000",
        WD_OPER_END_TM: "2400",
        WE_OPER_BGNG_TM: "0000",
        WE_OPER_END_TM: "2400",
        LHLDY_OPER_BGNG_TM: "0000",
        LHLDY_OPER_END_TM: "2400",
        SAT_CHGD_FREE_SE: "N",
        SAT_CHGD_FREE_NM: "무료",
        LHLDY_CHGD_FREE_SE: "N",
        LHLDY_CHGD_FREE_SE_NAME: "무료",
        PRD_AMT: "176000",
        STRT_PKLT_MNG_NO: "",
        BSC_PRK_CRG: 430,
        BSC_PRK_HR: 5,
        ADD_PRK_CRG: 430,
        ADD_PRK_HR: 5,
        BUS_BSC_PRK_CRG: 0,
        BUS_BSC_PRK_HR: 0,
        BUS_ADD_PRK_HR: 0,
        BUS_ADD_PRK_CRG: 0,
        DAY_MAX_CRG: 30900,
        LAT: 37.57340269,
        LOT: 126.97588429,
        SHRN_PKLT_MNG_NM: "",
        SHRN_PKLT_MNG_URL: "",
        SHRN_PKLT_YN: "N",
        SHRN_PKLT_ETC: "",
    };

    const formatTime = (time) => {
        const hours = time.slice(0, 2);
        const minutes = time.slice(2, 4);
        return `${hours}:${minutes}`;
    };

    return (
        <Wrap>
            <Header linkTo="back" />
            <Main>
                <DetailsMap latitude={target.LAT} longitude={target.LOT} />
                <Article>
                    <h2>{target.PKLT_NM}</h2>
                    <SubDiv>
                        <span>정보 업데이트</span>
                        <span>{target.NOW_PRK_VHCL_UPDT_TM}</span>
                    </SubDiv>
                    <Hr />
                    <Div>
                        <span>
                            현재 주차 가능{" "}
                            {target.TPKCT - target.NOW_PRK_VHCL_CNT}대 / 전체
                            주차공간 {target.TPKCT}대
                        </span>
                        <span></span>
                    </Div>
                    <Div>
                        <span>종류</span>
                        <span>{target.PRK_TYPE_NM}</span>
                    </Div>
                    <Div>
                        <span>주소</span>
                        <span>{target.ADDR}</span>
                    </Div>
                    <Div>
                        <span>전화번호</span>
                        <span>{target.TELNO}</span>
                    </Div>
                    <Div>
                        <span>요금 정보</span>
                        <span>
                            {target.PAY_YN_NM} (토요일 {target.SAT_CHGD_FREE_NM}
                            , 공휴일 {target.LHLDY_CHGD_FREE_SE_NAME})
                        </span>
                    </Div>
                    <Table>
                        <thead>
                            <tr>
                                <th>기본 금액</th>
                                <th>추가 금액</th>
                                <th>일 최대 금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {target.BSC_PRK_CRG.toString().replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ","
                                    )}
                                    원
                                </td>
                                <td>
                                    {target.ADD_PRK_CRG.toString().replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ","
                                    )}
                                    원
                                </td>
                                <td>
                                    {target.DAY_MAX_CRG.toString().replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ","
                                    )}
                                    원
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Div>
                        <span>정기권 금액</span>
                        <span>
                            {target.PRD_AMT.toString().replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                ","
                            )}
                            원
                        </span>
                    </Div>
                    <Div>
                        <span>운영 시간</span>
                        <span></span>
                    </Div>
                    <SubDiv>
                        <span>{" - "}평일</span>
                        <span>
                            {formatTime(target.WD_OPER_BGNG_TM)}~
                            {formatTime(target.WD_OPER_END_TM)}
                        </span>
                    </SubDiv>
                    <SubDiv>
                        <span>{" - "}주말</span>
                        <span>
                            {formatTime(target.WE_OPER_BGNG_TM)}~
                            {formatTime(target.WE_OPER_END_TM)}
                        </span>
                    </SubDiv>
                    <SubDiv>
                        <span>{" - "}공휴일</span>
                        <span>
                            {formatTime(target.LHLDY_OPER_BGNG_TM)}~
                            {formatTime(target.LHLDY_OPER_END_TM)}
                        </span>
                    </SubDiv>
                    <Div>
                        <span>야간개방</span>
                        <span>{target.NGHT_PAY_YN_NM}</span>
                    </Div>
                </Article>
            </Main>
        </Wrap>
    );
}
