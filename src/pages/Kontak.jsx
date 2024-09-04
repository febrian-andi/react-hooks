import FeedbackForm from '../components/FeedbackForm';

function Kontak() {
  return (
    <div className="container mx-auto my-8">
      <FeedbackForm/>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Hubungi Kami</h1>
        <p className="mt-4">
          Memiliki pertanyaan lebih lanjut seputar PaDi UMKM?
          <br />
          Silakan menghubungi Kami secara langsung.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div>
          <h2 className="text-xl font-bold">Layanan Informasi Pengguna</h2>
          <h3 className="text-lg font-bold mt-4">Email</h3>
          <p className="mt-1">cs@padiumkm.id</p>
          <h3 className="text-lg font-bold mt-4">Whatsapp</h3>
          <p className="mt-1">+62899999999</p>
          <h3 className="text-lg font-bold mt-4">
            Senin - Jumat | 08.00 - 17.00 WIB
          </h3>
        </div>
        <div>
          <h2 className="text-xl font-bold">Kantor Kami</h2>
          <h3 className="text-lg font-bold mt-4">PaDi UMKM Headquarters</h3>
          <p className="mt-1">
            Gedung Telkom Direktorat Business and Technology
            <br />
            Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta, 12810,
            Indonesia
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kontak;
