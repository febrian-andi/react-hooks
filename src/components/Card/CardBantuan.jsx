function CardBantuan({ icon, title, detail }) {
  return (
    <div className="col-span-1">
      <div className="border border-gray-300 p-4 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center mb-4">
          <img src={icon} className="w-10 h-10" alt={title} />
          <h1 className="text-lg font-semibold ml-3">{title}</h1>
        </div>
        <div className="h-56 overflow-auto dark:text-gray-300">
          {detail.map((item, index) => (
            <p key={index} className="mb-2">{item}</p>
          ))}
        </div>
        <button
          className="mt-4 px-4 py-2 font-semibold text-sky-400 dark:text-white hover:text-white dark:hover:text-sky-400 dark:bg-sky-400 border border-sky-400 rounded hover:bg-sky-400 dark:bg-sky-400 dark:hover:bg-white dark:border-sky-400"
        >
          Lihat Semua Artikel
        </button>
      </div>
    </div>
  );
}

export default CardBantuan;
