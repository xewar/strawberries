"use client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import PlantsList from "@/components/PlantsList";
import SeedsContainer from "@/containers/SeedsContainer";

const fetchPlants = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch plants");
  }
  return response.json();
};

const SearchPage = () => {
  //search results page

  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  //query that we'll send to our API
  const encodedSearchQuery = encodeURI(searchQuery || "");
  //making a get request to the endpoint (first parameter of useSWR hook)
  const { data, isLoading } = useSWR(
    `/api/search?q=${encodedSearchQuery}`,
    fetchPlants
  );
  if (!data) {
    return null;
  } else {
    return (
      <div>
        <SeedsContainer plants={data.plants} />
      </div>
    );
  }
};

export default SearchPage;
