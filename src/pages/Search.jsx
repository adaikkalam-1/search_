import { useEffect, useState } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setFilterData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (e) => {
    const value = e.target.value;

    if (value === "") {
      setData([]);
      return;
    }

    const res = filterData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(res);
  };

  return (
    <div className="search_top">
      <div className="search">
        <input
          type="text"
          placeholder="Search Here ..."
          onChange={handleFilter}
        />
      </div>
      <div className="search_result">
        {data.map((item, i) => (
          <div key={i}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Search;
