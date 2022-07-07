import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../components/controls/Button";
import useDateFormatter from "../../../hooks/DateFormatterHook";
import { getArticleComments } from "../../../services/CommentsService";
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

const ArticleComments = (props: { articleId: string }) => {
  const formatDate = useDateFormatter();
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState<ArticleComment[]>([]);

  useEffect(() => {
    const loadComments = async () => {
      const result = await getArticleComments("test");
      setComments(result);
    };
    loadComments();
  }, []);

  const sendComment = () => {
    if (!newCommentText) {
      return;
    }
    const newCommentObject = {
      id: "test",
      articleId: "test",
      date: new Date(),
      content: newCommentText,
      author: {
        userId: 100,
        userImageId: 100,
        userName: "test_user",
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
        <Button
          label="Send comment"
          onClick={() => sendComment()}
          disabled={!newCommentText}
        />
      </NewCommentControls>

      <ExistingComments>
        {comments.map((c) => (
          <ExistingComment key={c.id}>
            {c.author.fullName && (
              <ExistingCommentAuthorFullName>
                {c.author.fullName}
              </ExistingCommentAuthorFullName>
            )}
            <ExistingCommentMetadata>
              {`@${c.author.userName} on ${formatDate(c.date)}`}
            </ExistingCommentMetadata>
            <ExistingCommentContent>{c.content}</ExistingCommentContent>
          </ExistingComment>
        ))}
      </ExistingComments>
    </Container>
  );
};

export default ArticleComments;
