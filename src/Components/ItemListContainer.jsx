import React from "react";

export default function ItemListContainer(props) {
  return (
    <>
      <h2 className="text-2xl bg-gray-600 text-white text-center uppercase py-3 font-bold">
        {props.text}
      </h2>
    </>
  );
}
