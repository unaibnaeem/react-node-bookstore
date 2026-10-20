import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

function DeleteBook() {
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  function handleDeleteBook() {
    setIsLoading(true);

    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setIsLoading(false);
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
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
      <h1 className="my-4 text-3xl">Delete Book</h1>

      {isLoading ? <Spinner /> : ""}

      <div className="mx-auto flex w-[600px] flex-col items-center rounded-xl border-2 border-sky-400 p-8">
        <h3 className="text-2xl">Are you sure you want to Delete this book?</h3>

        <button
          onClick={handleDeleteBook}
          className="m-8 w-full bg-red-600 p-4 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
