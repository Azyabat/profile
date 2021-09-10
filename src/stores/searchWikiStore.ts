import { action, makeAutoObservable, observable } from "mobx";

export interface ISearchResult {
  title: string;
  pageid: number;
  snippet: string;
}

class SearchWikiStore {
  @observable public searchValue: string = "";
  @observable public results: ISearchResult[] | undefined = undefined;
  private static readonly urlWiki =
    "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=";

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async changeSearchValue(text: string) {
    this.searchValue = text;
    const data = await fetch(`${SearchWikiStore.urlWiki}${this.searchValue}`);
    await data.json().then((response) => {
      this.results = response.query.search;
    });
  }
}

export default new SearchWikiStore();
