//hero image
export const heroImages = [
    '/hero/hero-1.jpg',
    '/hero/hero-2.jpg',
    '/hero/hero-3.jpg',
    '/hero/hero-4.jpg',
    '/hero/hero-5.jpg'
  ];

export const handleWhatsAppOrder = (themeName = '') => {
    const message = themeName 
      ? `Halo! Saya tertarik untuk memesan undangan digital dengan tema ${themeName}. Bisa dibantu?`
      : 'Halo! Saya tertarik untuk memesan undangan digital. Bisa dibantu?';
    
    window.open(`https://wa.me/6289627539374?text=${encodeURIComponent(message)}`, '_blank');
  };
export type ThemeCategory =
  | 'floral'
  | 'traditional'
  | 'minimalist'
  | 'luxury'
  | 'elegant'
  | 'islamic'
  | 'shadow'
  | 'others';

type Theme = {
    name: string;
    originalPrice: number;
    discount: number;
    finalPrice: number;
    image: string;
    src: string;
  };

export const themeCategories: { key: ThemeCategory; label: string }[] = [
  { key: 'floral', label: 'Floral' },
  { key: 'traditional', label: 'Tradisional' },
  { key: 'minimalist', label: 'Minimalis' },
  { key: 'luxury', label: 'Luxury' },
  { key: 'elegant', label: 'Elegant' },
  { key: 'islamic', label: 'Islamic' },
  { key: 'shadow', label: 'Overlay Shadow' },
  { key: 'others', label: 'Tema Lainnya' }
];

export const themes: Record<ThemeCategory, Theme[]> = {
    floral: [
      {
        name: 'Floral 1',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/floral-1.jpg',
        src: 'https://demo.invee.net/?template=floral-1'
      },
      {
        name: 'Floral 2',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/floral-2.jpg',
        src: 'https://demo.invee.net/?template=floral-2'
      },
      {
        name: 'Floral 3',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/floral-3.jpg',
        src: 'https://demo.invee.net/?template=floral-3'
      },
      {
        name: 'Floral 4',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/floral-4.jpg',
        src: 'https://demo.invee.net/?template=floral-4'
      },
      {
        name: 'Floral 5',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/floral-5.jpg',
        src: 'https://demo.invee.net/?template=floral-5'
      },
      {
        name: 'Floral 6',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/floral-6.jpg',
        src: 'https://demo.invee.net/?template=floral-6'
      },
      {
        name: 'Floral 7',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/floral-7.jpg',
        src: 'https://demo.invee.net/?template=floral-7'
      },
      {
        name: 'Floral 8',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/floral-8.jpg',
        src: 'https://demo.invee.net/?template=floral-8'
      },
      {
        name: 'Floral 9',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/floral-9.jpg',
        src: 'https://demo.invee.net/?template=floral-9'
      }
    ],
    traditional: [
      {
        name: 'Tradisional 1',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/traditional-1.jpg',
        src: 'https://demo.invee.net/?template=traditional-1'
      },
      {
        name: 'Tradisional 2',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/traditional-2.jpg',
        src: 'https://demo.invee.net/?template=traditional-2'
      },
      {
        name: 'Tradisional 3',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/traditional-3.jpg',
        src: 'https://demo.invee.net/?template=traditional-3'
      },
      {
        name: 'Tradisional 4',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/traditional-4.jpg',
        src: 'https://demo.invee.net/?template=traditional-4'
      }
    ],
    minimalist: [
      {
        name: 'Minimalis 1',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/minimalist-1.jpg',
        src: 'https://demo.invee.net/?template=minimalist-1'
      },
      {
        name: 'Minimalis 2',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/minimalist-2.jpg',
        src: 'https://demo.invee.net/?template=minimalist-2'        
      },
      {
        name: 'Minimalis 3',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/minimalist-3.jpg',
        src: 'https://demo.invee.net/?template=minimalist-3'
      },
      {
        name: 'Minimalis 4',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/minimalist-4.jpg',
        src: 'https://demo.invee.net/?template=minimalist-4'
      },
      {
        name: 'Minimalis 5',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/minimalist-5.jpg',
        src: 'https://demo.invee.net/?template=minimalist-5'
      },
      {
        name: 'Minimalis 6',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/minimalist-6.jpg',
        src: 'https://demo.invee.net/?template=minimalist-6'
      },
      {
        name: 'Minimalis 7',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/minimalist-7.jpg',
        src: 'https://demo.invee.net/?template=minimalist-7'
      },
      {
        name: 'Minimalis 8',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/minimalist-8.jpg',
        src: 'https://demo.invee.net/?template=minimalist-8'
      },
      {
        name: 'Minimalis 9',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/minimalist-9.jpg',
        src: 'https://demo.invee.net/?template=minimalist-9'
      },
      {
        name: 'Minimalis 10',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/minimalist-10.jpg',
        src: 'https://demo.invee.net/?template=minimalist-10'
      },
      {
        name: 'Minimalis 11',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/minimalist-11.jpg',
        src: 'https://demo.invee.net/?template=minimalist-11'
      },
      {
        name: 'Minimalis 12',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/minimalist-12.jpg',
        src: 'https://demo.invee.net/?template=minimalist-12'
      }
    ],
    luxury:[
      {
        name: 'Luxury 1',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/luxury-1.jpg',
        src: 'https://demo.invee.net/?template=luxury-1'
      },
      {
        name: 'Luxury 2',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/luxury-2.jpg',
        src: 'https://demo.invee.net/?template=luxury-2'
      }
    ],
    islamic:[
      {
        name: 'Islamic 1',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/islamic-1.jpg',
        src: 'https://demo.invee.net/?template=islamic-1'
      },
      {
        name: 'Islamic 2',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/islamic-2.jpg',
        src: 'https://demo.invee.net/?template=islamic-2'
      }
    ],
    elegant:[
      {
        name: 'Elegant 1',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/elegant-1.jpg',
        src: 'https://demo.invee.net/?template=elegant-1'
      },
      {
        name: 'Elegant 2',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/elegant-2.jpg',
        src: 'https://demo.invee.net/?template=elegant-2'
      }
    ],
    shadow:[
      {
        name: 'Overlay Shadow 1',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/overlay-shadow-1.jpg',
        src: 'https://demo.invee.net/?template=overlay-shadow-1'
      },
      {
        name: 'Overlay Shadow 2',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/overlay-shadow-2.jpg',
        src: 'https://demo.invee.net/?template=overlay-shadow-2'
      },
      {
        name: 'Overlay Shadow 3',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/overlay-shadow-3.jpg',
        src: 'https://demo.invee.net/?template=overlay-shadow-3'
      }
    ],
    others: [
      {
        name: 'Khitan',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/khitan-1.jpg',
        src: 'https://demo.invee.net/?template=khitan-1'
      },
      {
        name: 'Aqiqah 1',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/aqiqah-1.jpg',
        src: 'https://demo.invee.net/?template=aqiqah-1'
      },
      {
        name: 'Aqiqah 2',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/aqiqah-2.jpg',
        src: 'https://demo.invee.net/?template=aqiqah-2'
      },
      {
        name: 'Birthday 1',
        originalPrice: 200000,
        discount: 50,
        finalPrice: 100000,
        image: '/tema/birthday-1.jpg',
        src: 'https://demo.invee.net/?template=birthday-1'
      },
      {
        name: 'Birthday 2',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/birthday-2.jpg',
        src: 'https://demo.invee.net/?template=birthday-2'
      },
      {
        name: 'Birthday 3',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/birthday-3.jpg',
        src: 'https://demo.invee.net/?template=birthday-3'
      },
      {
        name: 'Graduation 1',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/graduation-1.jpg',
        src: 'https://demo.invee.net/?template=graduation-1'
      },
      {
        name: 'Graduation 2',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/graduation-2.jpg',
        src: 'https://demo.invee.net/?template=graduation-2'
      },
      {
        name: 'Graduation 3',
        originalPrice: 300000,
        discount: 50,
        finalPrice: 150000,
        image: '/tema/graduation-3.jpg',
        src: 'https://demo.invee.net/?template=graduation-3'
      }
    ]
  };
  export const packages = [
    {
      name: 'Paket Biasa',
      price: 'Mulai dari Rp. 100.000',
      features: [
        'Desain undangan digital',
        'Maksimal 200 tamu',
        'RSVP',
        'foto galeri',
        'Musik latar',
        'Google Maps',
        'Countdown timer'
      ]
    },
    {
      name: 'Paket Premium',
      price: 'Mulai dari Rp. 150.000',
      features: [
        'Desain undangan digital premium',
        'Unlimited tamu',
        'RSVP',
        'foto galeri',
        'Musik latar (multiple songs)',
        'Google Maps + live location + Google Calender',
        'Countdown timer',
        'Live streaming link',
        'Love Story',
        'Gift'
      ],
      popular: true
    }
  ];
  export const testimoniImages = [
    {
    image: '/testimoni/testimoni-1.jpg',
    name: 'Egi & Sani',
    message:
      'Suka Banget. Recommended!'
  },
  {
    image: '/testimoni/testimoni-1.jpg',
    name: 'lorem ipsum',
    message:
      'lorem ipsum dolor sit amet'
  },
  {
    image: '/testimoni/testimoni-1.jpg',
    name: 'lorem ipsum',
    message:
      'Timnya sangat responsif dan ramah. Proses revisi cepat dan hasilnya sangat sesuai harapan kami.'
  },
  {
    image: '/testimoni/testimoni-1.jpg',
    name: 'lorem ipsum',
    message:
      'Sangat praktis dan modern! Undangan digital ini bikin acara kami terasa lebih kekinian dan hemat biaya.'
  }
  ];
  export const faqs = [
    {
      q: 'Berapa lama proses pembuatan undangan?',
      a: 'Jika semua data sudah terkumpul, undangan bisa selesai dalam waktu kurang lebih 10 menit.'
    },
    {
      q: 'Apakah bisa request ganti tema?',
      a: 'Tidak, tema yang sudah dipilih tidak bisa diganti.'
    },
    {
      q: 'Bagaimana cara pembayaran?',
      a: 'Pembayaran dapat dilakukan melalui transfer bank, e-wallet (OVO, DANA).'
    },
    {
      q: 'Apakah ada batasan revisi?',
      a: 'Tidak, kamu dapat merevisi kapanpun selama undangan masih aktif.'
    },
    {
      q: 'Berapa lama undangan aktif?',
      a: 'Undangan akan aktif selama satu tahun terhitung dari tanggal pembuatan.'
    },
    {
      q: 'Penting untuk dibaca!',
      a: 'Bagi yang sudah memesan undangan dengan kami, data kamu akan menjadi katalog. Jika merasa keberatan, silahkan hubungi admin.'
    },
    // {
    //   q: 'Bagaimana jika ingin menambah fitur?',
    //   a: 'Penambahan fitur khusus dapat didiskusikan dengan tim kami dengan biaya yang disesuaikan.'
    // },
    // {
    //   q: 'Apakah tersedia customer support?',
    //   a: 'Ya, kami menyediakan customer support melalui WhatsApp selama jam kerja (09:00-21:00 WIB).'
    // }
  ];