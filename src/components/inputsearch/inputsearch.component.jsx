import { useDispatch } from "react-redux";
import { Input, InputSearch } from "../inputsearch/inputsearch.styles";

import { setSearchField } from "../../store/movies/movies.reducer";

const InputSearchComponent = () => {
  const dispatch = useDispatch();

  const onChangeSearch = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    dispatch(setSearchField(searchFieldString));
  };
  return (
    <InputSearch>
      <Input
        placeholder="Search Movies or TV Shows"
        onChange={onChangeSearch}
      ></Input>
    </InputSearch>
  );
};

export default InputSearchComponent;
