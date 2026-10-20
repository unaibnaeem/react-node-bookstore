import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  function handleCreateBook() {
    setIsLoading(true);

    const data = { title, author, publishYear };

    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setIsLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        // alert("An Error occured. Please check Console");
        enqueueSnackbar("Error occurred", { variant: "error" });
        console.log(err);
      });
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="my-4 text-3xl">Create Book</h1>

      {isLoading ? <Spinner /> : ""}

      <div className="mx-auto flex w-[600px] flex-col rounded-xl border-2 border-sky-400 p-4">
        <div className="my-4">
          <label className="mr-4 text-xl text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-2 border-gray-500 px-4 py-2"
          />
        </div>
        <div className="my-4">
          <label className="mr-4 text-xl text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border-2 border-gray-500 px-4 py-2"
          />
        </div>
        <div className="my-4">
          <label className="mr-4 text-xl text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="w-full border-2 border-gray-500 px-4 py-2"
          />
        </div>
        <button onClick={handleCreateBook} className="m-8 bg-sky-300 p-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBook;
