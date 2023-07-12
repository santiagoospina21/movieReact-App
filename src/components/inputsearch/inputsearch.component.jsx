import { useDispatch } from "react-redux";
import { Input, InputSearch } from "../inputsearch/inputsearch.styles";

import { setSearchField } from "../../store/movies/movies.reducer";

const InputSearchComponent = ({ type }) => {
  if (type === undefined) type = "Movies or Tv Shows";
  const dispatch = useDispatch();

  const onChangeSearch = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    dispatch(setSearchField(searchFieldString));
  };

  return (
    <InputSearch>
      <Input placeholder={`Search ${type}`} onChange={onChangeSearch}></Input>
    </InputSearch>
  );
};

export default InputSearchComponent;
