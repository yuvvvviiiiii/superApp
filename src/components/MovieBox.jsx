import { useState } from "react";


// eslint-disable-next-line react/prop-types
const MovieBox = ( { selectedMovies, setSelectedMovies, category } ) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    if(isSelected){
      setSelectedMovies(selectedMovies.filter((movie) => movie !== category))
    } else {
      setSelectedMovies([...selectedMovies, category]);
    }
    setIsSelected(isSelected);
  }

  return (
    <div className={`p-4 ${category.color} rounded-lg text-center border-4 border-transparent hover:border-green-600 m-2 transition-transform transform hover:scale-105`}
      onClick={handleSelect}
    >
      <p className="text-xl font-semibold mb-2">{category.movie}</p>
      <img src={category.imageUrl} alt={category.movie} className="rounded-md h-34 w-full object-cover" />
    </div>
  )
}

export default MovieBox
