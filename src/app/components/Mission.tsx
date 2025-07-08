import Image from 'next/image';

export default function Mission() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-full gap-6 mt-10 mb-4">
      <div>
        <Image
          src="/journey1.png"
          alt="Pemberdayaan Perempuan Lokal"
          width={200}
          height={200}
          className="rounded-lg mx-auto mb-6"
        />
        <h1 className="mb-4 text-center text-2xl">Pemberdayaan Perempuan Lokal</h1>
        <p className="text-sm text-center max-w-90 mx-auto">
          Melibatkan perempuan tangguh di Gunungkidul, sebagai bentuk dukungan terhadap kemandirian dan keberdayaan mereka.
        </p>
      </div>
      <div className=''>
        <Image
          src="/journey2.png"
          alt="Dukungan Sosial & Ekonomi"
          width={230}
          height={100}
          className="rounded-lg mx-auto mb-4 mt-7"
        />
        <h1 className="mb-4 text-center text-2xl">Dukungan Sosial & Ekonomi Berkelanjutan</h1>
        <p className="text-sm text-center max-w-90 mx-auto">
          Mendorong pertumbuhan ekonomi lokal dan pelestarian keterampilan tradisional melalui kolaborasi komunitas.
        </p>
      </div>
      <div>
        <Image
          src="/journey3.png"
          alt="Kepekaan yang Menggerakkan"
          width={200}
          height={200}
          className="rounded-lg mx-auto mb-6"
        />
        <h1 className="mb-4 text-center text-2xl">Kepedulian yang Menggerakkan</h1>
        <p className="text-sm text-center max-w-90 mx-auto">
          Langkah demi langkah kami wujudkan kepedulian, menghadirkan kebaikan yang bisa dirasakan bersama.
        </p>
      </div>
    </div>
  );
}
