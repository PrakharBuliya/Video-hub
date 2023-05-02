import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size="md" textTransform={'uppercase'}>
            Subscribe to get daily updates
          </Heading>

          <HStack>
            <Input
              placeholder="Enter Your Email"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
              borderBottom={'2px solid white'}
              py={'2'}
            />

            <Button
              marginTop={'2'}
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
              alignItems={'center'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading
            marginTop={'5'}
            textTransform={'uppercase'}
            alignItems={'center'}
            textAlign={'center'}
          >
            VIDEO HUB
          </Heading>
          <Text fontSize={'sm'} marginTop={'2'}>
            All rights reserved
          </Text>
        </VStack>

        <VStack w={'full'}>
          <Heading
            marginTop={'10'}
            size={'md'}
            textTransform={'uppercase'}
            textAlign={'center'}
          >
            Social Media
          </Heading>

          <Button
            variant={'link'}
            colorScheme={'whiteAlpha.100'}
            marginTop={'2'}
          >
            <a href="https://twitter.com/Prakhar50115657">Twitter</a>
          </Button>

          <Button variant={'link'} colorScheme={'whiteAlpha.100'}>
            <a href="https://github.com/PrakharBuliya">Github</a>
          </Button>

          <Button variant={'link'} colorScheme={'whiteAlpha.100'}>
            <a href="https://www.linkedin.com/in/prakhar-buliya-559354192/">
              LinkedIn
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
