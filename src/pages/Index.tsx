import { HeroSection } from "@/components/HeroSection";
import { SliderSection } from "@/components/SliderSection";
import { MemorySection } from "@/components/MemorySection";
import { VideoSection } from "@/components/VideoSection";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const Index = () => {

  const [showMemories, setShowMemories] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-dark">
      <HeroSection />

      <div className="sticky top-6 z-10 py-4 border-b"> {/* или top-[нужное значение] */}
  <div className="flex flex-col items-center justify-center space-y-4">
    <h2 className="text-lg font-medium">Фото и видео</h2>
    <Switch 
      checked={showMemories}
      onCheckedChange={setShowMemories}
    />
  </div>
</div>
      
      <div id="memories" className={`space-y-0 transition-all duration-700 ease-in-out ${showMemories ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full hidden'}`}>
        {/* Секция 1: Начало */}
        <MemorySection 
          title="Наша первая встреча"
          year="2020"
          imagePosition="left"
          imagePath="20/UQCsySd7cqw.jpg"
          className="bg-background/5"
        >
          <p>
            Помнишь, как мы познакомились? Ты и я по приколу были в дайвинчике и если бы я не
            указал, что слушаю Лану, то мы бы и не познакомились, ты бы просто прошёл мимо.
            А эта фотография ода из первых, которую ты мне прислал (тебе оч идет этот ракурс)
          </p>
          <p className="text-primary/80 font-script text-lg">
            "Иногда одна встреча меняет всё..."
          </p>
        </MemorySection>

        {/* Секция 2: Первое свидание */}
        <MemorySection 
          title="Продолжение нашего 2020"
          year="2020"
          imagePath="20/ud7CAlbkwvg.jpg"
          imagePosition="right"
          className="bg-background/10"
        >
          <p>
            Ну и куда без первого засоса на шее...
          </p>
        </MemorySection>

        {/* Секция 3: Особенный момент */}
        <MemorySection 
          title="Тот самый момент  зимой"
          year="2020"
          imagePath="20/1606152101460.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Помнишь, как мы ходили по зимнему городу и пили мак-кофе, слушая Синатру?
            Псоле этого тот ебалай Кирилл начал мне писать, чтобы я отстал от тебя, так ты его, но то другая история.
            Мне повезло с погодой и человеком рядом в тот день
          </p>
          <p className="text-primary/80 font-script text-lg">
            "Let it snow, Let it snow..."
          </p>
        </MemorySection>

        {/* Секция 4: Совместные приключения */}
        <MemorySection 
          title="Наши приключения"
          year="2020"
          imagePath="20/2TCPvP-EC0k.jpg"
          imagePosition="right"
          className="bg-background/10"
        >
          <p>
            До сих пор помню тот поход в мармелад пешком, когда ты еще духи разбил и нас прогнали, 
            и мы пошли по картам по каким-то трущобам, а к этому был жуткий холод.
          </p>
          <p className="text-accent/80 font-script text-lg">
            "Зато вайбово"
          </p>
        </MemorySection>

        {/* Секция 5: Настоящее и будущее */}
        <MemorySection 
          title="Наш первый новый год"
          year="2020"
          imagePath="20/bwcg2KXQsi4.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Но ничто не сравнится с нашим первым новым годом. Мы резали салаты, готовили, пели караоке
            и открывали подарки
          </p>
          <p className="text-primary/80 font-script text-lg">
            "Это только начало нашей истории..."
          </p>
        </MemorySection>

        <MemorySection 
          title="Счастье от подарка"
          year="2020"
          imagePath="20/IMG_20201231_205026_849.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Помню в тот день ты подврил мне первую книжку на англ. Оскара Уайльда "Дориан Грей"
          </p>
          <p className="text-primary/80 font-script text-lg">
            "Я был безмерно рад"
          </p>
        </MemorySection>


        <MemorySection 
          title="Конец года"
          year="2020"
          imagePath="20/Ls5SCTf1Sc8.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Закончили мы год в тазике, так кк я перебрал с алкоголем и ты пришел ко мне спать в тазике.
          </p>
          <p className="text-primary/80 font-script text-lg">
            "Это было мило"
          </p>
        </MemorySection>

        <MemorySection 
          title="Хочется начать с 14 февраля"
          year="2021"
          imagePath="21/l6w7D_tzbRc.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            В то время я ходил еще в биоклуб и я помню, как ты пришле меня забрать оттуда и отвел к себе домой,
             где мы вручили друг другу подарки
          </p>
        </MemorySection>

        <MemorySection 
          title="Мой первый подарок тебе на 14 февраля"
          year="2021"
          imagePath="21/mtqgFWiJUWg.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Знал бы ты как я ждал его... Я потратил тогда все свои деньги на это, так еще и спешил в биоклуб, заби рая с ПВЗ эту кингу
          </p>
        </MemorySection>


        <MemorySection 
          title="Самоделки"
          year="2021"
          imagePath="21/IMG_20210214_200944.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Как раз в биоклубе для своих вторых половинок мы делали такие подделки, помнишь?
          </p>
          <p className="text-primary/80 font-script text-lg">
            "Ты самый лучший человек на свете, которого я встретил (с нем.)"
          </p>
        </MemorySection>

        <MemorySection 
          title="Продолжая самоделки"
          year="2021"
          imagePath="21/IMG_20201214_011929_182.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Я увидел у тебя самодельную Лану и захотел тебе Уикенда. 
            На что ты согласился и мы весь вечер на это потратили, а может даже и два дня
          </p>
          <p className="text-primary/80 font-script text-lg">
            "The heartless"
          </p>
        </MemorySection>

         <MemorySection 
          title="Не смог найти то, что ты подарил мне в тот день, но нашел лучше!"
          year="2021"
          imagePath="21/IMG_20210214_160102.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Вот убей, а не помню, что ты тогда подарил, так как я волновался за свой подарок. Врое бы сборник Кафки...
          </p>
          
        </MemorySection>
         <MemorySection 
          title="Жара"
          year="2021"
          imagePath="21/sg4OzT5G134.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Пожалуй это был один из самых жарких годов, мы строили такие вот шалаши, пускаи туда вентилятор и прятались
          </p>
          <p className="text-primary/80 font-script text-lg">
            "Ты лучший"
          </p>
        </MemorySection>
         <MemorySection 
          title="Мой день рождения"
          year="2021"
          imagePath="21/IMG_20210603_230608_042.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Тогда снобизм у меня играл сильно и ты подарил то, что я хотел больше всего - монографию Понасенкова
          </p>
          <p className="text-primary/80 font-script text-lg">
            "Понос"
          </p>
        </MemorySection>
         <MemorySection 
          title="Милый ты"
          year="2021"
          imagePath="21/AgzLmW8CG94.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Это ты на дне рождении Ани. Ты выглядишь тут очень мило, потому я решил вставить это сюда
          </p>
        </MemorySection>
         <MemorySection 
          title="Все началось с холода"
          year="2022"
          imagePath="22/IMG_20210213_174418.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Мы купили друг другу маски и ходили так гуляли по режащюму холоду
          </p>
        </MemorySection>
         <MemorySection 
          title="У нас появился фывка"
          year="2022"
          imagePath="22/0E4gv06Bt3Y.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
            Но к сожалению его забрали фролово и болше его нет с нами...
          </p>
          <p className="text-primary/80 font-script text-lg">
            "A little kitty..."
          </p>
        </MemorySection>
         <MemorySection 
          title="Первый полет в Москву"
          year="2022"
          imagePath="22/IMG_0771.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             В том же году я устроился на первую свою работу, накопил и мы поехали в Москву на самолетее вместе впервые,
             где ночевали у Полины и она меня возненавидела
          </p>
          <p className="text-primary/80 font-script text-lg">
            "flight"
          </p>
        </MemorySection>


        <MemorySection 
          title="Прилететли и сразу в мак"
          year="2022"
          imagePath="22/IMG_7845.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Помню Полина все время говорила, что мы как свиньи - не убираем за собой, забавно было
          </p>
          <p className="text-primary/80 font-script text-lg">
            "flight"
          </p>
        </MemorySection>

        <MemorySection 
          title="Приколюхи"
          year="2022"
          imagePath="22/IMG_0785.JPG"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Тогда вы с Полинйо переодевались во всякий бред, было забавно
          </p>
          <p className="text-primary/80 font-script text-lg">
            "flight"
          </p>
        </MemorySection>

        <MemorySection 
          title="Немного милоты"
          year="2022"
          imagePath="22/U-bJnvWUZZU.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             С москвы у меня мало совместных фото, так что вот
          </p>
          <p className="text-primary/80 font-script text-lg">
            "sleeeeeeeeeeeeeeeep"
          </p>
        </MemorySection>

        <MemorySection 
          title="День, когда у меня почти зажила рука"
          year="2022"
          imagePath="22/IMG_20210618_203545.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Тогда мой кот напал на меня и покусал всю руку, я лежал в больнице неделю и вот фото, 
             как ты ждешь чего-то, довольно милое на мой взгляд
          </p>
          <p className="text-primary/80 font-script text-lg">
            "bleeeeeeeeeeeeeeeeeeeeeed"
          </p>
        </MemorySection>

        <MemorySection 
          title="Конец года"
          year="2022"
          imagePath="22/IMG_0101.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Закончили 22 год мы с неким Артемом на катке, фото нет, только видео, так что чекай в другой секции
          </p>
          <p className="text-primary/80 font-script text-lg">
            "end"
          </p>
        </MemorySection>

        <MemorySection 
          title="Снова Москва"
          year="2023"
          imagePath="23/IMG_4165.JPG"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Именно в этом году ты решил открыть для себя клубную жизнь, куда сводил меня и сестру. 
             Тут Вика сделала тебе красивую прическу, но ты ее отверг
          </p>
        </MemorySection>

        <MemorySection 
          title="Просто милое фото с Викой"
          year="2023"
          imagePath="23/IMG_4881.JPG"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Тогда мы с ней помирились и я извинился за свое поведение и не помню почему, 
             но мы прям по снегу бежали до ее дома, чтобы взять что-то и вернуться в клуб на последнем вагоне метро
          </p>
        </MemorySection>

        <MemorySection 
          title="После клуба"
          year="2023"
          imagePath="23/IMG_4162.JPG"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Это мы после клуба вышли ноьчю в зиму и пошли в БК ждать открытия метро, а еще нас Подина прогнала тогда к Вике
          </p>
          <p className="text-primary/80 font-script text-lg">
            "БОГАТЫРЬ"
          </p>
        </MemorySection>

        <MemorySection 
          title="Новая квартира"
          year="2023"
          imagePath="23/KJopzDoif50.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Тогда же твой папа купил квартиру и у тебя были мысли в ней остаться, но ее продали, так что остался один вид оттуда
          </p>
          
        </MemorySection>

        <MemorySection 
          title="Пьяный Тачук"
          year="2023"
          imagePath="23/IMG_7901.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
             
          <p>Тогда я смешал пломбир ивино, он отхлебнул и его откинуло нахуй</p>
          <p className="text-primary/80 font-script text-lg">
            "drunker"
          </p>
        </MemorySection>

        <MemorySection 
          title="Конец года"
          year="2023"
          imagePath="23/IMG_20211008_161818_254.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             К сожалению тогда НГ праздновали мы раздельно - я с Анаит, а ты с семьей, потом увот милое фото твоего
             спонтаннного мне подарка
          </p>
          <p className="text-primary/80 font-script text-lg">
            "end"
          </p>
        </MemorySection>

        <MemorySection 
          title="Начало самого милого года"
          year="2024"
          imagePath="24/2024-06-20 1-18-56 AM.JPG"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             В 2024 году мы поехали с тобой в минн воды и хочу начать с самого милоого фото, где ты, я и
          </p>
          <p className="text-primary/80 font-script text-lg">
            "begin"
          </p>
        </MemorySection>

        <MemorySection 
          title="Начало поездки"
          year="2024"
          imagePath="24/IMG_0067.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Тут мы уже едем в Кисловодск и наш попутчик - профессор с ВГСПУ, которому я запудрил мозги, что физфаке учусь.
             Много говорили про литературу, музыку, искусство
          </p>
          <p className="text-primary/80 font-script text-lg">
            "trip"
          </p>
        </MemorySection>

        <MemorySection 
          title="Кисловодский парк"
          year="2024"
          imagePath="24/IMG_0114.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Вот тут я пытался уговоорить тебя сделать фото, мы тут в том мамом кисловодском парке
          </p>
          <p className="text-primary/80 font-script text-lg">
            "park"
          </p>
        </MemorySection>

        <MemorySection 
          title="Отдых от подъема"
          year="2024"
          imagePath="24/IMG_0163.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Мы тогда шли к долине роз и взбирались на самый вверх, присели вот отдохнуть
          </p>
          <p className="text-primary/80 font-script text-lg">
            "rest"
          </p>
        </MemorySection>
        <MemorySection 
          title="Тебе очень понравилось это дерево"
          year="2024"
          imagePath="24/IMG_0217.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             не знаю, что ты в нем нашел...
          </p>
          <p className="text-primary/80 font-script text-lg">
            "cheating"
          </p>
        </MemorySection>
        <MemorySection 
          title="Пятигорск"
          year="2024"
          imagePath="24/IMG_0418.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Я пытался сфоткать красиво тебя на фоне бештау, но ты был врединой и стоял как столб
          </p>
          <p className="text-primary/80 font-script text-lg">
            "beshtay"
          </p>
        </MemorySection>
        <MemorySection 
          title="На фоне красоты"
          year="2024"
          imagePath="24/IMG_0700.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Я тебя заставлял ногами взбираться на вершину ради этйо фотки
          </p>
        </MemorySection>
        <MemorySection 
          title="Купили пирожки и довольный"
          year="2024"
          imagePath="24/IMG_0551.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Это тебе и мне купил тот дурачок профессор пышки, ну а конец 2024 года ты увидишь в разделе "видео"
          </p>
        </MemorySection>


        <MemorySection 
          title="Этот оказался самым необычным"
          year="2025"
          imagePath="25/IMG_4321.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Впервые ты согласился фотографироваться со мной и делать милые фото
          </p>
        </MemorySection>

        <MemorySection 
          title="Кинопоказ"
          year="2025"
          imagePath="25/IMG_6052.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             В этом году мы часто ходили на кинопоказы
          </p>
        </MemorySection>
        <MemorySection 
          title="Диплом"
          year="2025"
          imagePath="25/E43E7EFD-75D8-4260-BB79-CD310B8B4036.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             А вот ты пришел на вручение моего диплома, а после я в дурку попал т рдылал, что не смог на твой попасть
          </p>
        </MemorySection>
        <MemorySection 
          title="Обед"
          year="2025"
          imagePath="25/IMG_5780.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Мы рядом работали и летом часто ходили на обеды есть твои блины
          </p>
        </MemorySection>
        <MemorySection 
          title="И последнее на 2025 из фото"
          year="2025"
          imagePath="25/IMG_5112.jpg"
          imagePosition="left"
          className="bg-background/5"
        >
          <p>
             Знай, что я люблю тебя, хоть сейчас и трудные времена
          </p>
        </MemorySection>

      </div>

      <div id="videos" className={`space-y-0 transition-all duration-700 ease-in-out ${!showMemories ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
        <VideoSection 
          title="Первый наш новый год, где ты навел себе адскую колыбельную и ушел от нас всех"
          year="2020"
          imagePath="https://player.cloudinary.com/embed/?cloud_name=dbq1afjtu&public_id=VID_20210101_035232_w1ziwi&profile=cld-default"
          className="bg-background/5"
          crossorigin="anonymous"
        >
        </VideoSection>

        <VideoSection 
          title="Чищу твой пк"
          year="2021"
          imagePath="21/IMG_8290.MOV"
          className="bg-background/5"
        >
        </VideoSection>

        <VideoSection 
          title="А это был мой подарок тебе на сколько-то там лет"
          year="2022"
          imagePath="22/-6535063020870842021.mp4"
          className="bg-background/5"
        >
        </VideoSection>

        <VideoSection 
          title="Танцуешь в Москве"
          year="2022"
          imagePath="22/IMG_4179.MOV"
          className="bg-background/5"
        >
        </VideoSection>

        <VideoSection 
          title="Первых поход в клуб с Катей и Аней"
          year="2023"
          imagePath="23/RPReplay_Final1676851992.MP4"
          className="bg-background/5"
        >
        </VideoSection>

        <VideoSection 
          title="Тот же вечер в прайде"
          year="2023"
          imagePath="23/2023-10-29 1-17-41 PM.MOV"
          className="bg-background/5"
        >
        </VideoSection>

        <VideoSection 
          title="Вся семья в сборе"
          year="2024"
          imagePath="24/2024-06-19 9-40-06 PM.MP4"
          className="bg-background/5"
        >
        </VideoSection>

        <VideoSection 
          title="Хном взбирается"
          year="2024"
          imagePath="24/2024-07-25 7-07-13 PM.MOV"
          className="bg-background/5"
        >
        </VideoSection>

        <VideoSection 
          title="Кормим белок в Ессентуках"
          year="2024"
          imagePath="24/2024-07-26 4-01-58 PM.MOV"
          className="bg-background/5"
        >
        </VideoSection>

        <VideoSection 
          title="Рпортаж с Машука"
          year="2024"
          imagePath="24/IMG_0681.MOV"
          className="bg-background/5"
        >
        </VideoSection>

        <VideoSection 
          title="Ждем такси на кладбище"
          year="2025"
          imagePath="25/IMG_4316.MOV"
          className="bg-background/5"
        >
        </VideoSection>

        <VideoSection 
          title="И то, как мы завершили 2025 год!"
          year="2025"
          imagePath="25/2025-01-04 2-30-33 PM.MP4"
          className="bg-background/5"
        >
        </VideoSection>

      </div>
      <Footer />
    </div>


  );
};

export default Index;
