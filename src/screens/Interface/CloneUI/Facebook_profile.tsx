import {
  Box,
  ChevronLeftIcon,
  HamburgerIcon,
  HStack,
  Icon,
  Input,
  SearchIcon,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {AntDesign} from '@expo/vector-icons';

const Facebook_profile = () => {
  const color = 'white';
  return (
    <Box h={'100%'} w={'100%'} safeArea>
      <Box h={'20'} bg={'blue.800:alpha.70'}>
        <Box>
          <VStack justifyContent={'space-between'} h={'100%'}>
            <HStack justifyContent={'space-between'} px={2}>
              <Icon
                as={AntDesign}
                name="android1"
                color="coolGray.800"
                _dark={{
                  color: 'warmGray.50',
                }}
              />
              <Text color={color}>9:41PM</Text>
              <Text color={color}>100% </Text>
            </HStack>
            <HStack
              justifyContent={'space-around'}
              alignItems={'center'}
              px={4}
              space={8}
              pb={2}
            >
              <ChevronLeftIcon color={'white'} />

              <Input
                w={'90%'}
                size={'sm'}
                bg={'black:alpha.30'}
                borderWidth={0}
                placeholder={'SILA'}
                placeholderTextColor={'white'}
                color={'red.700'}
                InputLeftElement={<SearchIcon color={'white'} ml={'40%'} />}
              />

              <HamburgerIcon color={'white'} />
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Facebook_profile;
