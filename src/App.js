import { useState } from "react";
import "./App.css";
import Comment from "./components/Comment";
import "./styles.css";
import useNode from "./hooks/useNode";
const comment = {
  id: 1,
  items: [],
};

function App() {
  const [commentsData, setCommentsData] = useState(comment);
  const { insertNode, editNode, deleteNode } = useNode();
  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    console.log(finalStructure);
    setCommentsData(finalStructure);
  };
  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };
  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };
  return (
    <div className="App">
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
  );
}

export default App;
