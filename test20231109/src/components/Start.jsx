import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Box, Center, Heading, Image } from '@chakra-ui/react';
import images from '../images/mbti.png';

const Start = () => {
    const navigate = useNavigate();

    const navigateToTest = () => {
        navigate("/Test");
    }

    return (
        <Center h="100vh" bg="gray">
            <Box textAlign="center">
                <Image src={images} alt='logo' />
                <Heading mt="40px" color="white">간단한 MBTI 테스트</Heading>
                <Button
                    size="lg"
                    w="50%"
                    fontSize="xl"
                    bgGradient="linear(to-r, #29323C, #485563, #2B5876, #4E4376)"
                    boxShadow="0 4px 15px 0 rgba(45, 54, 65, 0.75)"
                    color="white"
                    borderRadius="15px"
                    onClick={navigateToTest}
                >
                    Start!
                </Button>
            </Box>
        </Center>
    );
}

export default Start;
