import ky from 'ky';

export type PostResponse = {
  userId: number,
  id: number,
  title: string,
  body: string,
}


export const getPosts = async ()=> {
  return await ky.get('https://jsonplaceholder.typicode.com/posts').json() as PostResponse[];
}
