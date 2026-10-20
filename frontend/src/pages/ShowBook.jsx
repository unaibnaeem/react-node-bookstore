import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function ShowBook() {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(
    function () {
      setIsLoading(true);

      axios
        .get(`http://localhost:5555/books/${id}`)
        .then((res) => {
          setBook(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    },
    [id],
  );

  return (
    <div className="p-4">
      <BackButton />
      <h4 className="my-4 text-3xl">Show Book</h4>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex w-fit flex-col rounded-xl border-2 border-gray-400 p-4">
          <div className="my-4">
            <span className="mr-4 text-xl text-gray-500">ID</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="mr-4 text-xl text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="mr-4 text-xl text-gray-500">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="mr-4 text-xl text-gray-500">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="mr-4 text-xl text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="mr-4 text-xl text-gray-500">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBook;
