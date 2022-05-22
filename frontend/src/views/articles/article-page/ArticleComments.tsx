import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/controls/Button";
import useArticleComments from "../../../hooks/data/ArticleCommentsDataHook";
import { ArticleComment } from "../../../types/Articles";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Title = styled.h3`
  font-size: 18pt;
`;

const NewCommentInput = styled.textarea`
  padding: 10px;
  height: 100px;
  font-size: 11pt;
  border-radius: 5px;
`;

const NewCommentControls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 10px;
  justify-content: flex-end;
`;

const ExistingComments = styled.div`
  margin-top: 20px;
`;

const ExistingComment = styled.div`
  background: #f1f1f1;
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px;
`;

const ExistingCommentUserFullName = styled.span`
  font-size: 12pt;
  font-weight: 500;
`;

const ExistingCommentUserName = styled.span`
  margin-left: 5px;
  opacity: 0.4;
  font-size: 10pt;
`;

const ExistingCommentContent = styled.div`
  margin-top: 10px;
  font-size: 10pt;
  line-height: 17px;
`;

const ArticleComments = (props: { articleId: number }) => {
  const getCommentsByArticleId = useArticleComments();

  const [comments, setComments] = useState<ArticleComment[]>(
    getCommentsByArticleId(props.articleId)
  );
  const [newCommentText, setNewCommentText] = useState("");

  const sendComment = () => {
    const lastCommentId = Math.max(...comments.map((c) => c.id));

    const newCommentObject = {
      id: lastCommentId + 1,
      articleId: props.articleId,
      date: new Date(),
      content: newCommentText,
      user: {
        name: "test_user",
        fullName: "Test User",
      },
    };

    setComments([...comments, newCommentObject]);
    setNewCommentText("");
  };

  return (
    <Container>
      <Title>{comments.length} comments</Title>

      <NewCommentInput
        placeholder="Write your comment..."
        maxLength={1000}
        value={newCommentText}
        onChange={(e) => setNewCommentText(e.target.value)}
      />
      <NewCommentControls>
        <Button label="Send comment" onClick={() => sendComment()} />
      </NewCommentControls>

      <ExistingComments>
        {comments.map((c) => (
          <ExistingComment key={c.id}>
            {c.user.fullName && (
              <ExistingCommentUserFullName>
                {c.user.fullName}
              </ExistingCommentUserFullName>
            )}
            <ExistingCommentUserName>@{c.user.name}</ExistingCommentUserName>
            <ExistingCommentContent>{c.content}</ExistingCommentContent>
          </ExistingComment>
        ))}
      </ExistingComments>
    </Container>
  );
};

export default ArticleComments;
