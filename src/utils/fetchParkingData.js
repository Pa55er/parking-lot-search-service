const baseURL = `/api/${
    import.meta.env.VITE_SEOUL_PARKING_API_KEY
}/json/GetParkingInfo`;

const fetchParkingData = async (borough, option) => {
    try {
        let url;
        let start = 1;
        let end = 1000;
        let std = true;
        let result = [];
        const answer = [];

        do {
            url = `${baseURL}/${start}/${end}`;
            if (borough !== "") url += `/${borough}`;
            const res = await fetch(url);
            let data = await res.json();

            if (data.RESULT?.CODE === "INFO-200") break;

            data = data.GetParkingInfo;
            result = result.concat(data.row);
            if (end >= data.list_total_count) std = false;
            else {
                start += 1000;
                end += 1000;
            }
        } while (std);

        for (const a of result) {
            if (answer.length === 0) answer.push(a);
            else {
                const index = answer.length - 1;
                if (answer[index].PKLT_CD === a.PKLT_CD) {
                    answer[index].TPKCT++;
                } else answer.push(a);
            }
        }

        if (option === "유료" || option === "무료") {
            return answer.filter((list) => list.PAY_YN_NM === option);
        } else if (option === "야간") {
            return answer.filter((list) => list.NGHT_PAY_YN === "Y");
        } else if (option === "노상" || option === "노외") {
            return answer.filter(
                (list) => list.PRK_TYPE_NM.split(" ")[0] === option
            );
        } else if (option === "현재 주차 가능") {
            return answer.filter(
                (list) => list.TPKCT - list.NOW_PRK_VHCL_CNT > 0
            );
        } else {
            return answer;
        }
    } catch (error) {
        console.error(error);
    }
};

export default fetchParkingData;
