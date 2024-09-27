const baseURL = `http://openapi.seoul.go.kr:8088/${
    import.meta.env.VITE_SEOUL_PARKING_API_KEY
}/json/GetParkingInfo`;

const fetchParkingData = async (borough = false) => {
    try {
        let url;
        let start = 1;
        let end = 200;
        let std = true;
        let result = [];
        const answer = [];

        do {
            url = `${baseURL}/${start}/${end}`;
            if (borough) url += `/${borough}`;
            const res = await fetch(url);
            let data = await res.json();

            if (data.RESULT?.CODE === "INFO-200") break;

            data = data.GetParkingInfo;
            result = result.concat(data.row);
            if (end >= data.list_total_count) std = false;
            else {
                start += 200;
                end += 200;
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

        return answer;
    } catch (error) {
        console.error(error);
    }
};

export default fetchParkingData;
