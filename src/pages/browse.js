import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter"

function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter({series, films})
  console.log(slides)

  return <div>Hello from browse</div>;
}

export default Browse;
