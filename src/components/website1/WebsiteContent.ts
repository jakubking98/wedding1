export const WebsiteContent = {
  menuLinks: [
    {
      label: "O Nas",
      href: "#aboutUs", // Corrected: Removed the leading slash
    },
    {
      label: "Wesele",
      href: "#ceremonyInfo", // Corrected: Removed the leading slash
    },
    {
      label: "Informacje",
      href: "#faq", // Corrected: Removed the leading slash
    },
    {
      label: "Potwierdź",
      href: "#contact", // Corrected: Removed the leading slash
    },
  ],
  CentralText: "Hanna & Jakub",

  //Header Text
  mainHeading: "Hanna & Jakub",
  subHeading: "12 Lipca 2025",
  descriptionHeader: "Zapraszamy na nasz ślub!",
  buttonText: "Potwierdź obecność",
  HeaderImg: "/fotoHeader1.jpg",

  //Zmień kolor w Map aby dopspować kolory leyoutu
  //Map Marker Color
  mapMarkerColor: "#8e5c4e",
  //About Us Section Content | Inaczej Sekcja Nr 1
  aboutUs: {
    title: "Poznajcie Szczęśliwą Parę",
    paragraph1:
      "Jesteśmy wdzięczni za to, że możemy dzielić z Wami naszą radość. Prosimy, abyście byli z nami w tym wyjątkowym dniu.",
    paragraph2:
      "Nie możemy się doczekać, aby podzielić się z Wami tą wyjątkową chwilą.",
    groomName: "Jakub",
    groomTitle: "Pan Młody",
    groomFamily: "Syn Państwa Kowalskich",
    brideName: "Hanna",
    brideTitle: "Panna Młoda",
    brideFamily: "Córka Państwa Nowaków",
    descriptionHeader: "O Nas",
    description:
      "Jesteśmy parą, której drogi splotły się w niespodziewany sposób, a od tego momentu nasze serca biją w jednym rytmie. Wzajemnie odnaleźliśmy w sobie nie tylko miłość, ale i najlepszego przyjaciela, powiernika oraz partnera do wspólnego odkrywania świata. Nasza relacja jest pełna wzajemnego szacunku, wsparcia i niekończącej się radości, którą pragniemy dzielić z Wami w tym wyjątkowym dniu.",
  },

  //SectionUs
  sectionUsContent: {
    mainTitle: "Nasza Historia",
    subTitle: "Poznajcie naszą wspólną drogę.",
    blocks: [
      {
        title: "Jak Się Poznaliśmy",
        description: "Nasza miłość zaczęła się od przypadkowego spotkania...",
        image: "/Section1.jpg",
        width: 500,
        height: 540,
        objectPosition: "top",
        buttonText: "Dowiedz się więcej",
        hiddenBox: {
          description:
            "Chcesz poznać szczegóły naszego pierwszego spotkania? Przeczytaj naszą historię i dowiedz się, jak to się wszystko zaczęło!",
          buttonText: "Czytaj dalej",
        },
      },
      {
        title: "Zaręczyny",
        description: "Wspólna podróż do Włoch zakończyła się niespodzianką!",
        image: "/Section2.jpg",
        width: 500,
        height: 540,
        objectPosition: "top",
        buttonText: "Zobacz zdjęcia",
        hiddenBox: {
          description:
            "Odkryj romantyczne kulisy naszych zaręczyn we Włoszech. Zobacz zdjęcia i poczuj magię tej chwili!",
          buttonText: "Zobacz zdjęcia",
        },
      },
      {
        title: "Wielki Dzień",
        description: "Z radością zapraszamy Was na nasz ślub!",
        image: "/Section3.jpg",
        width: 500,
        height: 540,
        objectPosition: "center",
        buttonText: "Dołącz do nas",
        hiddenBox: {
          description:
            "Nie możemy się doczekać, aby świętować ten wyjątkowy dzień z Wami! Potwierdź swoją obecność i dołącz do nas!",
          buttonText: "Potwierdź obecność",
        },
      },
    ],
  },

  // About Section Content
  aboutSection: {
    mainTitle: "O Nas",
    subTitle: "Nasza historia miłości",
    description: [
      "Cześć! Jesteśmy Hanna i Jakub i z radością chcemy podzielić się z Wami naszą historią. Nasza miłość rozpoczęła się w pewien letni wieczór, który na zawsze odmienił nasze życie.",
      "Od tamtej pory jesteśmy nierozłączni, a każda chwila spędzona razem utwierdza nas w przekonaniu, że jesteśmy dla siebie stworzeni. Z niecierpliwością czekamy na dzień, w którym staniemy na ślubnym kobiercu i powiemy sobie sakramentalne 'tak'.",
      "Chcemy, abyście byli z nami w tym wyjątkowym dniu i wspólnie z nami świętowali naszą miłość. Zapraszamy Was do poznania naszej historii i dołączenia do nas w tym niezapomnianym wydarzeniu!",
    ],
    buttonText: "Poznaj nas bliżej",
    image1: "/About.jpg",
    image2: "/About2.jpg",
  },

  //Wedding Section
  weddingCeremony: {
    title: "Ceremonia Ślubna",
    subtitle: "Zapraszamy na uroczystość zaślubin!",
    description:
      "Z radością zapraszamy Was na uroczystość zaślubin, która odbędzie się w pięknym kościele.",
    placeName: "Kościół pw. Św. Anny",
    placeAddress: "ul. deotmy 15, 00-000 Warszawa",
    date: "12 Lipca 2025",
    dateL: "2025-07-12",
    time: "15:00",
    timeZone: "Europe/Warsaw",
    mapLink:
      "https://www.google.com/maps/place/Ko%C5%9Bci%C3%B3%C5%82+%C5%9Bw.+Anny/@52.2451776,21.0113938,17z/data=!3m1!4b1!4m6!3m5!1s0x471eccf8000000001:0x7260000000000000!8m2!3d52.2451776!4d21.0139687!16s%2Fg%2F11c253545w?entry=ttu", // Replace with actual link
  },
  weddingReception: {
    title: "Przyjęcie Weselne",
    subtitle: "Zapraszamy do wspólnego świętowania!",
    description:
      "Po ceremonii ślubnej zapraszamy na przyjęcie weselne, gdzie będziemy mogli wspólnie świętować i cieszyć się tym wyjątkowym dniem.",
    dressCode: "Elegancki, ale wygodny - chcemy, abyście czuli się swobodnie!",
    placeName: "Dwór w Dolinie",
    placeAddress: "ul. Kasztanowa 98, 05-530 Obręb",
    date: "12 Lipca 2025",
    time: "17:00",
    additionalInfoTitle: "Dodatkowe Informacje",
    additionalInfo:
      "Dla gości dostępny jest przestronny parking. W razie pytań, prosimy o kontakt.",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Restauracja+Wesele+ul.+Weselna+22+Warszawa", // Replace with actual link
  },
};

// FAQ Section Content | Inaczej Sekcja Nr 5
export const faqs = [
  {
    category: "Logistyka i organizacja",
    questions: [
      {
        question: "Gdzie odbędzie się ślub i wesele? (adres, dojazd, parking)",
        answer:
          "Ceremonia ślubna odbędzie się w Kościele pw. Św. Anny przy ul. deotmy 15, 00-000 Warszawa. Przyjęcie weselne odbędzie się w Restauracji Wesele przy ul. Kasztanowa 98, 05-530 Obręb. Dojazd jest możliwy samochodem, a na miejscu dostępny jest przestronny parking.",
      },
      {
        question: "O której godzinie zaczyna się ceremonia/wesele?",
        answer:
          "Ceremonia ślubna rozpocznie się o godzinie 15:00, a przyjęcie weselne o godzinie 17:00.",
      },
      {
        question:
          "Czy jest możliwość noclegu? (jeśli tak, to gdzie i jak zarezerwować?)",
        answer:
          "Tak, dla gości weselnych przygotowaliśmy specjalną ofertę noclegową w pobliskim hotelu. Szczegóły dotyczące rezerwacji przekażemy wkrótce.",
      },
      {
        question:
          "Czy będzie transport dla gości? (np. autobus z kościoła na salę)",
        answer:
          "Tak, zapewniamy transport dla gości z kościoła na salę weselną. Szczegóły dotyczące odjazdu zostaną podane po ceremonii.",
      },
    ],
  },
  {
    category: "Strój i dress code",
    questions: [
      {
        question:
          "Czy obowiązuje określony dress code? (np. elegancki, styl boho, kolor przewodni)",
        answer:
          "Zachęcamy do eleganckiego, ale wygodnego ubioru. Chcemy, abyście czuli się swobodnie i komfortowo.",
      },
      {
        question: "Czy mogę ubrać się na biało? (dla kobiet – zazwyczaj nie)",
        answer:
          "Uprzejmie prosimy, aby kobiety unikały ubioru w kolorze białym, który jest zarezerwowany dla Panny Młodej.",
      },
      {
        question: "Czy panowie muszą mieć garnitur/krawat?",
        answer:
          "Zachęcamy panów do założenia garnituru, ale nie jest to obowiązkowe. Ważne, aby strój był elegancki.",
      },
    ],
  },
  {
    category: "Prezenty i koperty",
    questions: [
      {
        question:
          "Co najlepiej dać w prezencie? (czy para ma listę prezentów, czy preferuje gotówkę?)",
        answer:
          "Najbardziej ucieszymy się z koperty, która pomoże nam w realizacji naszych wspólnych marzeń.",
      },
      {
        question: "Czy jest specjalna skrzynka na koperty?",
        answer:
          "Tak, przy wejściu na salę weselną będzie przygotowana specjalna skrzynka na koperty.",
      },
    ],
  },
  {
    category: "Menu i alkohol",
    questions: [
      {
        question: "Czy będzie opcja dla wegetarian / wegan?",
        answer:
          "Oczywiście! Zadbamy o to, aby nasi goście wegetarianie i weganie również mieli szeroki wybór dań.",
      },
      {
        question: "Czy na weselu będą napoje alkoholowe? (i jakie)",
        answer:
          "Tak, na weselu będzie dostępny szeroki wybór napojów alkoholowych, w tym wino, piwo i wódka.",
      },
      {
        question:
          "Czy mogę przynieść własny alkohol? (czasem pytają o własny alkohol np. whisky)",
        answer:
          "W restauracji dostępny będzie szeroki wybór alkoholi. Prosimy o nieprzynoszenie własnego alkoholu.",
      },
    ],
  },
  {
    category: "Dzieci na weselu",
    questions: [
      {
        question: "Czy mogę przyjść z dziećmi?",
        answer:
          "Tak, dzieci są mile widziane. Będziemy starali się zapewnić im również atrakcje.",
      },
      {
        question: "Czy będzie kącik dla dzieci/animator?",
        answer:
          "Tak, planujemy zorganizować kącik dla dzieci z animatorem, aby najmłodsi goście również dobrze się bawili.",
      },
    ],
  },
  {
    category: "Zabawa i atrakcje",
    questions: [
      {
        question:
          "Czy będzie oczepinowa zabawa? (nie każdy lubi tradycyjne zabawy weselne)",
        answer:
          "Tak, planujemy tradycyjną zabawę oczepinową, ale postaramy się, aby była ona przyjemna dla wszystkich gości.",
      },
      {
        question: "Czy są przewidziane jakieś niespodzianki?",
        answer:
          "Tak, przygotowaliśmy kilka niespodzianek, ale nie możemy zdradzić wszystkich szczegółów!",
      },
      {
        question:
          "Czy mogę zamówić konkretną piosenkę u DJ-a/zespół gra na żywo?",
        answer:
          "Tak, będzie możliwość zamówienia piosenek u DJ-a. Chętnie uwzględnimy Wasze muzyczne preferencje.",
      },
    ],
  },
];
