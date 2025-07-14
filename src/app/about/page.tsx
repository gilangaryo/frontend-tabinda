'use client';

import Image from 'next/image';
import Mission from '../components/Mission';
import Explore from '../components/Explore';
export default function About() {
  return (
    <div className='text-primary'>
      < section className="px-12 py-8 " >
        <div className="text-center mb-12">
          <h3 className="text-xl tracking-widest my-4">Welcome to Tabinda</h3>
          <h1 className="text-4xl md:text-7xl tracking-wide">
            The First Step Toward <span className="italic ">The Bigger Story</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
          <div className="flex flex-col ">
            <Image
              src="/about/pict-1.png"
              alt="Unveiling the Modest Muslim"
              width={600}
              height={800}
              className="w-full h-auto object-cover mb-2"
            />
            <h3 className="italic text-3xl text-left">Unveiling the Modest Muslim</h3>
          </div>

          <div className="relative mb-10">
            <Image
              src="/about/pict-2.png"
              alt="Conscious Choices"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
            />

          </div>

          <div className="relative flex flex-col justify-end ">
            <h3 className="italic text-right text-2xl mb-2">Your Hijab Journey</h3>
            <Image
              src="/about/pict-3.png"
              alt="Comfortable Hijab"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
            />
            <h3 className="italic text-left text-2xl mt-2 tracking-wider">Making it comfortable to any season</h3>
          </div>
        </div>
      </section >
      <section className='px-12 py-4'>

        <h2 className="text-5xl tracking-wide">About Tabinda</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">

          <div>
            <h2 className="italic text-xl md:text-2xl ">
              Elegant Modesty, Conscious Choices, Respecting Ethics and Honoring Values to a Better World.
            </h2>

          </div>
          <div className=''>
            <h4 className="text-xl">
              Tabinda adalah brand fashion muslim yang fokus pada adaya dan hijab dengan pesan &quot;Your Hijab Journey&quot;. Tabinda ingin menjadi teman bagi setiap wanita muslim yang sedang
              mengikhlasi proses hijrah melalui busana yang elegan, nyaman, dan sesuai syariat.
            </h4>
          </div>
        </div>
      </section>

      <section className='px-12 '>
        <div className="grid grid-flow-col grid-rows-2 md:grid-rows-3 gap-4">
          <div className="col-span-6 row-span-1 md:col-span-1 md:row-span-3 ">
            <div className="mx-auto">
              <Image
                src="/about/brand.png"
                alt="Our Brand"
                width={400}
                height={500}
                className="rounded-md"
              />
            </div>

          </div>

          <div className="col-span-4 md:col-span-3 row-span-1 md:row-span-3 flex flex-col justify-start md:justify-end ">
            <div>
              <h1 className="text-5xl mb-2">Our Brand</h1>
              <h3 className="text-base">
                Tabinda berasal dari bahasa Arab yang memiliki arti ‘bercahaya’ atau ‘bersinar terang’. Nama ini dipilih karena merepresentasikan harapan agar setiap wanita muslim yang
                menjalankan produk Tabinda dapat memancarkan cahaya kebaikan, kesantunan, dan keyakinan dalam perjalanan hijrahnya.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="relative aspect-[16/9] text-center md:text-left overflow-hidden w-full">
        <Image
          src="/about/about.png"
          alt="Explore Background"
          fill
          priority
          className="object-contain object-center -z-10"
        />
      </section>

      <section className="px-4 md:px-16 pb-10 bg-white text-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          <div className="col-span-1 flex flex-col justify-between h-full">
            <h2 className="text-2xl md:text-4xl font-heading mb-4">About CEO Name</h2>

            <p className="text-base md:text-lg leading-relaxed text-justify font-avenir">
              Ide mendirikan <strong>Tabinda</strong> tumbuh di Kota Madinah, saat sang Creative Director dan Co-Founder, Lulita, menjalani ibadah umrah. Dalam ketenangan spiritual kota suci, terbersit niat untuk menghadirkan busana Muslimah yang sederhana, nyaman, dan elegan—sebagai sahabat setia dalam setiap langkah hijrah.
              <br /><br />
              Dengan kecintaan pada fashion dan perhatian terhadap detail, Lulita merancang Tabinda agar memudahkan Muslimah dalam berbusana, tanpa meninggalkan nilai-nilai syar’i. Setiap desain diciptakan untuk memperkuat identitas, menumbuhkan keyakinan, dan memancarkan keindahan yang menenangkan hati.
              <br /><br />
              Tabinda mengajak Muslimah untuk merayakan kesederhanaan, dan menemukan cahaya dalam setiap langkah hijrah mereka.
            </p>
          </div>

          <div className="col-span-1 flex justify-center items-center">
            <Image
              src="/about/ceo.png"
              alt="CEO Tabinda"
              width={700}
              height={700}
              className="w-full h-auto max-w-[500px] "
            />
          </div>

        </div>
      </section>

      <section>
        <Mission />
      </section>

      <section>
        <Explore />
      </section>



    </div >
  );
}
