import { groq } from 'next-sanity';
import { client } from './client';

export async function getFeaturedQuotes() {
  return client.fetch(
    groq`*[_type == "quote" && isFeatured == true] | order(_createdAt desc) {
      _id,
      text,
      author,
      category,
      image,
      youtubeUrl,
      likes,
      isFeatured
    }`
  );
}

export async function getAllQuotes() {
  return client.fetch(
    groq`*[_type == "quote"] | order(_createdAt desc) {
      _id,
      text,
      author,
      category,
      image,
      youtubeUrl,
      likes,
      isFeatured
    }`
  );
}

export async function getQuoteById(id) {
  return client.fetch(
    groq`*[_type == "quote" && _id == $id][0] {
      _id,
      text,
      author,
      category,
      image,
      youtubeUrl,
      likes,
      isFeatured
    }`,
    { id }
  );
}
