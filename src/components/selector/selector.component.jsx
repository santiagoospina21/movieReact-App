import { Selector, Option } from "./selector.styles";

const SelectorComponent = ({ selectedGenre, handleGenreChange, type }) => {
  if (type[0].original_title === undefined) return;

  return (
    <>
      {type[0].original_title ? (
        <Selector value={selectedGenre} onChange={handleGenreChange}>
          <Option value={28}>Action</Option>
          <Option value={12}>Adventure</Option>
          <Option value={16}>Animation</Option>
          <Option value={35}>Comedy</Option>
          <Option value={80}>Crime</Option>
          <Option value={99}>Documentary</Option>
          <Option value={18}>Drama</Option>
          <Option value={10751}>Family</Option>
          <Option value={14}>Fantasy</Option>
          <Option value={36}>History</Option>
          <Option value={27}>Horror</Option>
          <Option value={10402}>Music</Option>
          <Option value={9648}>Mystery</Option>
          <Option value={10749}>Romance</Option>
          <Option value={878}>Science Fiction</Option>
          <Option value={10770}>TV Movie</Option>
          <Option value={53}>Thriller</Option>
          <Option value={10752}>War</Option>
          <Option value={37}>Western</Option>
        </Selector>
      ) : (
        <Selector value={selectedGenre} onChange={handleGenreChange}>
          <Option value={10759}>Action & Adventure</Option>
          <Option value={16}>Animation</Option>
          <Option value={35}>Comedy</Option>
          <Option value={80}>Crime</Option>
          <Option value={99}>Documentary</Option>
          <Option value={18}>Drama</Option>
          <Option value={10751}>Family</Option>
          <Option value={10762}>Kids</Option>
          <Option value={9648}>Mistery</Option>
          <Option value={10763}>News</Option>
          <Option value={10764}>Reality</Option>
          <Option value={10765}>Science Fiction & Fantasy</Option>
          <Option value={10766}>Soap</Option>
          <Option value={10767}>Talk </Option>
          <Option value={10768}>War & Politics</Option>
          <Option value={37}>Western</Option>
        </Selector>
      )}
    </>
  );
};

export default SelectorComponent;
