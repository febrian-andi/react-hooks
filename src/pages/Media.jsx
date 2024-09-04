import { useState, useEffect } from "react";
import axios from "axios";
import CardMedia from "../components/Card/CardMedia";

function Media() {
  const [dataMedia, setDataMedia] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setDataMedia(response.data.slice(0, visibleCount));
        setHasMore(response.data.length > visibleCount);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleLoadMore = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const newData = response.data.slice(visibleCount, visibleCount + 6);
        setDataMedia(prevData => [...prevData, ...newData]);
        setVisibleCount(prevCount => prevCount + 6);
        setHasMore(newData.length === 6);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold">Media</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {dataMedia.map((data) => (
          <CardMedia
            image={`https://picsum.photos/200/200?random=${data.id}`}
            title={data.title}
            detail={data.body}
            key={data.id}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleLoadMore}
          disabled={!hasMore}
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors mt-6 ${!hasMore ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        >
          {hasMore ? 'Load More' : 'No More Data'}
        </button>
      </div>
    </div>
  );
}

export default Media;
