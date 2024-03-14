
// 宣告變數
const navTabs = document.querySelector('.nav-tabs');
const cardContainer = document.querySelector('.tab-content');
// const navs = document.querySelectorAll('.nav-item');
// const tabContents = document.querySelectorAll('.tab-pane');
// const cardResults = document.querySelectorAll('.card-all');
// const locContent = document.querySelectorAll('.tab-pane h1');
console.log(cardContainer);
// 宣告地區陣列
const locTypeArr = ['全台','北部','中部','南部','東部','離島']
const locArr = [
    [
        '基隆市', '臺北市', '新北市', '桃園市', '新竹縣', '新竹市', '宜蘭縣',
        '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣',
        '嘉義縣', '嘉義市', '臺南市', '高雄市', '屏東縣', '澎湖縣',
        '花蓮縣', '臺東縣',
        '金門縣', '連江縣',
    ],
    ['基隆市', '臺北市', '新北市', '桃園市', '新竹縣', '新竹市', '宜蘭縣'],
    ['苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣'],
    ['嘉義縣', '嘉義市', '臺南市', '高雄市', '屏東縣', '澎湖縣'],
    ['花蓮縣', '臺東縣'],
    ['金門縣', '連江縣'],
];
const allLocArr = locArr[0];
// 宣告空陣列儲存API資料
const newLocArr = {};

fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-2497FEFB-378D-4EE8-B9BE-C99ACEB8E680')
    .then((res) => {
        return res.json();
    }).then((data) => {

        resetLocArr(data);
        //tabs 事件監聽
        locTypeArr.forEach((item,index)=>{
            navTabs.innerHTML += `
            <li class="nav-item" role="presentation">
            <button class="nav-link border-0 text-black fs-4 w-100" id="home-tab" data-bs-toggle="tab"
                data-bs-target="#home-tab-pane" type="button" role="tab">${item}</button>
            </li>
            `;
            const navLinks = document.querySelectorAll('.nav-link');
            addActive(navLinks);
            // console.log(navLinks);
            cardContainer.innerHTML += `
            <div class="tab-pane fade show px-2 pt-3 border-0 rounded-bottom-4 fw-bold" id="home-tab-pane"
                role="tabpanel" tabindex="0">
                <div class="card-all d-flex justify-content-center flex-wrap gap-4">
                    
                </div>
            </div>
            `;
            const cardResults = document.querySelectorAll('.card-all');
            cardResults[index].innerHTML = '';
            buildContent( cardResults,index);
        });

        function addActive(link) {
            link.forEach((navlink)=>{
                console.log(navlink);
            })
        }


    });



// fn 將api資料存進newLocArr
function resetLocArr(meterial) {
    const locAll = meterial.records.location

    locAll.forEach((loc, locIndex) => {
        const locationName = loc.locationName;
        const weather = loc.weatherElement[0];
        const rain = loc.weatherElement[1];
        const minTemp = loc.weatherElement[2];
        const feel = loc.weatherElement[3];
        const maxTemp = loc.weatherElement[4];

        newLocArr[locationName] = {
            locName: locationName,
            weather: weather,
            rain: rain,
            minTemp: minTemp,
            feel: feel,
            maxTemp: maxTemp,
        };
    });
};

// fn 生成畫面
function buildContent(cardResult,index) {
    allLocArr.forEach((loc) => {
        const locData = newLocArr;
        // 使用判斷式判斷頁籤所屬地區
        if (locArr[index].includes(loc)) {
            // 生成內容
            for (let i = 0; i <= 2; i++) {
                const dayArr = ['今晚明晨', '明日白天', '明日晚上'];
                // 使用dataset改變CSS偽元素的content內容
                cardResult[index].innerHTML += `
                <div class="locName">${loc}</div>
                <div class="card-content d-flex flex-wrap gap-3 px-5 py-3 border-5 border-bottom rounded-top-3 border-dark-subtle  bg-light" >
                    <div class="card-content-left">
                        <h3 class="fw-bolder">${dayArr[i]}</h3>
                        <p class="temperature m-0">
                            ${locData[loc].minTemp.time[i].parameter.parameterName}~
                            ${locData[loc].maxTemp.time[i].parameter.parameterName}℃</p>
                        <p class="feel m-0">${locData[loc].feel.time[i].parameter.parameterName}</p>
                        <p class="rainy">
                            <i class="fa-solid fa-umbrella"></i>
                             : ${locData[loc].rain.time[i].parameter.parameterName}%
                        </p>                            
                    </div>
                    <div class="pic ms-2 d-flex align-content-center">
                        <img src="${changeImg(locData[loc].weather.time[i].parameter.parameterName, i)}" alt="${locData[loc].weather.time[i].parameter.parameterName}"  style="width: 100px; height: 100px;">
                    </div>
                </div>`;
            };
 


        };
    });
};




// fn 換圖片
function changeImg(string, index) {
    let change;
    let imgArr = [
        './img/01.svg',
        './img/02.svg',
        './img/05.svg',
        './img/09.svg',
        './img/10.svg',
        './img/12.svg',
        './img/01-night.svg',
        './img/02-night.svg',
        './img/03-night.svg',
        './img/13.svg',
    ];


    if (index == 1 && string.includes('晴天')) {
        change = imgArr[0];
    } else if (index == 1 && string.includes('晴') && string.includes('多雲')) {
        change = imgArr[1];
    } else if (string.includes('雨')) {
        change = imgArr[2];
    } else if (string.includes('陰天')) {
        change = imgArr[3];
    } else if (string.includes('陰') && string.includes('多雲')) {
        change = imgArr[4];
    } else if (index == 1 && string.includes('多雲')) {
        change = imgArr[5];
    } else if (index !== 1 && string.includes('晴天')) {
        change = imgArr[6];
    } else if (index !== 1 && string.includes('晴') && string.includes('多雲')) {
        change = imgArr[7];
    } else if (index !== 1 && string.includes('多雲')) {
        change = imgArr[8];
    } else {
        change = imgArr[9];
    };
    return change;
};

