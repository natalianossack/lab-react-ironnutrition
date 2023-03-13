import { useState } from 'react';

import { Divider, Input } from 'antd';

// Iteration 5
function Search(filterList) {
    const [search, setSearch] = useState();

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearch(value);
        filterList(value);
    }


  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;