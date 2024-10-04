import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useZustandStore from "../../stores/AppStore";

const { kakao } = window;

const MapDiv = styled.div`
    flex: 1;
    height: 100vh;
`;

const ButtonsDiv = styled.div`
    display: flex;
    gap: 1rem;
    position: absolute;
    bottom: 24px;
    right: calc((100% - 460px) / 2);
    transform: translateX(50%);
    z-index: 10;
`;

const ButtonDiv = styled.div`
    padding: 10px 1rem;
    border-radius: 19px;
    background-color: white;
    display: flex;
    gap: 11px;
    cursor: pointer;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);

    color: #0875f5;
    font-size: 20px;
    font-weight: bold;

    &:hover {
        box-shadow: none;
        border: 3px solid goldenrod;
    }
`;

export default function MainMap() {
    const lists = useZustandStore((state) => state.listingTarget);
    const setDetailTarget = useZustandStore((state) => state.setDetailTarget);
    const targetMarker = useZustandStore((state) => state.targetMarker);
    const setInputFilter = useZustandStore((state) => state.setInputFilter);
    const isSearchPage = useZustandStore((state) => state.isSearchPage);
    const navigate = useNavigate();
    const map = useRef(null);

    useEffect(() => {
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById("map"); // 지도를 표시할 div
            mapContainer.innerHTML = "";

            const location =
                targetMarker.index !== -1
                    ? {
                          latitude: targetMarker.latitude,
                          longitude: targetMarker.longitude,
                      }
                    : { latitude: 37.575752, longitude: 126.976823 };

            const mapOption = {
                center: new kakao.maps.LatLng(
                    location.latitude,
                    location.longitude
                ), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
            };

            map.current = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

            // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
            const mapTypeControl = new kakao.maps.MapTypeControl();

            // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
            // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
            map.current.addControl(
                mapTypeControl,
                kakao.maps.ControlPosition.TOPRIGHT
            );

            // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            const zoomControl = new kakao.maps.ZoomControl();
            map.current.addControl(
                zoomControl,
                kakao.maps.ControlPosition.RIGHT
            );

            // 여러개 마커 표시하기
            for (let i = 0; i < lists.length; i++) {
                // 마커를 생성합니다
                const marker = new kakao.maps.Marker({
                    map: map.current, // 마커를 표시할 지도
                    position: new kakao.maps.LatLng(lists[i].LAT, lists[i].LOT), // 마커를 표시할 위치
                    title: lists[i].PKLT_NM, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하도록 설정합니다
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
                    infowindow.open(map.current, marker);
                });

                if (i === targetMarker.index)
                    infowindow.open(map.current, marker);
            }

            // 현재 내 위치 마커 표시
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {
                const lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도

                const locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

                // 마커 이미지의 이미지 주소입니다
                const imageSrc =
                    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                // 마커 이미지의 이미지 크기 입니다
                const imageSize = new kakao.maps.Size(24, 35);

                // 마커 이미지를 생성합니다
                const markerImage = new kakao.maps.MarkerImage(
                    imageSrc,
                    imageSize
                );

                // 마커를 생성합니다
                new kakao.maps.Marker({
                    map: map.current,
                    position: locPosition,
                    title: "현재 내 위치입니다.",
                    clickable: true,
                    image: markerImage,
                });

                // 주차장 마커들이 없을 경우, 현재 내 위치로 이동
                if (lists.length === 0) map.current.panTo(locPosition);
            });
        });
    }, [lists, targetMarker, navigate, setDetailTarget]);

    const handleMyLocation = () => {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도

            const locPosition = new kakao.maps.LatLng(lat, lon); // 현재 내 위치

            // 지도 중심을 부드럽게 이동시킵니다
            // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
            map.current.panTo(locPosition);
        });
    };

    const handleSearchButton = () => {
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        // 지도의 중심좌표를 얻어옵니다
        const latlng = map.current.getCenter();

        // 좌표로 행정동 주소 정보를 요청합니다
        geocoder.coord2RegionCode(
            latlng.getLng(),
            latlng.getLat(),
            (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    // 해당 주소 정보의 자치구명으로 검색
                    console.log(result, status);
                    const target = result[0].region_2depth_name;
                    setInputFilter(target);
                }
            }
        );
    };

    return (
        <>
            <MapDiv id="map" />
            <ButtonsDiv>
                <ButtonDiv onClick={handleMyLocation}>
                    <i className="fa-solid fa-location-dot" />
                    <span>현재 내 위치</span>
                </ButtonDiv>
                {isSearchPage && (
                    <ButtonDiv onClick={handleSearchButton}>
                        <i className="fa-solid fa-magnifying-glass" />
                        <span>해당 지역 검색</span>
                    </ButtonDiv>
                )}
            </ButtonsDiv>
        </>
    );
}
