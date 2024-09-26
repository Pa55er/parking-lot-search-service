import styled from "@emotion/styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useZustandStore from "../../stores/AppStore";

const MapDiv = styled.div`
    flex: 1;
    height: 100vh;
`;

export default function MainMap() {
    const lists = useZustandStore((state) => state.listingTarget);
    const setDetailTarget = useZustandStore((state) => state.setDetailTarget);

    const navigate = useNavigate();

    useEffect(() => {
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById("map"); // 지도를 표시할 div

            const location = lists.length
                ? { latitude: lists[0].LAT, longitude: lists[0].LOT }
                : { latitude: 37.575752, longitude: 126.976823 };
            const mapOption = {
                center: new kakao.maps.LatLng(
                    location.latitude,
                    location.longitude
                ), // 지도의 중심좌표
                level: 7, // 지도의 확대 레벨
            };

            const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

            // 여러개 마커 표시하기
            for (let i = 0; i < lists.length; i++) {
                // 마커를 생성합니다
                const marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: new kakao.maps.LatLng(lists[i].LAT, lists[i].LOT), // 마커를 표시할 위치
                    title: lists[i].PKLT_NM, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                });

                // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
                const iwContent = document.createElement("div"), // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

                // 인포윈도우 커스텀
                iwContent.style.width = "314px";
                iwContent.style.padding = "22px";
                iwContent.style.display = "flex";
                iwContent.style.flexDirection = "column";
                iwContent.style.gap = "1rem";

                const h2 = document.createElement("h2");
                h2.style.fontSize = "25px";
                h2.style.fontWeight = "bold";
                h2.style.color = "#0875F5";
                h2.innerHTML = `${lists[i].PKLT_NM}`;
                iwContent.append(h2);

                const span1 = document.createElement("span");
                span1.style.fontSize = "18px";
                span1.style.opacity = "0.7";
                span1.innerHTML = `${lists[i].ADDR}`;
                iwContent.append(span1);

                const span2 = document.createElement("span");
                span2.style.fontSize = "20px";
                span2.style.color = "#4395F6";
                span2.style.fontWeight = "bold";
                span2.innerHTML = `현재 주차 가능 ${
                    lists[i].TPKCT - lists[i].NOW_PRK_VHCL_CNT
                }대`;
                iwContent.append(span2);

                const div = document.createElement("div");
                div.style.display = "flex";
                div.style.justifyContent = "space-between";

                const span3 = document.createElement("span");
                span3.style.fontSize = "15px";
                span3.style.opacity = "0.54";
                span3.innerHTML = `${
                    lists[i].PRK_TYPE_NM.split(" ")[0] +
                    " / 기본요금 " +
                    lists[i].BSC_PRK_CRG.toString().replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ","
                    )
                }원`;
                div.append(span3);

                const span4 = document.createElement("div");
                span4.style.fontSize = "13px";
                span4.style.color = "#4395F6";
                span4.style.cursor = "pointer";
                span4.innerHTML = "상세보기";
                span4.addEventListener("click", () => {
                    setDetailTarget(lists[i]);
                    navigate("/list");
                });
                div.append(span4);

                iwContent.append(div);

                // 인포윈도우를 생성합니다
                const infowindow = new kakao.maps.InfoWindow({
                    content: iwContent,
                    removable: iwRemoveable,
                });

                // 마커에 클릭이벤트를 등록합니다
                kakao.maps.event.addListener(marker, "click", function () {
                    // 마커 위에 인포윈도우를 표시합니다
                    infowindow.open(map, marker);
                });
            }
        });
    }, [lists]);

    return <MapDiv id="map" />;
}
