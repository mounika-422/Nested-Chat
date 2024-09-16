import React from "react";

const useNode = () => {
  const insertNode = function (tree, commentId, item) {
    if (tree.id === commentId) {
      tree.items.push({
        id: new Date().getTime(),
        name: item,
        items: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      console.log(ob);
      return insertNode(ob, commentId, item);
    });
    return { ...tree, items: latestNode };
  };
  const editNode = (tree, commentId, value) => {};
  const deleteNode = (tree, id) => {};
  return { insertNode, deleteNode, editNode };
};

export default useNode;
