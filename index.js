const colors = [
    { nameJP: "桜色", colorCode: "#FFDBED" },
    { nameJP: "からくれない", colorCode: "#E3557F" },
    { nameJP: "さんご色", colorCode: "#FF87A0" },
    { nameJP: "紅梅（こうばい）色", colorCode: "#E08899" },
    { nameJP: "茜（あかね）色", colorCode: "#A0283A" },
    { nameJP: "朱色", colorCode: "#ED514E" },
    { nameJP: "れんが色", colorCode: "#974E33" },
    { nameJP: "栗色", colorCode: "#754C38" },
    { nameJP: "山吹色", colorCode: "#FFA500" },
    { nameJP: "黄土色", colorCode: "#C18A39" },
    { nameJP: "芥子（からし）色", colorCode: "#CDA966" },
    { nameJP: "鶯（うぐいす）色", colorCode: "#71714A" },
    { nameJP: "萌黄（もえぎ）", colorCode: "#96AA3D" },
    { nameJP: "松葉色", colorCode: "#6E815C" },
    { nameJP: "若竹色", colorCode: "#49A581" },
    { nameJP: "青磁色", colorCode: "#80AA9F" },
    { nameJP: "空色", colorCode: "#95C0EC" },
    { nameJP: "藍色", colorCode: "#2E4B71" },
    { nameJP: "るり色", colorCode: "#3451A4" },
    { nameJP: "かきつばた色", colorCode: "#4C5DAB" },
    { nameJP: "群青（ぐんじょう）色", colorCode: "#414FA3" },
    { nameJP: "ききょう色", colorCode: "#4A49AD" },
    { nameJP: "なす紺", colorCode: "#47384F" },
    { nameJP: "あやめ色", colorCode: "#C27BC8" },
    { nameJP: "牡丹（ぼたん）色", colorCode: "#C24DAE" },
    { nameJP: "生成り（きなり）色", colorCode: "#F0E2E0" },
    { nameJP: "ワインレッド", colorCode: "#83274E" },
    { nameJP: "ボルドー", colorCode: "#55353B" },
    { nameJP: "ベビーピンク", colorCode: "#FFC9D2" },
    { nameJP: "カーマイン", colorCode: "#BE1E3E" },
    { nameJP: "バーミリオン", colorCode: "#ED514E" },
    { nameJP: "スカーレット", colorCode: "#DE4335" },
    { nameJP: "サーモンピンク", colorCode: "#FFA594" },
    { nameJP: "チョコレート", colorCode: "#52372F" },
    { nameJP: "ピーチ", colorCode: "#EBC0AF" },
    { nameJP: "マリーゴールド", colorCode: "#FFA000" },
    { nameJP: "ベージュ", colorCode: "#C1AB96" },
    { nameJP: "セピア", colorCode: "#4A3B2A" },
    { nameJP: "カーキー", colorCode: "#9A753A" },
    { nameJP: "ブロンド", colorCode: "#E3B466" },
    { nameJP: "クリームイエロー", colorCode: "#E8D5AF" },
    { nameJP: "カナリヤ", colorCode: "#F7D54E" },
    { nameJP: "オリーブ", colorCode: "#605627" },
    { nameJP: "レモンイエロー", colorCode: "#E8C800" },
    { nameJP: "オリーブグリーン", colorCode: "#565838" },
    { nameJP: "コバルトグリーン", colorCode: "#5DC288" },
    { nameJP: "エメラルドグリーン", colorCode: "#4DA573" },
    { nameJP: "ビリジアン", colorCode: "#156F5C" },
    { nameJP: "ターコイズブルー", colorCode: "#399ECC" },
    { nameJP: "マリンブルー", colorCode: "#005175" },
    { nameJP: "シアン", colorCode: "#219DDD" },
    { nameJP: "スカイブルー", colorCode: "#95C0EC" },
    { nameJP: "ベビーブルー", colorCode: "#ABBDDA" },
    { nameJP: "コバルトブルー", colorCode: "#2863AB" },
    { nameJP: "ネービーブルー", colorCode: "#333C5E" },
    { nameJP: "ウルトラマリンブルー", colorCode: "#414FA3" },
    { nameJP: "バイオレット", colorCode: "#6D52AB" },
    { nameJP: "ラベンダー", colorCode: "#9E8EAE" },
    { nameJP: "モーブ", colorCode: "#835FA8" },
    { nameJP: "パープル", colorCode: "#A260BF" },
    { nameJP: "マゼンタ", colorCode: "#C949A2" },
    { nameJP: "アイボリー", colorCode: "#E3D4CA" },
    { nameJP: "シルバーグレイ", colorCode: "#A0A0A0" },
    { nameJP: "チャコールグレイ", colorCode: "#4E4854" }
];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function updateColor() {
    const selectedColor = getRandomColor();
    const colorBox = document.querySelector('.color-box');
    colorBox.style.backgroundColor = selectedColor.colorCode;
    colorBox.style.color = getContrastColor(selectedColor.colorCode);
    document.getElementById('colorNameJP').textContent = selectedColor.nameJP;
    document.getElementById('colorCode').textContent = selectedColor.colorCode;
}

function getContrastColor(hex) {
    // Calculate brightness of the color
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    // Return white for dark colors, black for light colors
    return brightness < 128 ? '#FFFFFF' : '#000000';
}

// 初期表示
updateColor();

// リロード時に色を更新
window.addEventListener('load', updateColor);
