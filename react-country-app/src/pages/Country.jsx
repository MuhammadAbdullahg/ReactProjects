import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { CountryCard } from "../components/layout/CountryCard";
import { Loader } from "../components/UI/Loader";
import { SearchFilter } from "../components/UI/SearchFilter";
import { FiToggleLeft } from "react-icons/fi";

const Country = () => {
  const [isPending, startTranstion] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    } else {
      return country;
    }
  };

  const searchRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && searchRegion(country),
  );

  useEffect(() => {
    startTranstion(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;
  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((country, index) => {
          return <CountryCard country={country} keys={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
