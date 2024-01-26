import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjcwYTVlMGI2YmYzNDM0NTMxMWMxNTI1MGVlNWZjZiIsInN1YiI6IjY1YjJhNDkyNmVlY2VlMDE3YjM0ZWVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BskjHUJ2-4XHFwfqm9SPMaaDpN6H7-lhyDHAoAvX_cE";
  const getMovies = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  };
  const { data } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  console.log("data", data);

  return (
    <div className="max-w-[68rem] w-[91%] mx-auto">
      <div className="grid grid-cols-3">
        {data?.results?.map((result) => (
          <Card
            title={result?.title}
            key={result?.id}
            imageUrl={result?.poster_path}
            desc={result?.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
