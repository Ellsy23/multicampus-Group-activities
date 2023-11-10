import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';

const PostDetails = () => {
  const { postId } = useParams();
  // API 또는 DB에서 postId에 해당하는 글 데이터를 가져와야 함

  // 임시 가상 데이터 예시
  const postData = 
  { id: 1, title: '4조 구성원', content: '이준현, 문태랑, 강이경, 김진수'};
  
  return (
    <Box>
      <Heading as="h2" mb="4">
        {postData.title}
      </Heading>
      <Text>{postData.content}</Text>
    </Box>
  );
};

export default PostDetails;
