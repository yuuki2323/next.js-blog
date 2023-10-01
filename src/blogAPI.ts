import { resolve } from "path";
import { Article } from "./types";

export const getAllArticles = async () : Promise<Article[]> => {
const res =  await fetch('http://localhost:3001/posts', {cache: "no-store"});

if(!res.ok){
    throw new Error('エラーが発生しました。');
}
await new Promise((resolve) => setTimeout(resolve,1000));
    const articles  = await res.json();
    return articles;
};