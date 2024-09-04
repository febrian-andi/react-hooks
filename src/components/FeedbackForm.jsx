import { useState } from "react";
import LikeIcon from "../assets/like-icon.svg";

const FeedbackForm = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleAddFeedback = (e) => {
    e.preventDefault();
    if (name && message) {
      const newFeedback = {
        id: feedbacks.length + 1,
        name,
        message,
        likes: 0,
      };
      setFeedbacks(prevData => [...prevData, newFeedback]);
      setName("");
      setMessage("");
    }
  };

  const handleLike = (id) => {
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id
          ? { ...feedback, likes: feedback.likes + 1 }
          : feedback
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Kritik dan Saran</h2>
      <p className="mb-4">Silakan masukan kritik dan saran Anda</p>
      <form onSubmit={handleAddFeedback} className="mb-6">
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border rounded dark:text-black"
          required
        />
        <textarea
          placeholder="Saran Anda..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 mb-4 border rounded dark:text-black"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-sky-500 font-semibold text-white py-2 px-4 rounded hover:bg-sky-600"
        >
          Kirim Saran
        </button>
      </form>
      {feedbacks.map((feedback) => (
        <div
          key={feedback.id}
          className="p-4 mb-4 border rounded flex justify-between items-center"
        >
          <div>
            <h3 className="font-bold">{feedback.name}</h3>
            <p>{feedback.message}</p>
          </div>
          <button
            onClick={() => handleLike(feedback.id)}
            className="bg-sky-300 dark:bg-sky-500 py-1 px-3 rounded hover:bg-sky-500  dark:hover:bg-sky-600 flex items-center space-x-2"
          >
            <img src={LikeIcon} alt="Like Icon" width={20} />
            <span>{feedback.likes}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeedbackForm;
