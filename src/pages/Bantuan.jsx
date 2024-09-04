import dataBantuan from "../constants/dataBantuan";
import CardBantuan from "../components/Card/CardBantuan";

function Bantuan() {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold text-center">
        Pilih Topik Sesuai Kendalamu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {dataBantuan.map((data) => (
          <CardBantuan
            icon={data.icon}
            title={data.title}
            detail={data.detail}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Bantuan;
