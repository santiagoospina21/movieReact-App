import { Input, InputSearch } from "../inputsearch/inputsearch.styles";

const InputSearchComponent = ({ onChangeSearch }) => {
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
