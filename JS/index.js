// 宣告變數
const skillContent = document.querySelector('.skill');
const portfolio = document.querySelector('.portfolio');
console.log(portfolio);
// --技能區圖片--
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
            '',
        ],
        dataSets: [
            'Word',
            'PowerPoint',
            'Excel',
        ]
    },
    {
        name: '統計分析',
        imgPaths: [
            '',
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
})

// --作品集區--



// 點擊複製功能


// test





