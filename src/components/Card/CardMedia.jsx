function CardMedia({ image, title, detail }) {
  return (
    <div className="col-span-1">
      <div className="border border-gray-300 py-4 px-5 rounded-lg shadow-md">
        <div className="flex justify-center">
          <img className="h-80 object-cover" src={image} alt={title} />
        </div>
        <h2 className="text-xl font-semibold mt-4">{title}</h2>
        <p className="mt-2">{detail}</p>
      </div>
    </div>
  );
}

export default CardMedia;
