import React from "react";
import { useDoc } from "@docusaurus/theme-common/internal";
import "../css/components/toc-edit-article.scss";

function TOCEditArticle() {
  const { metadata } = useDoc(); //NOTE, maybe in the future we can use frontMatter prop for date retrieval
 
  return <div><a href={metadata.editUrl} target="_blank">Edit this page.</a></div>;
}

export default TOCEditArticle;
