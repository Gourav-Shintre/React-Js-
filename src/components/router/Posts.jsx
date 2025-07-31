import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Posts = () => {

    const navigate = useNavigate()
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const getPost = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      await setPosts(getPost.data);
    };
    getData();
  }, []);
  console.log(posts);

  return (
    <div>
      {posts?.map((item) => (
        <ul key={item.id}>
          <li>{item.id}</li>
          <li>{item.title}</li>
          <button style={{ cursor: "pointer" }} onClick={()=>navigate(`${item.id}`)}>View</button>
        </ul>
      ))}
    </div>
  );
};

export default Posts;
