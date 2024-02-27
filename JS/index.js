// --技能區圖片--
const skillContent = document.querySelector('.skill');
const portfolio = document.querySelector('.portfolio');
// 宣告skillArr陣列，以物件形式儲存陣列資料
let skillArr = [
    {
        name: '前端工程',
        imgPaths: [
            'img/html.webp',
            'img/CSS.png',
            'img/JS.webp',
            'img/Vue.png',
            'img/Bootstrap.png',
            'img/tailwind.svg',
        ],
        dataSets: [
            'HTML',
            'CSS',
            'Javascript',
            'Vue.js',
            'Bootstrap',
            'Tailwind',
        ]
    },
    {
        name: '介面設計',
        imgPaths: [
            'img/Figma.png',
        ],
        dataSets: [
            'Figma',
        ]
    },
    {
        name: '影像處理',
        imgPaths: [
            'img/Ps.png',
            'img/Ai.png',
        ],
        dataSets: [
            'Photoshop',
            'illustrator',
        ]
    },
    {
        name: '文書編輯',
        imgPaths: [
            'img/word.png',
            'img/excel.png',
            'img/powerpoint.png',
        ],
        dataSets: [
            'Word',
            'Excel',
            'PowerPoint',
        ]
    },
    {
        name: '統計分析',
        imgPaths: [
            'img/spss.png',
        ],
        dataSets: [
            'SPSS',
        ]
    },
];
skillArr.forEach((skill) => {
    let imgPathContent = '';
    let dataSetContent = '';
    skill.dataSets.forEach((dataSet, index) => {
        dataSetContent += `<div class="skill-btn" data-skill="${dataSet}"  style="background-image: url(${skill.imgPaths[index]});"></div>`;
    });
    skillContent.innerHTML += `
    <div>
        <p>${skill.name}</p>
        <hr>
        <div class="skill-btns">
                ${dataSetContent}
        </div>
    </div>
    `;
});
// --作品集區--
const portfoContent = document.querySelector('.portfolio-content');
console.log(portfoContent);
// 宣告portfoArr陣列，以物件形式儲存陣列資料
const portfoArr = [
    {
        name: '前端工程',
        items: [
            '專案實作-龍格畫室',
            '切版練習-微軟官網',
            'API串接-天氣小卡',
            'Vue實作',
            'Bootstrap應用',
        ],
        paths: [
            'https://112-10-fcu-longer.dev-hub.io/',
            'https://112-10-fcu-longer.dev-hub.io/',
            'https://112-10-fcu-longer.dev-hub.io/',
            'https://112-10-fcu-longer.dev-hub.io/',
            'https://112-10-fcu-longer.dev-hub.io/',
        ],
        imgPaths: [
            '',
            '',
            '',
            '',
            '',
        ],
    },
    {
        name: 'Github',
        items: [
            '點此進入GitHub',
        ],
        paths: [
            'https://github.com/ShunPing1',
        ],
        imgPaths: [
            '',
        ],
    },
    {
        name: 'Figma',
        items: [
            '網頁介面試排',
            'APP介面開發',
        ],
        paths: [
            'https://112-10-fcu-longer.dev-hub.io/',
            'https://112-10-fcu-longer.dev-hub.io/',
        ],
        imgPaths: [
            '',
            '',
        ],
    },
];
portfoArr.forEach((portfoItem) => {

    let itemsContent = '';

    portfoItem.items.forEach((item, index) => {
        console.log(item);
        itemsContent += `
            <a href="${portfoItem.paths[index]}" target="_blank">
                <div class="img">
                    <h2>${item}</h2>
                </div>
            </a>
        `;

    })

    portfoContent.innerHTML += `
    <h2>${portfoItem.name}</h2>
    <hr>
    <section>
        ${itemsContent}
    </section>
    `;
});


// 點擊複製功能


// test





