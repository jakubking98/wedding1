import { GalleryImage } from "./Galery";

export const WebsiteContent2 = {
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

  //Zmień kolor w Map aby dopspować kolory leyoutu
  //Map Marker Color
  mapMarkerColor: "#8e5c4e",

  //Header Text
  mainHeading: "Hanna & Jakub",
  subHeading: "12 Lipca 2025",
  descriptionHeader: "Zapraszamy na nasz ślub!",
  buttonText: "Potwierdź obecność",
  HeaderImg: "/page2/header.png",

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

  // Text for the Wedding Ceremony | Inaczej Sekcja Nr 2
  CeremonyText: {
    topText1: "Z Bożą łaską i błogosławieństwem",
    topText2:
      "Zamiarem naszym jest zawrzeć związek małżeński, który za łaską Bożą odbędzie się:",
    mainText: "Bierzemy Ślub",
    subHeading: "12 Lipca 2025",
    description:
      "Nie możemy się doczekać, aby podzielić się z Wami tą wyjątkową chwilą.",
    buttonText: "Potwierdź obecność",
  },

  // Wedding Details Section Content | Inaczej Sekcja Nr 2 ślub
  weddingCeremony: {
    title: "Ceremonia Ślubna",
    timeRange: "15:00 - 16:00",
    placeName: "Kościół pw. Św. Anny",
    placeAddress: "ul. deotmy 15, 00-000 Warszawa",
    date: "2025-07-12",
    time: "15:00",
    timeZone: "Europe/Warsaw",
    mapLink:
      "https://www.google.com/maps/place/Ko%C5%9Bci%C3%B3%C5%82+%C5%9Bw.+Anny/@52.2451776,21.0113938,17z/data=!3m1!4b1!4m6!3m5!1s0x471eccf8000000001:0x7260000000000000!8m2!3d52.2451776!4d21.0139687!16s%2Fg%2F11c253545w?entry=ttu", // Replace with actual link
  },

  //Wedding Reception Section Content | Inaczej Sekcja Nr 2 wesele
  weddingReception: {
    title: "Przyjęcie Weselne",
    timeRange: "17:00 - 05:00",
    placeName: "Restauracja Wesele",
    placeAddress: "ul. Kasztanowa 98, 05-530 Obręb",
    date: "2025-07-12",
    time: "17:00",
    timeZone: "Europe/Warsaw",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Restauracja+Wesele+ul.+Weselna+22+Warszawa", // Replace with actual link
  },

  // Story Section Content | Inaczej Sekcja Nr 3
  story: {
    title: "Nasza Historia",
    paragraph1:
      "Nasza historia zaczęła się zupełnie niepozornie, od przypadkowego spotkania w kawiarni. Wtedy jeszcze nie wiedzieliśmy, że ten dzień odmieni nasze życie na zawsze. Wymieniliśmy kilka zdań, uśmiechów i numerów telefonów, a reszta potoczyła się już sama. Z każdym kolejnym spotkaniem odkrywaliśmy, jak wiele nas łączy, jak dobrze się rozumiemy i jak bardzo chcemy spędzać ze sobą każdą wolną chwilę.",
    paragraph2:
      "Wspólne pasje, marzenia i plany na przyszłość sprawiły, że nasza relacja rozkwitała w niesamowitym tempie. Od wspólnych podróży, przez wieczory spędzone na rozmowach, aż po wsparcie w trudnych chwilach – zawsze byliśmy dla siebie oparciem. Dziś, patrząc wstecz, wiemy, że to, co nas połączyło, było czymś wyjątkowym. Z radością i ekscytacją patrzymy w przyszłość, gotowi na kolejny rozdział naszej wspólnej historii, już jako mąż i żona.",
  },

  // Gallery Section Content | Inaczej Sekcja Nr 4
  gallery: {
    title: "Nasze wspomnienia",
    description:
      "Zobacz nasze ulubione chwile z życia, które chcielibyśmy z Wami podzielić.",
    quote: {
      text: "Miłość to nie tylko uczucie, to także decyzja, aby być razem na zawsze.",
      author: "Hanna & Jakub",
    },
  },
};

// Gallery Section Content | Inaczej Sekcja Nr 4
export const images: GalleryImage[] = [
  {
    id: 1,
    src: "/page2/gallery/photo1.png",
    alt: "Our engagement day",
    width: 800,
    height: 400,
  },
  {
    id: 2,
    src: "/page2/gallery/photo2.png",
    alt: "Wedding preparation",
    width: 600,
    height: 400,
  },
  {
    id: 3,
    src: "/page2/gallery/photo3.png",
    alt: "Ceremony moment",
    width: 600,
    height: 400,
  },
  {
    id: 4,
    src: "/page2/gallery/photo4.png",
    alt: "Reception celebration",
    width: 600,
    height: 400,
  },
  {
    id: 5,
    src: "/page2/gallery/photo5.png",
    alt: "First dance",
    width: 600,
    height: 400,
  },
  {
    id: 6,
    src: "/page2/gallery/photo6.png",
    alt: "Family photo",
    width: 1200,
    height: 400,
  },
];

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
