﻿$(function () {
    var availableStreets = [
        "Абхазька",
        "Авіаційна",
        "Автобудівельників проїзд",
        "Агабек-Заде",
        "Аґрусова",
        "Азовська",
        "Айвазовського",
        "Акацієва",
        "Албанська",
        "Алмазна",
        "Алмазова Генерала",
        "Алчевської",
        "Ангарна",
        "Ангеловича Митрополита",
        "Антоненка-Давидовича Бориса",
        "Антонича",
        "Антоновича Володимира",
        "Апостола Данила",
        "Аральська",
        "Аркаса Миколи",
        "Арсенальна",
        "Архипенка Олександра",
        "Архівна",
        "Архітекторська",
        "Бабія",
        "Багалія",
        "Багряного Івана",
        "Бажана",
        "Базальтова",
        "Базарна",
        "Бакинська",
        "Балабана Маєра",
        "Балкова",
        "Балтійська",
        "Бальзака",
        "Банаха",
        "Бандери Степана",
        "Бандрівського",
        "Банківська",
        "Барбарисова",
        "Барвінок Ганни",
        "Барвінських",
        "Баронча Садока",
        "Басараб Ольги",
        "Батуринська",
        "Бахматюка",
        "Бачинського",
        "Баштанна",
        "Белзька",
        "Бенцаля Миколи",
        "Бережанська",
        "Березова",
        "Берестяна",
        "Беринди",
        "Бескидська",
        "Бетховена",
        "Біберовича Івана",
        "Бібліотечна",
        "Бігова",
        "Біласа",
        "Білинського Капітана",
        "Білогорща",
        "Білоруська",
        "Білоцерківська",
        "Біляшівського Миколи",
        "Блажкевич",
        "Боберського Івана",
        "Бобинського",
        "Богданівська",
        "Богомольця Академіка",
        "Богуна Івана",
        "Боднарська",
        "Бодянського",
        "Бой-Желенського",
        "Бойківська",
        "Бойчука Михайла",
        "Болбочана Полковника",
        "Болгарська",
        "Бориславська",
        "Боровиковського",
        "Бортнянського Дмитра",
        "Ботанічна",
        "Ботєва",
        "Боткіна",
        "Братів Климових",
        "Братів Міхновських",
        "Братів Рогатинців",
        "Братів Тимошенків",
        "Братня",
        "Бринського",
        "Броварна",
        "Бродівська",
        "Бруснична",
        "Бруснівська",
        "Брюллова",
        "Брюховицька",
        "Бужанська",
        "Бузинова",
        "Бузкова",
        "Буйка Професора",
        "Букова",
        "Буковинська",
        "Буська",
        "Буцманюка Юліяна",
        "Бучми",
        "Вагова",
        "Вагонна",
        "Валова",
        "Варшавська",
        "Васильківського",
        "Васильченка",
        "Вахнянина Анатолія",
        "Вашингтона Джорджа",
        "Веделя",
        "Величка Самійла",
        "Велички Професора",
        "Величковського",
        "Венеціанова",
        "Вербицького Михайла",
        "Вербова",
        "Вересая Остапа",
        "Вернадського",
        "Вернигори ",
        "Верхратського",
        "Вершницька",
        "Весела",
        "Весняна",
        "Ветеранів",
        "Вечірня",
        "Вигін",
        "Виговського Івана",
        "Вигоди",
        "Визвольна",
        "Вилітна",
        "Винниківська",
        "Винниця",
        "Винниченка Володимира",
        "Виноградна",
        "Випасова",
        "Висока",
        "Високий Замок",
        "Височана",
        "Вишенського",
        "Вишиваного",
        "Вишнева",
        "Вівсяна",
        "Відкрита",
        "Війтовича",
        "Вільде Ірини",
        "Вільхова",
        "Вірменська",
        "Вітвера Гартмана",
        "Вітовського Дмитра",
        "Вітрякова",
        "Вітряна",
        "Вічева",
        "Вічева",
        "Вовка Федора",
        "Водна",
        "Водогінна",
        "Возняка Академіка",
        "Волинська",
        "Володимира Великого",
        "Волоська",
        "Волошина Августина",
        "Волошкова",
        "Волощака Андрія",
        "Воля",
        "Воробкевича Сидора",
        "Вороного Миколи",
        "Врізана",
        "Врубеля",
        "Втіха",
        "Вугільна",
        "Вузька",
        "Вулецька",
        "Гавришкевича",
        "Газова",
        "Гайворонського Михайла",
        "Гайдамацька",
        "Гайдучка",
        "Гайова",
        "Гайовської",
        "Галечко Софії",
        "Галицька",
        "Галицька",
        "Галілея",
        "Гамалії",
        "Ганкевича",
        "Ганцова",
        "Гарматія",
        "Гашека Ярослава",
        "Гвардійська",
        "Геологів",
        "Героїв Крут",
        "Герцена",
        "Геца",
        "Гіацинтова",
        "Гіпсова",
        "Гірника Олекси",
        "Глибока",
        "Глиняна",
        "Глинянський Тракт",
        "Глібова",
        "Глінки",
        "Гнатевича Богдана",
        "Гнатюка Академіка",
        "Гніздовського",
        "Гоголя",
        "Годованця",
        "Голинського",
        "Головатого Антона",
        "Головацького",
        "Голубина",
        "Голубовича Сидора",
        "Голубця Миколи",
        "Горбачевського Івана",
        "Горбкова",
        "Гординських",
        "Гордієнка",
        "Горівська",
        "Горіхова",
        "Горліса-Горського Юрія",
        "Горобинна",
        "Городницька",
        "Городоцька",
        "Горської",
        "Господарська",
        "Гостинна",
        "Грабова",
        "Грабовського",
        "Грабянки Григорія",
        "Гранична",
        "Гранітна",
        "Гребінки",
        "Грекова Генерала",
        "Грецька",
        "Гречана",
        "Грибова",
        "Григоренка Генерала",
        "Григоровича",
        "Грицая Генерала",
        "Грінченка",
        "Грузинська",
        "Грушева",
        "Грушевського Михайла",
        "Грюнвальдська",
        "Грядкова",
        "Гулака-Артемовського",
        "Гуні Дмитра",
        "Гуцульська",
        "Гушалевича",
        "Гонти",
        "Грунтова",
        "Дагестанська",
"Дальня",
"Данила Галицького",
"Данилишина Дмитра",
"Дашкевича Романа",
"Двірцева",
"Декарта",
"Демнянська",
"Детька",
"Джерельна",
"Джерельна",
"Дзиндри",
"Дивізійна",
"Диктова",
"Динівська",
"Діаманда",
"Дібровна",
"Дідушка",
"Дніпрової Чайки",
"Дніпровська",
"Дністерська",
"Довбуша Олекси",
"Довга",
"Довженка Олександра",
"Дозвільна",
"Долинського",
"Долішня",
"Донецька",
"Донцова Дмитра",
"Доробок",
"Дорогичинська",
"Дороша",
"Дорошенка Петра",
"Досвітня",
"Доступна",
"Драгана",
"Драгоманова",
"Драй-Хмари",
"Дріжджова",
"Дрогобицька",
"Дрогобича",
"Друкарська",
"Дублянська",
"Дубнівська",
"Дубова",
"Дубровицька",
"Дудаєва Джохара",
"Дунайська",
"Духновича",
"Дучимінської Ольги",
"Емінеску",
"Енергетична",
"Естонська",
"Євського",
"Єрошенка",
"Єфремова Сергія Академіка",
"Жасминова",
"Ждахи",
"Жемчужникова",
"Жижки Яна",
"Житня",
"Житомирська",
"Жнивна",
"Жовківська",
"Жуковського",
"Журавлина",
"Заболотівська",
"Заводська",
"Загірна",
"Загородня",
"Загула Дмитра",
"Заклинських",
"Залізнична",
"Залізняка Максима",
"Залісна",
"Замарстинівська",
"Заміська",
"Замкнена",
"Замкова",
"Заньковецької Марії",
"Заозерна",
"Запашна",
"Заповітна",
"Запольської Габріели",
"Запорізька",
"Зарицьких",
"Засядька Генерала",
"Затишна",
"Захарієвича",
"Збаразька",
"Збиральна",
"Збоїща",
"Зборівська",
"Звенигородська",
"Зв'язкова",
    "Здоров'я",
    "Зелена",
    "Земельна",
    "Землеробна",
    "Зернова",
    "Зерова Миколи",
    "Зигзаг",
    "Зимновідська",
    "Зимова",
    "Зимова Горішня",
    "Зимова Долішня",
    "Золота",
    "Золочівська",
    "Зоряна",
    "Зрубова",
    "Зубрицького",
    "Зубрівська",
    "Зустрічна",
    "Іванова Гора",
    "Івасюка Володимира",
    "Ігорева",
    "Ільмова",
    "Інструментальна",
    "Ірчана",
    "Кавалерідзе Івана",
"Кавказька",
"Каганця Марка",
"Казахська",
"Каліча Гора",
"Калнишевського",
"Каменярів",
"Камінна",
"Кам'янецька",
"Кам'янка",
"Канівська",
"Караджича",
"Караїмська",
"Карбишева",
"Карманського",
"Кармелюка",
"Карпатська",
"Карпинця Івана",
"Карпінського",
"Кастелівка",
"Катедральна",
"Каховська",
"Качали",
"Каштанова",
"Квітки-Основ'яненка",
    "Квітнева",
    "Квітова",
    "Керамічна",
    "Керченська",
    "Кибальчича",
    "Київська",
    "Кирила і Мефодія",
    "Кирилівська",
    "Китайська",
    "Кишинівська",
    "Кінцева",
    "Кленова",
    "Клепарівська",
    "Кльоновича",
    "Княгині Ольги",
    "Княжа",
    "Князя Лева",
    "Князя Мстислава Удатного",
    "Князя Романа",
    "Князя Святослава",
    "Князя Ярослава Осмомисла",
    "Кобзарська",
    "Кобилиці Лук'яна",
    "Кобилянської",
    "Кобринської",
    "Ковалева",
    "Ковалевської",
    "Ковалика Професора",
    "Ковальська",
    "Ковельська",
    "Коверка",
    "Ковжуна Павла",
    "Козацька",
    "Козельницька",
    "Козика Михайла",
    "Козланюка",
    "Козловського",
    "Кокорудза",
    "Колесси Академіка",
    "Коліївщини",
    "Колійна",
    "Колісна",
    "Колодзінського",
    "Колодійська",
    "Колодязьна",
    "Коломийська",
    "Колоскова",
    "Колумба Христофора",
    "Кольберга",
    "Комаринця",
    "Комарова",
    "Кондратюка",
    "Кондукторська",
    "Кониського Олександра",
    "Коновальця Євгена",
    "Конопляна",
    "Конопницької",
    "Конотопська",
    "Конюшинна",
    "Кооперативна",
    "Копальна",
    "Копача",
    "Коперника",
    "Копистинського",
    "Кордуби",
    "Корейська",
    "Корецька",
    "Корінна",
    "Коріятовича",
    "Корнякта",
    "Короленка Володимира",
    "Корольова",
    "Коротка",
    "Корпанюків",
    "Корсунська",
    "Кортумівка",
    "Корякська",
    "Кос-Анатольського",
    "Косинського",
    "Космічна",
    "Костомарова",
    "Костюшка Тадеуша",
    "Котика",
    "Котка",
    "Котляревського",
    "Котлярська",
    "Коциловського",
    "Коцка Адама",
    "Коцюбинського",
    "Кочегарська",
    "Кошиця",
    "Кошова",
    "Кравецька",
    "Кравса Генерала",
    "Кравченко Уляни",
    "Кравчука Михайла Академіка",
    "Крайня",
    "Краківська",
    "Красівська",
    "Краснянська",
    "Кревецького",
    "Кременецька",
    "Крехівська",
    "Крива Липа",
    "Кривоноса Максима",
    "Кривчицька дорога",
    "Кримська",
    "Крип'якевича Академіка",
    "Кричевського Михайла",
    "Кропивницького",
    "Кругла",
    "Кругова",
    "Круп'ярська",
    "Крута",
    "Крушельницьких родини",
    "Крушельницької Соломії",
    "Кубанська",
    "Кубійовича",
    "Кузневича",
    "Кузнярівка",
    "Кузьми",
    "Кукурудзяна",
    "Куликівська",
    "Куліша Пантелеймона",
    "Кульпарківська",
    "Кульчицької",
    "Купали Янки",
    "Купальська",
    "Купчинського",
    "Курбаса Леся",
    "Курильська",
    "Курінна",
    "Курмановича Генерала",
    "Кутова",
    "Кучера Романа Академіка",
    "Кушевича",
    "Кущова",
    "Лаврінського",
"Лазаренка Академіка",
"Лазнева",
"Ламана",
"Ланова",
"Ластів'яча",
"Латвійська",
"Лебедина",
"Левандівська",
"Левинського Івана",
"Левицького",
"Лемика",
"Лемківська",
"Ленона Джона",
"Леонтовича",
"Лепкого Богдана",
"Лесі Українки",
"Ливарна",
"Лижв'ярська",
"Липи Юрія",
"Липинського",
"Липківського Митрополита",
"Липнева",
"Липова Алея",
"Лисеницька",
"Лисенка",
"Листова",
"Листопадна",
"Листопадового чину",
"Литвиненка",
"Литовська",
"Личаківська",
"Лікувальна",
"Лінкольна Авраама",
"Лірницька",
"Лісна",
"Лістаференца",
"Ліська",
"Літня",
"Ліщинова",
"Лобачевського",
"Ловецька",
"Лодія",
"Лотоцького",
"Луганська",
"Лугова",
"Лукасевича",
"Лукаша",
"Лукича",
"Лукіяновича Дениса",
"Луцька",
"Луцького",
"Лучкая",
"Лушпинського",
"Льняна",
"Любачівська",
"Любінська",
"Людкевича Станіслава",
"Люльки Академіка",
"Лютнева",
"Ляйнберга",
"Магазинова",
"Мазепи Гетьмана",
"Маївського",
"Майданна",
"Майорівка",
"Маковея",
"Максимовича Михайла",
"Мала",
"Маланюка Євгена",
"Малехівська",
"Малинова",
"Малицької",
"Малі кривчиці",
"Малковицька",
"Малоголосківська",
"Манастирського",
"Марка Вовчка",
"Мартовича",
"Марунька",
"Маршалівка",
"Масарика",
"Матейка",
"Мацієвича",
"Машиністів",
"Меблярська",
"Медведецького Професора",
"Медова",
"Медової Печери",
"Межова",
"Мележа",
"Мельника",
"Мельничука",
"Менделєєва",
"Менцинського Модеста",
"Меретина Бернарда",
"Металістів",
"Метлинського",
"Метрологічна",
"Механічна",
"Мечникова",
"Микитки Генерала",
"Миклухо-Маклая",
"Миколайчука",
"Мила",
"Милорадович",
"Милятинська",
"Миргородська",
"Мирна",
"Мирного Панаса",
"Мисливська",
"Митна",
"Михальчука",
"Мишуги",
"Мідна",
"Міжгірна",
"Міртова",
"Міцкевича",
"Млинова",
"Мови Василя",
"Могили",
"Могильницького",
"Молдавська",
"Молодіжна",
"Молочна",
"Монгольська",
"Моринецька",
"Морозенка",
"Морозна",
"Моршинська",
"Мостова",
"Мосяжна",
"Моторна",
"Моха",
"Музейна",
"Музики Ярослава",
"Мукачівська",
"Мулярська",
"Мундяк",
"Мурави Марка",
"Мурашка",
"Мурована",
"Мучна",
"Мушака Юрія",
"На Копані",
"На Нивах",
"На Сторожі",
"На Чвертях",
"Навколишня",
"Навої Алішера",
"Навроцького",
"Нагірна",
"Нагірних",
"Над Джерелом",
"Надійна",
"Над'ярна",
 "Назарука",
    "Наливайка",
    "Нарбута Георгія",
    "Народна",
    "Нарцисова",
    "Насипна",
    "Насінна",
    "Наступальна",
    "Наукова",
    "Нафтова",
    "Невелика",
    "Невського Олександра",
    "Некрасова",
    "Немирівська",
    "Нестора Літописця",
    "Нечая",
    "Нечуя-Левицького",
    "Нижанківського Остапа",
    "Низинна",
    "Низова",
    "Низький Замок",
    "Ніжинська",
    "Ніщинського",
    "Новаківського",
    "Новий Світ",
    "Новознесенська",
    "Овочева",
    "Огієнка Івана",
    "Огіркова",
    "Оглоблина",
    "Одеська",
    "Ожешко",
    "Ожинова",
    "Озаркевича",
    "Озерна",
    "Околична",
    "Окружна",
    "Окуневського",
    "Олесницького",
    "Олеся Олександра",
    "Олешківська",
    "Олійна",
    "Ольжича",
    "Опільського",
    "Опришківська",
    "Орельська",
    "Орлика Пилипа",
    "Орлина",
    "Орна",
    "Освицька",
    "Осикова",
    "Остроградських",
    "Острозького",
    "Остряниці Якова",
    "Очаківська",
    "Очеретяна",
    "Павлика",
    "Павлова Академіка",
    "Павлокомська ",
    "Падури",
    "Палія",
    "Панаса Сотника",
    "Панаса Сотника бічна",
    "Панча Петра",
    "Панчишина",
    "Паньківського",
    "Папарівка",
    "Папоротна",
    "Параджанова",
    "Паращука",
    "Паркова",
    "Парова",
    "Паровозна",
    "Парфановичів",
    "Пасіки Галицькі",
    "Пасічна",
    "Пастернака Ярослава",
    "Патона",
    "Пачовського",
    "Пекарська",
    "Перекопська",
    "Перелітна",
    "Перемиська",
    "Переможна",
    "Перехід",
    "Переяславська",
    "Перова",
    "Персенківка",
    "Перфецького",
    "Петлюри Симона",
    "Петрака",
    "Петрицького",
    "Петровського",
    "Петрусенка",
    "Петрушевича Євгена",
    "Пикулицька",
    "Пильникарська",
    "Пимоненка Миколи",
    "Пинська",
    "Пирогівка",
    "Півколо",
    "Північна",
    "Під Голоском",
    "Під дубом",
    "Підвальна",
    "Підгаєцька",
    "Підгірна",
    "Піддубного Івана",
    "Підзамче",
    "Підкови Івана",
    "Підлісна",
    "Підміська",
    "Підмурна",
    "Підрічна",
    "Підстригача Академіка",
    "Пілотів",
    "Піскова",
    "Піша",
    "Планерна",
    "Пластова",
    "Плетенецького",
    "Плугова",
    "Плужника",
    "Плющова",
    "Повітряна",
    "Поворотна",
    "Повстанська",
    "Погідна",
    "Погулянка",
    "Подолинського",
    "Поетична",
    "Пожежників",
    "Покутська",
    "Поліська",
    "Політехнічна",
    "Поліщука Валер'яна",
    "Половинна",
    "Полтави",
    "Полтв'яна",
    "Полуботка",
    "Полуботка Гетьмана",
    "Полуднева",
    "Полунична",
    "Польна",
    "Польова",
    "Помірки",
    "Поморянська",
    "Поперечна",
    "Поповича",
    "Порічкова",
    "Порохова",
    "Потебні",
    "Потелицька",
    "Похила",
    "Почаївська",
    "Поштова",
    "Приблицька бічна",
    "Прилбицька",
    "Природна",
    "Прихильна",
    "Приязна",
    "Прогулкова",
    "Прокоповича",
    "Промислова",
    "Пропелерна",
    "Просвіти",
    "Проста",
    "Простора",
    "Професорська",
    "Пстрака Ярослава",
    "Пташина",
    "Пулюя Івана",
    "Пустомитівська",
    "Пчілки Олени",
    "Пшенична",
    "П'ясецького",
    "Равська",
    "Радехівська",
    "Радість",
    "Райдужна",
    "Райніса Яніса",
    "Раковського",
    "Ранкова",
    "Раппопорта Якова",
    "Ратича",
    "Рахівська",
    "Ребета",
    "Ревуцького",
    "Резедова",
    "Реміснича",
    "Рєпіна",
    "Ржегоржа Франтішека",
    "Рибна",
    "Рилєєва",
    "Рильського",
    "Римлянина",
    "Ринок",
    "Рівна",
    "Рівненська",
    "Рівнинна",
    "Різбярська",
    "Різні",
    "Різьбярська",
    "Рільнича",
    "Річицька",
    "Робітнича",
    "Рожева",
    "Розбіжна",
    "Розвилиста",
    "Розкіш",
    "Розлога",
    "Розсадна",
    "Розточчя",
    "Роксоляни",
    "Ромаданівська",
    "Романицького Бориса",
    "Романчука",
    "Ромашкова",
    "Росиста",
    "Рослинна",
    "Россі Карла",
    "Рубінова",
    "Рубчака Івана",
    "Рудакі",
    "Руданського",
    "Рудненська",
    "Рудницького Академіка",
    "Русових",
    "Руставелі Шота",
    "Руська",
    "Рутковича Івана",
    "Ручай",
    "Рядова",
    "Рясненська",
    "Ряшівська",
    "Сагайдачного",
    "Садибна",
    "Садівнича",
    "Садова",
    "Садовського",
    "Саковича",
    "Саксаганського",
    "Самарська",
    "Самбірська",
    "Самійленка",
    "Самокиша",
    "Самчука Уласа",
    "Санітарна",
    "Сарненська",
    "Сар'яна",
    "Сахарова Андрія Академіка",
    "Свєнціцького Іларіона",
    "Свидницького",
    "Світанкова",
    "Світла",
    "Свободи",
    "Святого Теодора",
    "Святого Юра",
    "Севастопольська",
    "Севери Івана",
    "Сельських",
    "Селянська",
    "Семирадського",
    "Сеньковича",
    "Сербська",
    "Сєченова",
    "Сигнальна",
    "Сигнівка",
    "Симоненка Василя",
    "Синявського",
    "Сихівська",
    "Сихівська бічна",
    "Сімовича Василя",
    "Сінна",
    "Сірка Івана",
    "Січинського",
    "Січнева",
    "Січова",
    "Січових Стрільців",
    "Скельна",
    "Скидана",
    "Скісна",
    "Скляна",
    "Скнилів",
    "Скнилівська",
    "Сковороди",
    "Скорини",
    "Скрипника",
    "Скромна",
    "Сластіона",
    "Сливова",
    "Сліпого Йосипа",
    "Слобідська",
    "Слободівни Марії",
    "Словацького",
    "Слов'янська",
    "Слюсарська",
    "Смаль-Стоцького",
    "Смерекова",
    "Сметани",
    "Сміла",
    "Сміливих",
    "Смолича",
    "Смольського Григорія",
    "Смотрицького",
    "Снігурівська",
    "Сніжна",
    "Снопківська",
    "Соборна",
    "Сокільницька",
    "Соколина",
    "Солов'їна",
    "Солодова",
    "Солом'янка",
    "Сонячна",
    "Соняшникова",
    "Сороки",
    "Сорохтея Осипа",
    "Сорочинська",
    "Сосенка Модеста",
    "Соснова",
    "Сосюри",
    "Спадиста",
    "Спокійна",
    "Сполучна",
    "Сріблиста",
    "Ставова",
    "Ставропігійська",
    "Стадників",
    "Станційна",
    "Станція Личаків",
    "Стара",
    "Старий Ринок",
    "Старицького",
    "Стародубська",
    "Староєврейська",
    "Старознесенська",
    "Староміська",
    "Стеблиста",
    "Стельмаха",
    "Степанівни Олени",
    "Степового",
    "Стефаника",
    "Стеценка",
    "Стецька Ярослава",
    "Стешенка",
    "Стороженка",
    "Стрийська",
    "Стрілецька",
    "Стрімка",
    "Струмок",
    "Студентська",
    "Студинського",
    "Стуса Василя",
    "Суботівська",
    "Судова",
    "Сулими",
    "Сумська",
    "Сусідня",
    "Суха",
    "Сушка",
    "Сушкевича",
    "Східна",
    "Сходова",
    "Сяйво",
    "Сянська",
    "Табірна",
    "Таджицька",
    "Таллінська",
    "Таманська",
    "Танячкевича",
    "Тарасівська",
    "Таращанська",
    "Тарнавка",
    "Тарнавського Генерала",
    "Татарбунарська",
    "Татарська",
    "Творча",
    "Театральна",
    "Теліги Олени",
    "Темницьких",
    "Тена Бориса",
    "Теребовельська",
    "Терлецького",
    "Тернова",
    "Тернопільська",
    "Тершаковців",
    "Тесленка",
    "Теслярська",
    "Технічна",
    "Тиверська",
    "Тиктора",
    "Тисова",
    "Тиха",
    "Тичини",
    "Тіниста",
    "Тісна",
    "Ткацька",
    "Тобілевича",
    "Толстогольва",
    "Томашівська",
    "Томашівського",
    "Топольна",
    "Торгова",
    "Торф'яна",
    "Трависта",
    "Трещаківського",
    "Трильовського",
    "Тролейбусна",
    "Тростинна",
    "Трускавецька",
    "Труша",
    "Трясила Тараса",
    "Туган-Барановського",
    "Тунельна",
    "Тургенєва",
    "Турецька",
    "Туркменська",
    "Турянського",
    "Тучапського",
    "Тюльпанова",
    "Тютюнників",
    "Угнівська",
    "Угорська",
    "Ударна",
    "Ужгородська",
    "Узбецька",
    "Уманська",
    "Університетська",
    "Урожайна",
    "Устияновича",
    "Фабрична",
    "Федорова Івана",
    "Федьковича",
    "Фещенка-Чопівського",
    "Фіалкова",
    "Філатова Академіка",
    "Флінти",
    "Франка Івана",
    "Фредра Олександра",
    "Фурманська",
    "Харківська",
    "Хасевича Ніла",
    "Хвильового Миколи",
    "Хімічна",
    "Хлібна",
    "Хмельницького Богдана",
    "Хмільова",
    "Холмська",
    "Холодна",
    "Холодного",
    "Холодноярська",
    "Хорватська",
    "Хоробрих",
    "Хортицька",
    "Хотинська",
    "Хоткевича Гната",
    "Художня",
    "Хуторівка",
    "Цегельського",
    "Центральний проїзд",
    "Церетелі",
    "Цетнерівка",
    "Цехова",
    "Циганівка",
    "Чагарникова",
    "Чайковського",
    "Чарнецького Єпископа",
    "Червона",
    "Червоної Калини",
    "Черемхова",
    "Черемшини",
    "Черешнева",
    "Черкаська",
    "Чернеча Гора",
    "Черника",
    "Чернівецька",
    "Чернігівська",
    "Чесанівська",
    "Чехова",
    "Чечета",
    "Чигиринська",
    "Чижевського",
    "Чикаленка",
    "Чмоли Івана",
    "Чоловського",
    "Чорновола Вячеслава",
    "Чорноморська",
    "Чубинського Павла",
    "Чуваська",
    "Чугайстра",
    "Чукаріна",
    "Чумацька",
    "Чупринки",
    "Чупринки Генерала",
    "Чучмана",
    "Шараневича Івана",
    "Шатківського",
    "Шафарика",
    "Шахтарська",
    "Шашкевича Маркіяна",
    "Шведська",
    "Шевська",
    "Шевченка",
    "Шевченка",
    "Шептицьких",
    "Шеремети",
    "Широка",
    "Шишманова Івана",
    "Шімзерів",
    "Шкільна",
    "Шкіряна",
    "Шкрібляків",
    "Шолом-Алейхема",
    "Шопена",
    "Шпитальна",
    "Шполянська",
    "Шумського",
    "Шухевича",
    "Щекавицька",
    "Щепкіна",
    "Щепова",
    "Щирецька",
    "Щоголева",
    "Щурата",
    "Юнаківа Генерала",
    "Юнацька",
    "Яблунева",
    "Яворівська",
    "Яворницького Дмитра",
    "Яворського Стефана",
    "Яловець",
    "Ялтинська",
    "Янева",
    "Яновського Юрія",
    "Януша",
    "Японська",
    "Яреми Професора",
    "Яричівська",
    "Ярова",
    "Ярослава Мудрого",
    "Ярославена",
    "Ярославенка",
    "Ярошинської",
    "Ясна",
    "Яцкова Михайла"
    ];

    $("#placeFromTextBoxId").autocomplete({
        source: availableStreets,
        minLength: 0,
        maxLength: 20
    });
    $("#placeToTextBoxId").autocomplete({
        source: availableStreets,
        minLength: 0,
        maxLength: 20
    });
});