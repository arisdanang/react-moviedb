import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjcwYTVlMGI2YmYzNDM0NTMxMWMxNTI1MGVlNWZjZiIsInN1YiI6IjY1YjJhNDkyNmVlY2VlMDE3YjM0ZWVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BskjHUJ2-4XHFwfqm9SPMaaDpN6H7-lhyDHAoAvX_cE";
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["movie"],
    queryFn: () => {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token} `,
            },
          }
        )
        .then((res) => res.data);
    },
  });

  console.log("data", data);
  return (
    <div>
      <Card />
    </div>
  );
};

export default Home;
