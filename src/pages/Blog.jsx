import React, { useEffect, useState } from 'react'



function Blog() {
  const [blog, setBlog] = useState([]);

useEffect(()=>
{
  async function fetchData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const result = await response.json();
    console.log(result);
    setBlog(result);
  }
  fetchData();
}, []);



return (
  <div className="blogpage">
    {blog.length > 0
      ? blog.map((post) => {
          return (
            <div className="blogpost" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })
      : ""}
  </div>
);
}

export default Blog