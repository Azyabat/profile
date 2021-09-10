import { Input } from "antd";
import { observer } from "mobx-react-lite";
import SearchItem from "../SearchItem/SearchItem";
import { ISearchWikiProps } from "./SearchWiki.types";
import SearchWikiStore from "../../stores/searchWikiStore";
import { toJS } from "mobx";

const SearchWiki = observer((props: ISearchWikiProps) => {
  const { Search } = Input;

  const handleSearch = (value: string) => {
    SearchWikiStore.changeSearchValue(value);
  };

  const getSearchItems = () => {
    const data = SearchWikiStore.results;

    return data?.map((page) => {
      return <SearchItem {...page} />;
    });
  };

  console.log(toJS(SearchWikiStore.results));
  return (
    <div>
      <Search
        className="search-field"
        enterButton="Поиск"
        size="large"
        placeholder="Введите запрос"
        onSearch={handleSearch}
      />
      <div className="search-wiki__results">
        <div className="search-wiki__results-column">
          <h3>Поисковые результаты</h3>
          {getSearchItems()}
        </div>
        <div className="search-wiki__results-column">
          <h3>Избранное</h3>
          {SearchWikiStore.searchValue}
        </div>
      </div>
    </div>
  );
});

export default SearchWiki;
