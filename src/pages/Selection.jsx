import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieBox from "../components/MovieBox";
import MovieChip from "../components/MovieChip";
import { IoMdWarning } from "react-icons/io";
import image2 from "../assets/image3.png"
import image1 from "../assets/image2.png";
import image3 from "../assets/image4.png";
import image4 from "../assets/image6.png";
import image5 from "../assets/image7.png";
import image6 from "../assets/image8.png";
import image7 from "../assets/image9.png";
import image8 from "../assets/image10.png";
import image9 from "../assets/image11.png";


const MOVIES = [
  {
    id: 0,
    movie: "Action",
    imageUrl: image1,
    color: "bg-orange-500"
  },
  {
    id: 1,
    movie: "Drama",
    imageUrl: image2,
    color: "bg-violet-200"
  },
  {
    id: 2,
    movie: "Romance",
    imageUrl: image3,
    color: "bg-green-500"
  },
  {
    id: 3,
    movie: "Thriller",
    imageUrl: image4,
    color: "bg-cyan-200"
  },
  {
    id: 4,
    movie: "Horror",
    imageUrl: image5,
    color: "bg-amber-900"
  },
  {
    id: 5,
    movie: "Western",
    imageUrl: image6,
    color: "bg-blue-600"
  },
  {
    id: 6,
    movie: "Fantasy",
    imageUrl: image7,
    color: "bg-pink-400"
  },
  {
    id: 7,
    movie: "Fiction",
    imageUrl: image8,
    color: "bg-red-500"
  },
  {
    id: 8,
    movie: "Music",
    imageUrl: image9,
    color: "bg-green-300"
  },
]

export default function Selection () {

  const navigate = useNavigate();
  const [selectedMovies, setSelectedMovies] = useState([]);

  const moveNext = () => {
    if(selectedMovies.length < 3) {
      alert("Please select atleast 3 movies");
      return;
    } else {
      localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
      setSelectedMovies([]);
      navigate('/info')
    }
  }

  return (
    <div className="h-screen w-screen bg-black text-white flex justify-content items-center p-10 relative">

        {/* Left section */}
        <div className="mb-4 w-2/3 mr-16">
          <h1 className="heading text-8xl font-bold mb-6 heading my-10 pb-4">Super app</h1>
          <p className="text-6xl font-semibold text-start mb-4 mr-8">Choose your entertainment<br />category</p>
        

        {/* Selected Categories */}
        <div>
            <div className="grid grid-cols-2 gap-x-1 md:grid-cols-2 py-8 px-3 mr-80">
              {selectedMovies.map((category) => (
                <p key={category.id}>
                  <MovieChip
                    key={category.id}
                    category={category}
                    setSelectedMovies={setSelectedMovies}
                    />
                </p>
              ))}
            </div>

            {/* Warning Message */}
            { selectedMovies.length < 3 && (
              <p className="text-red-500 flex items-center">
              <span className="mr-1"><IoMdWarning/></span>Minimun 3 categories required!
              </p>
            )}
        </div>
      </div>  
      {/* Right Section */}
      <div className="grid grid-cols-3 gap-4 mb-7"
      >
        {MOVIES.map((category) => (
          <div key={category.id}>
            <MovieBox
              selectedMovies={selectedMovies}
              setSelectedMovies={setSelectedMovies}
              category={category}
            />
          </div>
        ))}
      </div>

      <button className="inline-flex items-center text-white hover:text-rose-500 rounded-full bg-green-600 hover:bg-green-900 text-bold next-btn" onClick={moveNext}>Next Page</button>
    </div>
  )
}

