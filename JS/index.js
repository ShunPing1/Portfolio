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
            'img/PS.png',
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
        <h3>${skill.name}</h3>
        <hr>
        <div class="skill-btns">
                ${dataSetContent}
        </div>
    </div>
    `;
});
// --作品集區--
const portfoContent = document.querySelector('.portfolio-content');
// 宣告portfoArr陣列，以物件形式儲存陣列資料
const portfoArr = [
    {
        name: '前端工程',
        items: [
            '專案實作-龍格畫室',
            '切版-微軟官網(RWD)',
            'Bootstrap-RWD',
            'API串接-天氣小卡',
            '色弱遊戲',
            'Vue實作',
        ],
        paths: [
            'https://112-10-fcu-longer.dev-hub.io/',
            'Bootstrap_practise/microsoft-website/microsoft-homepage-v3.html',
            'Bootstrap_practise/RWD/bootstrap-HW.html',
            'Bootstrap_practise/weather-card/weatherCard-bootstrap-HW.html',
            'JS_practise/color-game/color-blind-HW.html',
            'https://112-10-fcu-longer.dev-hub.io/',
        ],
        imgPaths: [
            '',
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
            'Google Art 網頁模擬',
            'APP介面開發',
        ],
        paths: [
            'https://www.figma.com/proto/TSoqZSBdRAsDweOiz1JxvN/%E7%94%A2%E6%A5%AD%E6%96%B0%E5%B0%96%E5%85%B5?type=design&node-id=109-753&t=BexkAuJv5lKPbuDW-1&scaling=scale-down&page-id=0%3A1&mode=design',
            'https://www.figma.com/proto/Cpw6KGxd4y9McQWWX45cJw/Untitled?type=design&node-id=54-257&t=47ncpxbpTed1rs7d-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=22%3A688&show-proto-sidebar=1',
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

// PS-lightbox內容
const boxes = document.querySelector('.boxes');
let swiperArr = [
    {
        name: 'img-1',
        workName: '人像',
        imgPath: 'img/ps_work/human_after.png',
        path: 'img/ps_work/human_finsh.png',
    },
    {
        name: 'img-2',
        workName: '影像編修',
        imgPath: 'img/ps_work/wedding_after.png',
        path: 'img/ps_work/wedding_finish.png',
    },
    {
        name: 'img-3',
        workName: 'Mockup',
        imgPath: 'img/ps_work/mockup.png',
        path: 'img/ps_work/Mockup_finish.png',
    },
    {
        name: 'img-4',
        workName: '影像合成',
        imgPath: 'img/ps_work/synthesis_finish.png',
        path: 'img/ps_work/synthesis_final.png',
    },
];
let dataSetArr = [
    'example-1',
    'example-2',
];
// 使用dataSet陣列進行forEach達到重複生成HTML內容
dataSetArr.forEach((dataSet) => {
    swiperArr.forEach((item) => {
        boxes.innerHTML += `
        <div class="box" style="background-image: url(${item.imgPath});">
            <a class="example-image-link" href="${item.path}" data-lightbox="${dataSet}" target="_blank">
                <div class="mask">${item.workName}</div>
            </a>
        </div>
        `;
    });
})

const boxs = document.querySelectorAll('.box');

// 輪播動畫暫停
boxs.forEach((box) => {
    box.addEventListener('mouseenter', () => {
        boxes.style.animationPlayState = 'paused';
    })
    box.addEventListener('mouseout', () => {
        boxes.style.animationPlayState = 'running';
    })
});

// 點擊複製功能
const copyContents = document.querySelectorAll('.copyContent');
console.log(copyContents);
copyContents.forEach((copyContent) => {
    console.log(copyContent.innerText);
    copyContent.addEventListener('click', clickCopy)


})
// 避免每次foreach遍歷時，重複執行clipboar動作因此將function額外寫
function clickCopy(event) {
    const copyElement = event.target;
    const text = copyElement.textContent;
    navigator.clipboard.writeText(text)
    .then(() => {
    alert('複製成功!');
    })
    .catch((error) => {
        alert('複製失敗', error);
    });

}

// 漢堡條開關
const hamBtn = document.querySelector('.ham-menu');
const hamMask = document.querySelector('.menu-mask');
const menuContent = document.querySelector('.nav-btn');
const lines = document.querySelectorAll('.line');
let hamState = false;
hamBtn.addEventListener('click',()=>{
    hamState = !hamState;
    console.log(hamState);
    if(hamState){
        hamMask.classList.add('mask-open');
        document.body.style.overflow = 'hidden';
        menuContent.classList.add('menuOpen');
        lines[0].classList.add('line-top');
        lines[1].classList.add('line-middle');
        lines[2].classList.add('line-bottom');

    }else{
        hamMask.classList.remove('mask-open');
        document.body.style.overflow = 'visible';
        menuContent.classList.remove('menuOpen');
        lines[0].classList.remove('line-top');
        lines[1].classList.remove('line-middle');
        lines[2].classList.remove('line-bottom');
    }

})
// 點擊nav-link關閉菜單
const navLinks = document.querySelectorAll('.nav-link');
console.log(menuContent);
navLinks.forEach((navLink)=>{
    navLink.addEventListener('click',()=>{
        hamState = false;
        hamMask.classList.remove('mask-open');
        document.body.style.overflow = 'visible';
        menuContent.classList.remove('menuOpen');
        lines[0].classList.remove('line-top');
        lines[1].classList.remove('line-middle');
        lines[2].classList.remove('line-bottom');
    })
})



// test





