const data = [{
        imgSrc : 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/DungeonsAndDragons/DnD_starter-set_box_3D-roznica-209x273.jpg',
        title : 'Dungeons and Dragons. Стартовый набор',
        desc : 'Ваш первый шаг к легенде',
        people : '2-6',
        time: '120+',
        age: '12+'
    },
    {
        imgSrc : 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Ujas_Arkhema/UA_cardgame/JKI_UjasArkhama-209x273.jpg',
        title : 'Ужас Аркхэма. Карточная игра',
        desc : 'Столкнитесь с потаёнными страхами!',
        people : '1-2',
        time: '60-120',
        age: '14+'
    },
    {
        imgSrc : 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Gloomhaven/Gloomhaven_mrachnaja-gavan_3D_roznica-209x273.jpg',
        title : 'Gloomhaven. Мрачная Гавань',
        desc : 'Величайшее приключение века',
        people : '1-4',
        time: '30-120',
        age: '13+'
    },
    {
        imgSrc : 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Eldritch_horror/EH00-209x273.jpg',
        title : 'Древний Ужас',
        desc : 'Конец света близок!',
        people : '1-8',
        time: '120-280',
        age: '13+'
    },
    {
        imgSrc : 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Munchkin/Munchkin/Munchkin00-209x273.jpg',
        title : 'Манчкин',
        desc : 'Хапай сокровища, бей монстров!',
        people : '3-6',
        time: '30+',
        age: '12+'
    },
    {
        imgSrc : 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Arkham_Horror/3rd_edition/AH_3ed_box_3D_roznica-209x273.jpg',
        title : 'Ужас Аркхэма. Третья редакция',
        desc : 'Погрузитесь в бездну неведомого!',
        people : '1-6',
        time: '120-180',
        age: '14+'
    },
    {
        imgSrc : 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Explosive_Kitten/Vzrivnie-kotyata_3D_roznica-209x273.jpg',
        title : 'Взрывные котята',
        desc : 'Милые пушистики смертельно опасны!',
        people : '2-5',
        time: '15+',
        age: '10+'
    },
    {
        imgSrc : 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Mesto_prestuplenia/Mesto_Prestupleniya00-209x273.jpg',
        title : 'Место преступления',
        desc : 'Станьте величайшим детективом в мире!',
        people : '1-4',
        time: '60-90',
        age: '12+'
    },
    {
        imgSrc : 'https://hobbygames.cdnvideo.ru/image/cache/hobbygames_beta/data/HobbyWorld/Neuderzhimye_edinorozhki/neuderzhimye_edinorozhki_00-209x273.jpg',
        title : 'Неудержимые единорожки',
        desc : 'Безумное веселье и полное разрушение!',
        people : '2-8',
        time: '30-60',
        age: '12+'
    },
]

const template = {
    imgSrc : '',
    title : '',
    desc : '',
    people : '',
    time: '',
    age: ''
}

function render(template) {
    return `
    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div class="product-item">
            <div class="product-item__content">
                <div class="image">
                    <a href="">
                        <img src="${template.imgSrc}"
                            title="${template.title}"
                            alt="${template.title}" loading="lazy">
                    </a>
                </div>

                <div class="name-desc">
                    <a class="name" href="#"
                        title="${template.title}">
                        ${template.title}
                    </a>
                    <div class="desc">
                        ${template.desc}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

`
<div class="params">
                    <div class="params__item players">
                        <i class="icon icon2-people"></i>
                        <span>${template.people}</span>
                    </div>
                    <div class="params__item time">
                        <i class="icon icon2-timer"></i>
                        <span>${template.time}</span>
                    </div>
                    <div class="params__item age">
                        <div class="age__number">${template.age}</div>
                    </div>
                </div>`


const contentSpawner = document.getElementById('content-spawner')

for (const i of data) {
    contentSpawner.innerHTML += render(i)
}