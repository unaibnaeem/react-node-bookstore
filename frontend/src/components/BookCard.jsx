import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

function BookCard({ book }) {
  return (
    <div
      key={book._id}
      className="relative m-4 rounded-lg border-2 border-gray-500 px-4 py-2 hover:shadow-lg"
    >
      <h2 className="absolute right-2 top-3 rounded-lg bg-red-600 px-4 py-1 text-white">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500">{book._id}</h4>

      <div className="flex items-center justify-start gap-x-2">
        <PiBookOpenTextLight className="text-2xl text-green-400" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex items-center justify-start gap-x-2">
        <BiUserCircle className="text-2xl text-green-400" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="mt-4 flex items-center justify-between gap-x-4 p-4">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
