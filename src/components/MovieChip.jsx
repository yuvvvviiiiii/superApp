import { RxCross2 } from "react-icons/rx";

const MovieChip = ({ setSelectedMovies, category }) => {

  const removeSelection = (category) => {
    setSelectedMovies((selectedMovies) => {
      return selectedMovies.filter((movie) => movie !== category)
    });
  };
  
  return (
 
     <button 
    className="inline-flex justify-between items-center text-center text-white px-3 py-2 rounded-full bg-green-600 hover:bg-green-900 text-sm">
    {category.movie} 
     <span className="text-sm text-red-900"
      onClick={() => removeSelection(category)}>
        <RxCross2 />
        </span>
  </button>
  )
}

export default MovieChip
