import { Hero } from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={false} />
    </>
  );
};
