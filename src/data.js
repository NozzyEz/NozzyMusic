import {v4 as uuidv4} from 'uuid';

function ChillHop() {
  return [
    {
      id: uuidv4(),
      name: 'Evenfall',
      author: 'Aarigod',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
      colors: ['#BAD07B', '#1E170F'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13007',
      active: true,
    },
    {
      id: uuidv4(),
      name: 'Funkaholic',
      author: 'Flitz & Suppe',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg',
      colors: ['#7A99AD', '#DA8A8F'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8242',
      active: false,
    },
    {
      id: uuidv4(),
      name: 'Home Court',
      author: 'Blue Wednesday & Shopan',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg',
      colors: ['#5058A0', '#A56D9E'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11233',
      active: false,
    },
    {
      id: uuidv4(),
      name: 'Peaches',
      author: 'Philanthrope & The Field Tapes',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg',
      colors: ['#8AA85F', '#9BB2B6'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11246',
      active: false,
    },
    {
      id: uuidv4(),
      name: 'Habitat',
      author: 'Philanthrope & kendall Miles',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg',
      colors: ['#633924', '#AE463B'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10265',
      active: false,
    },
  ];
}

export default ChillHop;
