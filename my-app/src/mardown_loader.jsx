import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

function Md1({ fileName }) {
  
  const [post, setPost] = useState("");
  useEffect(() => {
    import(`./Markdownfiles/${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
  return <Markdown>{post}</Markdown>;
}
export default Md1;
