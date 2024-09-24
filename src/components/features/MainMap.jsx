import styled from "@emotion/styled";
import { useEffect } from "react";

const MapDiv = styled.div`
    flex: 1;
    height: 100vh;
`;

export default function MainMap() {
    useEffect(() => {
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById("map"); // 지도를 표시할 div
            const mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
            };
            const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
            // 마커가 표시될 위치입니다
            const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
            const marker = new kakao.maps.Marker({
                position: markerPosition,
            });
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
        });
    }, []);

    return <MapDiv id="map">map</MapDiv>;
}
