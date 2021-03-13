import { newsUrl } from "../constants/dataConstants";
import { headlineUrl } from "../constants/dataConstants";
export function fetchNewsApi() {
  return fetch(newsUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
}
export function fetchHeadlineApi() {
  return fetch(headlineUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
}
