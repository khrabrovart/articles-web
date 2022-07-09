import * as CommentsService from "../../../services/CommentsService";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/controls/Button";
import useDateFormatter from "../../../hooks/DateFormatterHook";
import { ArticleComment } from "../../../types/Articles";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 18pt;
`;

const NewCommentInput = styled.textarea`
  padding: 10px;
  height: 100px;
  font-size: 11pt;
  border-radius: 2px;
  font-family: inherit;
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
  background: #f5f5f5;
  margin-top: 20px;
  border-radius: 2px;
  padding: 10px;
`;

const ExistingCommentAuthorFullName = styled.span`
  font-size: 12pt;
  font-weight: 600;
`;

const ExistingCommentMetadata = styled.span`
  margin-left: 5px;
  opacity: 0.5;
  font-size: 10pt;
`;

const ExistingCommentContent = styled.div`
  margin-top: 10px;
  font-size: 10pt;
  line-height: 17px;
`;

const ArticleComments = (props: {
  articleId: string;
  comments: ArticleComment[];
}) => {
  const formatDate = useDateFormatter();
  const [newCommentText, setNewCommentText] = useState("");

  const sendComment = async () => {
    if (!newCommentText) {
      return;
    }

    const promise = CommentsService.createComment(
      props.articleId,
      newCommentText
    );
    setNewCommentText("");

    await promise;
    //props.comments.push(newCommentObject);
  };

  const getLabel = () => (props.comments.length == 1 ? "comment" : "comments");

  return (
    <Container>
      <Title>
        {props.comments.length} {getLabel()}
      </Title>

      <NewCommentInput
        placeholder="Write your comment..."
        maxLength={1000}
        value={newCommentText}
        onChange={(e) => setNewCommentText(e.target.value)}
      />
      <NewCommentControls>
        <Button
          label="Send comment"
          onClick={() => sendComment()}
          disabled={!newCommentText}
        />
      </NewCommentControls>

      <ExistingComments>
        {props.comments.map((c) => (
          <ExistingComment key={c.id}>
            {c.author.fullName && (
              <ExistingCommentAuthorFullName>
                {c.author.fullName}
              </ExistingCommentAuthorFullName>
            )}
            <ExistingCommentMetadata>
              {`@${c.author.userName} on ${formatDate(c.createdOn)}`}
            </ExistingCommentMetadata>
            <ExistingCommentContent>{c.content}</ExistingCommentContent>
          </ExistingComment>
        ))}
      </ExistingComments>
    </Container>
  );
};

export default ArticleComments;
