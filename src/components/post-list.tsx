"use client";

import { useState } from "react";
import { Post } from "./post";
import { useDebounce } from "@/hooks/use-debounce";

const PostData = [
  {
    id: 1,
    title: "Reactの基礎",
  },
  {
    id: 2,
    title: "Next.js入門",
  },
  {
    id: 3,
    title: "TypeScript入門",
  },
  {
    id: 4,
    title: "GraphQL入門",
  },
  {
    id: 5,
    title: "Node.js入門",
  },
  {
    id: 6,
    title: "Python入門",
  },
  {
    id: 7,
    title: "Go入門",
  },
  {
    id: 8,
    title: "Ruby入門",
  },
  {
    id: 9,
    title: "Swift入門",
  },
  {
    id: 10,
    title: "Kotlin入門",
  },
];

export const PostList = () => {
  const [searchkeyword, setSearchkeyword] = useState("");
  const debouncedSearchTerm = useDebounce(searchkeyword, 500);

  const filteredPosts = PostData.filter((post) =>
    post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchkeyword}
        onChange={(e) => setSearchkeyword(e.target.value)}
        className="border rounded-md p-2"
      />
      {filteredPosts.map((post) => (
        <Post key={post.id} title={post.title} />
      ))}
    </div>
  );
};
