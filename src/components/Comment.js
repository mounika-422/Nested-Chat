import { ReactComponent as DownArow } from "../assets/down-arrow.svg";
import { ReactComponent as UpArrow } from "../assets/up-arrow.svg";
import React, { useState } from "react";
import Action from "./Action";
const Comment = ({
  comment,
  handleEditNode,
  handleInsertNode,
  handleDeleteNode,
}) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };

  const onAddComment = () => {
    setExpand(true);
    handleInsertNode(comment.id, input);
    setShowInput(false);
    setInput("");
  };

  return (
    <div>
      <div>
        {comment.id === 1 ? (
          <>
            <input
              type="text"
              className="inputContainer__input first_input"
              autoFocus
              value={input || ""}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type..."
            />
            <Action
              className="reply comment"
              onClick={onAddComment}
              type="COMMENT"
            />
          </>
        ) : (
          <>
            <span contentEditable={editMode} style={{ wordWrap: "break-word" }}>
              {comment?.name}
            </span>
            <div style={{ display: "flex", marginTop: "5px" }}>
              {editMode ? (
                <>
                  <Action className="reply" type="SAVE" />
                  <Action
                    className="reply"
                    type="CANCEL"
                    handleClick={() => {
                      setEditMode(false);
                    }}
                  />
                </>
              ) : (
                <>
                  <Action
                    className="reply"
                    onClick={handleNewComment}
                    type={
                      <>
                        {expand ? (
                          <UpArrow width="10px" height="10px" />
                        ) : (
                          <DownArow width="10px" height="10px" />
                        )}
                        REPLY
                      </>
                    }
                  />
                  <Action
                    className="reply"
                    type="EDIT"
                    handleClick={() => {
                      setEditMode(true);
                    }}
                  />
                  <Action className="reply" type="DELETE" />
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {showInput && (
          <div className="inputContainer">
            <input
              type="text"
              className="inputContainer__input"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Action className="reply" type="REPLY" onClick={onAddComment} />
            <Action
              className="reply"
              type="CANCEL"
              handleClick={() => setShowInput(false)}
            />
          </div>
        )}
        {comment?.items?.map((cmnt) => {
          return <Comment key={cmnt.id} comment={cmnt} />;
        })}
      </div>
    </div>
  );
};

export default Comment;
