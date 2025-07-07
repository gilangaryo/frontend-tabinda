import Image from 'next/image';

export default function Mission() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-full gap-6 mt-10 mb-2">
      <div>
        <Image
          src="/journey1.png"
          alt="Pemberdayaan Perempuan Lokal"
          width={200}
          height={200}
          className="rounded-lg mx-auto mb-6"
        />
        <h1 className="mb-2 text-center text-2xl">Pemberdayaan Perempuan Lokal</h1>
        <p className="text-sm text-center">
          Dukung pengrajin lokal dengan produksi busana bermakna.
        </p>
      </div>
      <div>
        <Image
          src="/journey2.png"
          alt="Dukungan Sosial & Ekonomi"
          width={200}
          height={100}
          className="rounded-lg mx-auto mb-17"
        />
        <h1 className="mb-2 text-center text-2xl">Dukungan Sosial & Ekonomi</h1>
        <p className="text-sm text-center">
          Komitmen untuk keberlanjutan dalam setiap langkah produksi.
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
        <h1 className="mb-2 text-center text-2xl">Kepekaan yang Menggerakkan</h1>
        <p className="text-sm text-center">
          Lebih dari tren, kami mengangkat nilai dan makna.
        </p>
      </div>
    </div>
  );
}
