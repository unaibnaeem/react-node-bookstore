import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import axios from "axios";
import Spinner from "../components/Spinner";
import { MdOutlineAddBox } from "react-icons/md";

function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    setIsLoading(true);

    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.data);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setIsLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="my-8 ml-4 text-3xl uppercase">React Bookstore</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="mr-4 text-4xl text-sky-800" />
        </Link>
      </div>
      {books.length === 0 ? (
        <h1 className="mt-8 text-center text-2xl">
          No Books to display. Click the top right icon to add a new Book.
        </h1>
      ) : isLoading ? (
        <Spinner />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 ">
          {books.map((book) => (
            <BookCard book={book} key={book._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

// {     <table className="w-full border-separate border-spacing-2">
//           <thead>
//             <th className="rounded-md border border-slate-600">No.</th>
//             <th className="rounded-md border border-slate-600">Title</th>
//             <th className="rounded-md border border-slate-600 max-md:hidden">
//               Author
//             </th>
//             <th className="rounded-md border border-slate-600 max-md:hidden">
//               Publish Year
//             </th>
//             <th className="rounded-md border border-slate-600">Operations</th>
//           </thead>
//           <tbody>
//             {books.map((book, index) => (
//               <tr key={book._id} className="h-8">
//                 <td className="rounded-md border border-slate-700 text-center">
//                   {index + 1}
//                 </td>
//                 <td className="rounded-md border border-slate-700 text-center">
//                   {book.title}
//                 </td>
//                 <td className="rounded-md border border-slate-700 text-center max-md:hidden">
//                   {book.author}
//                 </td>
//                 <td className="rounded-md border border-slate-700 text-center max-md:hidden">
//                   {book.publishYear}
//                 </td>
//                 <td className="rounded-md border border-slate-700 text-center max-md:hidden">
//                   <div className="flex justify-center gap-x-4">
//                     <Link to={`/books/details/${book._id}`}>
//                       <BsInfoCircle className="text-2xl text-green-800" />
//                     </Link>
//                     <Link to={`/books/edit/${book._id}`}>
//                       <AiOutlineEdit className="text-2xl text-yellow-600" />
//                     </Link>
//                     <Link to={`/books/delete/${book._id}`}>
//                       <MdOutlineDelete className="text-2xl text-red-600" />
//                     </Link>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table> }
