import HeroImage from "../assets/hero.svg";

function Beranda() {
  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center">
          <div>
            <h1 className="text-2xl font-bold text-justify">
              PaDi UMKM Hadir Sebagai Satu Solusi Bisnis bagi UMKM, BUMN, dan
              Pemerintah.
            </h1>
            <p className="text-base mt-4 text-justify">
              Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun
              Swasta untuk mendapatkan transaksi dengan harga dan kualitas
              terbaik.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end mt-6 md:mt-0">
          <img src={HeroImage} alt="PaDi UMKM" />
        </div>
      </div>
    </div>
  );
}

export default Beranda;
