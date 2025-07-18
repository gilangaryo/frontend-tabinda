const products = [
  {
    "id": 1,
    "name": "Girlie",
    "slug": "girlie",
    "price": 485000,
    "description": "Girlie adalah set mukena dua potong yang anggun dengan sentuhan renda yang feminin, manis, dan sangat girlie. Tersedia dalam dua pilihan warna elegan: Peach Pearl dan Hitam, siap menemani ibadah di berbagai kesempatan.",
    "category": "Aziza Mukena",
    "colors": [
      "Grey Pearl",
      "Emerald Green",
      "Misty Mauve",
      "Pink Lace",
      "Hitam"
    ],
    "image": "/girlie.jpg",
    "link_tokopedia": "https://tk.tokopedia.com/ZSB5AcGQJ/",
    "link_shopee": "https://shopee.co.id/tabindaofficial"
  },
  {
    "id": 2,
    "name": "Bow Bubble",
    "slug": "bow-bubble",
    "price": 499000,
    "description": "Bow Bubble diciptakan untuk para perempuan yang senang menambahkan sentuhan ceria dalam tampilan mereka. Dihiasi pita-pita kecil pada lengan kerut elastis, mukena ini memancarkan pesona manis yang lembut dan playful. Hadir dalam tiga kombinasi warna color block yang segar. Bow Bubble siap memberi warna baru dalam koleksi mukena Anda. Cocok bagi mereka yang percaya diri tampil unik, penuh gaya, dan tentu saja menggemaskan.",
    "category": "Aziza Mukena",
    "colors": [
      "TEAL X PALE",
      "SAGE X PALE",
      "Hitam"
    ],
    "image": "/bow-bubble.jpg",
    "link_tokopedia": "https://tk.tokopedia.com/ZSB5DjAM2/",
    "link_shopee": "https://shopee.co.id/tabindaofficial"
  },
  {
    "id": 3,
    "name": "NAYANIKA",
    "slug": "nayanika",
    "price": 485000,
    "description": "Abaya Nayanika hadir dengan desain elegan yang memadukan kesederhanaan dan pesona abadi. Dibuat dari material nyaman dengan furing voile yang sejuk, cocok untuk wanita aktif yang tetap ingin tampil anggun. Dibuat warna hitam pekat, siluet A-line yang menawan, detail payet handmade, dan sentuhan motif di bagian lengan. Nayanika adalah pilihan penuh gaya dan kenyamanan.",
    "category": "Sawda Abaya",
    "colors": [
      "Tweed Abu Abu",
      "Bunga Silver",
      "Chiffon Dot",
      "Bunga Dot"
    ],
    "image": "/nayanika.jpg",
    "link_tokopedia": "https://tk.tokopedia.com/ZSB5DNsUD/",
    "link_shopee": "https://shopee.co.id/tabindaofficial"
  },
  // {
  //   "id": 4,
  //   "name": "SANDYKALA",
  //   "slug": "sandykala",
  //   "price": 485000,
  //   "description": "Abaya Nayanika hadir dengan desain elegan yang memadukan kesederhanaan dan pesona abadi. Dibuat dari material nyaman dengan furing voile yang sejuk, cocok untuk wanita aktif yang tetap ingin tampil anggun. Dibalut warna hitam pekat, siluet A-line yang menawan, detail payet handmade, dan sentuhan motif di bagian lengan, Nayanika adalah pilihan penuh gaya dan kenyamanan.",
  //   "category": "Sawda Abaya",
  //   "colors": [
  //     "Tweed Abu Abu",
  //     "Bunga Silver",
  //     "Chiffon Dot",
  //     "Bunga Dot"
  //   ],
  //   "image": "/sandykala.jpg",
  //   "link_tokopedia": "https://tokopedia.com/tabindaofficial",
  //   "link_shopee": "https://shopee.co.id/tabindaofficial"
  // },
  {
    "id": 5,
    "name": "MAHEERA",
    "slug": "maheera",
    "price": 119999,
    "description": "Maheera adalah koleksi hijab dari Alhawa yang terbuat dari Ultrafine Voile — ringan, mudah dibentuk, dan ramah lingkungan. Dengan motif Garden dan Kingdom yang terinspirasi dari taman bunga dan sentuhan Art Nouveau kerajaan Islam, koleksi ini hadir untuk para pecinta motif cerah dan hidup. Cocok untuk menyempurnakan tampilan sederhana, nyaman dipakai bahkan untuk aktivitas luar ruangan.",
    "category": "Alhawa Collection",
    "colors": [
      "Riverside",
      "Sweetpea",
      "Lotusbloom",
      "Gojiberry",
      "Pinewood",
      "Stardew",
      "Sandcastle"
    ],
    "image": "/maheera.jpg",
    "link_tokopedia": "https://tk.tokopedia.com/ZSB5DVMBb/",
    "link_shopee": "https://shopee.co.id/tabindaofficial"
  },
  {
    "id": 6,
    "name": "MAHPAARA",
    "slug": "mahpaara",
    "price": 119999,
    "description": "Mahpaara adalah koleksi hijab monogram dari Tabinda yang hadir dalam dua pilihan bahan: Cashmere (warna Noir dan Aquamarine) serta Ultrafine Voile (Jade, Coconut Milk, dan Guava). Dirancang untuk perempuan pencinta gaya monokrom dan warna basic, Mahpaara menawarkan tampilan simpel, kasual, namun tetap elegan. Hijab segi empat yang mudah dipadukan dengan berbagai gaya.",
    "category": "Hijab Series",
    "colors": [
      "Aquamarine",
      "Jade",
      "Coconut Milk",
      "Guava",
      "Noir"
    ],
    "image": "/mahpara.jpg",
    "link_tokopedia": "https://tk.tokopedia.com/ZSB5Dq8eD/",
    "link_shopee": "https://shopee.co.id/tabindaofficial"
  },
  {
    "id": 7,
    "name": "MADINA",
    "slug": "madina",
    "price": 99999,
    "description": "Madina adalah koleksi pashmina pertama Alhawa dari Tabinda, dibuat dari chiffon sutera yang halus, ringan, dan nyaman dipakai sehari-hari maupun untuk acara spesial. Tersedia dalam berbagai warna memukau, Madina cocok untuk perempuan yang menyukai tampilan praktis, modis, dan cocok untuk semua warna kulit.",
    "category": "Pashmina Series",
    "colors": [
      "Tearose",
      "Stormcloud",
      "Onyx",
      "Dove",
      "DeepSea",
      "Clay",
      "Burgundy",
      "Bluebell",
      "Dune"
    ],
    "image": "/madina.jpg",
    "link_tokopedia": "https://tk.tokopedia.com/ZSB5DQMAt/",
    "link_shopee": "https://shopee.co.id/tabindaofficial"
  },
  {
    "id": 8,
    "name": "Candy Cloud",
    "slug": "candy-cloud",
    "price": 395000,
    "description": "Candy Cloud hadir dengan siluet yang lembut, penuh pesona, dan keanggunan. Sebagai mukena terusan, koleksi ini sangat cocok bagi perempuan aktif yang mengutamakan kenyamanan tanpa melupakan gaya. Tersedia dalam empat pilihan warna manis nan cerah, Candy Cloud adalah pilihan tepat bagi yang menyukai kesederhanaan dengan sentuhan warna yang unik dan tak lekang oleh waktu.",
    "category": "Aziza Mukena",
    "colors": [
      "Candy Cloud Black",
      "Candy Cloud Salt Blue",
      "Candy Cloud Mulberry",
      "Candy Cloud Glamour Gold"
    ],
    "image": "/candy-cloud.jpg",
    "link_tokopedia": "https://tk.tokopedia.com/ZSB5DhNBx/",
    "link_shopee": "https://shopee.co.id/tabindaofficial"
  },
];

export default products;
