// 설명 데이터 배열 (각각의 아이콘에 대한 제목과 설명)
const descriptions = [
    { title: "Image 1", description: "This is the description for Image 1." },
    { title: "Image 2", description: "This is the description for Image 2." },
    { title: "Image 3", description: "This is the description for Image 3." },
    { title: "Image 4", description: "This is the description for Image 4." },
    { title: "Image 5", description: "This is the description for Image 5." },
    { title: "Image 6", description: "This is the description for Image 6." },
    { title: "Image 7", description: "This is the description for Image 7." },
    { title: "Image 8", description: "This is the description for Image 8." },
    { title: "Image 9", description: "This is the description for Image 9." },
];

// 팝업 표시 함수
function showPopup(title, description) {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");

    popupTitle.textContent = title; // 제목 업데이트
    popupDescription.textContent = description; // 설명 업데이트

    popup.style.display = "flex"; // 팝업 표시
}

// 팝업 숨김 함수
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // 팝업 숨김
}
