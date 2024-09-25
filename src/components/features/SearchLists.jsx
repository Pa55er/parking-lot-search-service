import styled from "@emotion/styled";
import Header from "../layout/Header";
import InputCon from "../common/InputCon";
import SearchList from "../common/SearchList";
import Buttons from "../common/Buttons";

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
    const lists = [
        {
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
            NOW_PRK_VHCL_CNT: 556,
            NOW_PRK_VHCL_UPDT_TM: "2024-09-24 17:31:50",
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
        },
        {
            PKLT_CD: "171730",
            PKLT_NM: "종묘주차장 공영주차장(시)",
            ADDR: "종로구 훈정동 2-0",
            PKLT_TYPE: "NW",
            PRK_TYPE_NM: "노외 주차장",
            OPER_SE: "1",
            OPER_SE_NM: "시간제 주차장",
            TELNO: "02-2290-6166",
            PRK_STTS_YN: "1",
            PRK_STTS_NM: "현재~20분이내 연계데이터 존재(현재 주차대수 표현)",
            TPKCT: 1317,
            NOW_PRK_VHCL_CNT: 1098,
            NOW_PRK_VHCL_UPDT_TM: "2024-09-24 17:31:50",
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
            PRD_AMT: "175000",
            STRT_PKLT_MNG_NO: "",
            BSC_PRK_CRG: 400,
            BSC_PRK_HR: 5,
            ADD_PRK_CRG: 400,
            ADD_PRK_HR: 5,
            BUS_BSC_PRK_CRG: 0,
            BUS_BSC_PRK_HR: 0,
            BUS_ADD_PRK_HR: 0,
            BUS_ADD_PRK_CRG: 0,
            DAY_MAX_CRG: 28800,
            LAT: 37.57150398,
            LOT: 126.99496888,
            SHRN_PKLT_MNG_NM: "",
            SHRN_PKLT_MNG_URL: "",
            SHRN_PKLT_YN: "N",
            SHRN_PKLT_ETC: "",
        },
        {
            PKLT_CD: "171900",
            PKLT_NM: "훈련원공원 공영주차장(시)",
            ADDR: "중구 을지로5가 40-3",
            PKLT_TYPE: "NW",
            PRK_TYPE_NM: "노외 주차장",
            OPER_SE: "1",
            OPER_SE_NM: "시간제 주차장",
            TELNO: "02-3405-4597",
            PRK_STTS_YN: "1",
            PRK_STTS_NM: "현재~20분이내 연계데이터 존재(현재 주차대수 표현)",
            TPKCT: 873,
            NOW_PRK_VHCL_CNT: 559,
            NOW_PRK_VHCL_UPDT_TM: "2024-09-24 17:31:50",
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
            BSC_PRK_CRG: 550,
            BSC_PRK_HR: 5,
            ADD_PRK_CRG: 550,
            ADD_PRK_HR: 5,
            BUS_BSC_PRK_CRG: 0,
            BUS_BSC_PRK_HR: 0,
            BUS_ADD_PRK_HR: 0,
            BUS_ADD_PRK_CRG: 0,
            DAY_MAX_CRG: 39600,
            LAT: 37.56740014,
            LOT: 127.00352062,
            SHRN_PKLT_MNG_NM: "",
            SHRN_PKLT_MNG_URL: "",
            SHRN_PKLT_YN: "N",
            SHRN_PKLT_ETC: "",
        },
        {
            PKLT_CD: "172051",
            PKLT_NM: "한강진역 공영주차장(시)",
            ADDR: "용산구 한남동 728-27",
            PKLT_TYPE: "NW",
            PRK_TYPE_NM: "노외 주차장",
            OPER_SE: "1",
            OPER_SE_NM: "시간제 주차장",
            TELNO: "02-795-6406",
            PRK_STTS_YN: "1",
            PRK_STTS_NM: "현재~20분이내 연계데이터 존재(현재 주차대수 표현)",
            TPKCT: 174,
            NOW_PRK_VHCL_CNT: 118,
            NOW_PRK_VHCL_UPDT_TM: "2024-09-24 17:31:50",
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
            PRD_AMT: "168000",
            STRT_PKLT_MNG_NO: "",
            BSC_PRK_CRG: 400,
            BSC_PRK_HR: 5,
            ADD_PRK_CRG: 400,
            ADD_PRK_HR: 5,
            BUS_BSC_PRK_CRG: 0,
            BUS_BSC_PRK_HR: 0,
            BUS_ADD_PRK_HR: 0,
            BUS_ADD_PRK_CRG: 0,
            DAY_MAX_CRG: 28800,
            LAT: 37.53952176,
            LOT: 127.00257963,
            SHRN_PKLT_MNG_NM: "",
            SHRN_PKLT_MNG_URL: "",
            SHRN_PKLT_YN: "N",
            SHRN_PKLT_ETC: "",
        },
        {
            PKLT_CD: "172065",
            PKLT_NM: "용산주차빌딩 공영주차장(시)",
            ADDR: "용산구 한강로2가 12-9",
            PKLT_TYPE: "NW",
            PRK_TYPE_NM: "노외 주차장",
            OPER_SE: "1",
            OPER_SE_NM: "시간제 주차장",
            TELNO: "02-2290-6014",
            PRK_STTS_YN: "1",
            PRK_STTS_NM: "현재~20분이내 연계데이터 존재(현재 주차대수 표현)",
            TPKCT: 561,
            NOW_PRK_VHCL_CNT: 263,
            NOW_PRK_VHCL_UPDT_TM: "2024-09-24 17:31:50",
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
            PRD_AMT: "168000",
            STRT_PKLT_MNG_NO: "",
            BSC_PRK_CRG: 300,
            BSC_PRK_HR: 5,
            ADD_PRK_CRG: 300,
            ADD_PRK_HR: 5,
            BUS_BSC_PRK_CRG: 0,
            BUS_BSC_PRK_HR: 0,
            BUS_ADD_PRK_HR: 0,
            BUS_ADD_PRK_CRG: 0,
            DAY_MAX_CRG: 21600,
            LAT: 37.53436379,
            LOT: 126.96541818,
            SHRN_PKLT_MNG_NM: "",
            SHRN_PKLT_MNG_URL: "",
            SHRN_PKLT_YN: "N",
            SHRN_PKLT_ETC: "",
        },
        {
            PKLT_CD: "172382",
            PKLT_NM: "봉화산역(남) 공영주차장(시)",
            ADDR: "중랑구 신내동 647-0",
            PKLT_TYPE: "NW",
            PRK_TYPE_NM: "노외 주차장",
            OPER_SE: "1",
            OPER_SE_NM: "시간제 주차장",
            TELNO: "",
            PRK_STTS_YN: "0",
            PRK_STTS_NM: "미연계중",
            TPKCT: 85,
            NOW_PRK_VHCL_CNT: 0,
            NOW_PRK_VHCL_UPDT_TM: "",
            PAY_YN: "Y",
            PAY_YN_NM: "유료",
            NGHT_PAY_YN: "N",
            NGHT_PAY_YN_NM: "야간 미개방",
            WD_OPER_BGNG_TM: "0900",
            WD_OPER_END_TM: "2200",
            WE_OPER_BGNG_TM: "0900",
            WE_OPER_END_TM: "2200",
            LHLDY_OPER_BGNG_TM: "0900",
            LHLDY_OPER_END_TM: "2200",
            SAT_CHGD_FREE_SE: "N",
            SAT_CHGD_FREE_NM: "무료",
            LHLDY_CHGD_FREE_SE: "N",
            LHLDY_CHGD_FREE_SE_NAME: "무료",
            PRD_AMT: "42000",
            STRT_PKLT_MNG_NO: "",
            BSC_PRK_CRG: 80,
            BSC_PRK_HR: 5,
            ADD_PRK_CRG: 80,
            ADD_PRK_HR: 5,
            BUS_BSC_PRK_CRG: 0,
            BUS_BSC_PRK_HR: 0,
            BUS_ADD_PRK_HR: 0,
            BUS_ADD_PRK_CRG: 0,
            DAY_MAX_CRG: 5700,
            LAT: 37.61642995,
            LOT: 127.09197194,
            SHRN_PKLT_MNG_NM: "",
            SHRN_PKLT_MNG_URL: "",
            SHRN_PKLT_YN: "N",
            SHRN_PKLT_ETC: "",
        },
        {
            PKLT_CD: "172605",
            PKLT_NM: "우이동 공영주차장(시)",
            ADDR: "강북구 우이동 105-2",
            PKLT_TYPE: "NW",
            PRK_TYPE_NM: "노외 주차장",
            OPER_SE: "1",
            OPER_SE_NM: "시간제 주차장",
            TELNO: "02-944-3044",
            PRK_STTS_YN: "1",
            PRK_STTS_NM: "현재~20분이내 연계데이터 존재(현재 주차대수 표현)",
            TPKCT: 82,
            NOW_PRK_VHCL_CNT: 67,
            NOW_PRK_VHCL_UPDT_TM: "2024-09-24 17:32:01",
            PAY_YN: "N",
            PAY_YN_NM: "무료",
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
            PRD_AMT: "",
            STRT_PKLT_MNG_NO: "",
            BSC_PRK_CRG: 0,
            BSC_PRK_HR: 0,
            ADD_PRK_CRG: 0,
            ADD_PRK_HR: 0,
            BUS_BSC_PRK_CRG: 0,
            BUS_BSC_PRK_HR: 0,
            BUS_ADD_PRK_HR: 0,
            BUS_ADD_PRK_CRG: 0,
            DAY_MAX_CRG: 80000,
            LAT: 37.65671789,
            LOT: 127.01163698,
            SHRN_PKLT_MNG_NM: "",
            SHRN_PKLT_MNG_URL: "",
            SHRN_PKLT_YN: "N",
            SHRN_PKLT_ETC: "",
        },
        {
            PKLT_CD: "172844",
            PKLT_NM: "마포유수지(시)",
            ADDR: "마포구 마포동 36-1",
            PKLT_TYPE: "NW",
            PRK_TYPE_NM: "노외 주차장",
            OPER_SE: "5",
            OPER_SE_NM: "시간제 + 버스전용 주차장",
            TELNO: "02-2290-6093",
            PRK_STTS_YN: "1",
            PRK_STTS_NM: "현재~20분이내 연계데이터 존재(현재 주차대수 표현)",
            TPKCT: 503,
            NOW_PRK_VHCL_CNT: 369,
            NOW_PRK_VHCL_UPDT_TM: "2024-09-24 17:31:50",
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
            PRD_AMT: "162000",
            STRT_PKLT_MNG_NO: "",
            BSC_PRK_CRG: 220,
            BSC_PRK_HR: 5,
            ADD_PRK_CRG: 220,
            ADD_PRK_HR: 5,
            BUS_BSC_PRK_CRG: 0,
            BUS_BSC_PRK_HR: 0,
            BUS_ADD_PRK_HR: 0,
            BUS_ADD_PRK_CRG: 0,
            DAY_MAX_CRG: 15800,
            LAT: 37.53890027,
            LOT: 126.94266859,
            SHRN_PKLT_MNG_NM: "",
            SHRN_PKLT_MNG_URL: "",
            SHRN_PKLT_YN: "N",
            SHRN_PKLT_ETC: "",
        },
        {
            PKLT_CD: "172935",
            PKLT_NM: "웃우물 공영주차장(시)",
            ADDR: "양천구 신정동 943-25",
            PKLT_TYPE: "NW",
            PRK_TYPE_NM: "노외 주차장",
            OPER_SE: "1",
            OPER_SE_NM: "시간제 주차장",
            TELNO: "02-2290-6311",
            PRK_STTS_YN: "1",
            PRK_STTS_NM: "현재~20분이내 연계데이터 존재(현재 주차대수 표현)",
            TPKCT: 79,
            NOW_PRK_VHCL_CNT: 60,
            NOW_PRK_VHCL_UPDT_TM: "2024-09-24 17:31:51",
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
            PRD_AMT: "140000",
            STRT_PKLT_MNG_NO: "",
            BSC_PRK_CRG: 220,
            BSC_PRK_HR: 5,
            ADD_PRK_CRG: 220,
            ADD_PRK_HR: 5,
            BUS_BSC_PRK_CRG: 0,
            BUS_BSC_PRK_HR: 0,
            BUS_ADD_PRK_HR: 0,
            BUS_ADD_PRK_CRG: 0,
            DAY_MAX_CRG: 15800,
            LAT: 37.52379759,
            LOT: 126.85141746,
            SHRN_PKLT_MNG_NM: "",
            SHRN_PKLT_MNG_URL: "",
            SHRN_PKLT_YN: "N",
            SHRN_PKLT_ETC: "",
        },
        {
            PKLT_CD: "172937",
            PKLT_NM: "목동체비지 공영주차장(시)",
            ADDR: "양천구 목동 908-26",
            PKLT_TYPE: "NW",
            PRK_TYPE_NM: "노외 주차장",
            OPER_SE: "1",
            OPER_SE_NM: "시간제 주차장",
            TELNO: "",
            PRK_STTS_YN: "1",
            PRK_STTS_NM: "현재~20분이내 연계데이터 존재(현재 주차대수 표현)",
            TPKCT: 55,
            NOW_PRK_VHCL_CNT: 80,
            NOW_PRK_VHCL_UPDT_TM: "2024-09-24 17:31:51",
            PAY_YN: "Y",
            PAY_YN_NM: "유료",
            NGHT_PAY_YN: "N",
            NGHT_PAY_YN_NM: "야간 미개방",
            WD_OPER_BGNG_TM: "0800",
            WD_OPER_END_TM: "2100",
            WE_OPER_BGNG_TM: "0800",
            WE_OPER_END_TM: "2100",
            LHLDY_OPER_BGNG_TM: "0800",
            LHLDY_OPER_END_TM: "2100",
            SAT_CHGD_FREE_SE: "N",
            SAT_CHGD_FREE_NM: "무료",
            LHLDY_CHGD_FREE_SE: "N",
            LHLDY_CHGD_FREE_SE_NAME: "무료",
            PRD_AMT: "90000",
            STRT_PKLT_MNG_NO: "",
            BSC_PRK_CRG: 130,
            BSC_PRK_HR: 5,
            ADD_PRK_CRG: 130,
            ADD_PRK_HR: 5,
            BUS_BSC_PRK_CRG: 0,
            BUS_BSC_PRK_HR: 0,
            BUS_ADD_PRK_HR: 0,
            BUS_ADD_PRK_CRG: 0,
            DAY_MAX_CRG: 9300,
            LAT: 37.53679354,
            LOT: 126.8806468,
            SHRN_PKLT_MNG_NM: "",
            SHRN_PKLT_MNG_URL: "",
            SHRN_PKLT_YN: "N",
            SHRN_PKLT_ETC: "",
        },
    ];

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
