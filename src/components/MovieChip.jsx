import { RxCross2 } from "react-icons/rx";

const MovieChip = ({ setSelectedMovies, category }) => {

  const removeSelection = (category) => {
    setSelectedMovies((selectedMovies) => {
      return selectedMovies.filter((movie) => movie !== category)
    });
  };
  
  return (
 
     <button 
    className="inline-flex items-center bg-screen-600 text-white px-3 py-2 rounded-full mr-2 mb-2 bg-green-600 hover:bg-green-900 text-sm">
    {category.movie} 
     <span className="ml-4 text-rose-800"
      onClick={() => removeSelection(category)}>
        <RxCross2 />
        </span>
  </button>
  )
}

export default MovieChip
