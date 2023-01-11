import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  FormControl,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
const Facebook = ({navigation}: any) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const Toast = useToast();
  const checkLogin = async () => {
    const URL = 'http://10.2.50.9:3001';
    const dataA = {
      email,
      name,
    };
    try {
      const res = await fetch(URL + '/user/check', {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(dataA),
      });

      const data = await res.json();

      console.log('*----------------' + data);
      if (data?.email === email && data?.name === name) {
        Toast.show({
          title: 'Log in  (-Success-)',
          bg: 'green.600',
        });
        console.log(data.UserRole);
        data.UserRole === 'ADMIN'
          ? navigation.navigate('View_CRUD')
          : navigation.navigate('Interface_facebook_profile');
      } else {
        Toast.show({
          title: 'Problem',

          description: 'Invalid email and name',
          bg: 'red.600',
        });
      }
    } catch (error) {
      Toast.show({
        title: `${error}`,

        description: 'Invalid email and name',
        bg: 'red.600',
      });
    }
  };

  return (
    <Center bg={'white'} h={'100%'}>
      <Container width={'90%'} mx={'auto'}>
        <VStack w={'100%'} h={'100%'} space={'16'}>
          <VStack space={2}>
            <HStack>
              {Platform.OS === 'ios' && (
                <VStack>
                  <Heading
                    color={'blue.700'}
                    fontSize={'md'}
                    onPress={() => {
                      navigation.navigate('View_CRUD');
                    }}
                  >
                    Facebook
                  </Heading>
                  <Text color={'black'}>
                    Connect with friends and the world around you on Facebook.
                  </Text>
                </VStack>
              )}

              <Box w={'100%'} rounded={'md'}>
                <VStack alignItems={'center'} space={2} pt={'1/6'}>
                  <Heading
                    color={'blue.600:alpha.90'}
                    fontSize={'2xl'}
                    onPress={() => {
                      navigation.navigate('View_CRUD');
                    }}
                  >
                    facebook
                  </Heading>
                </VStack>
                <VStack w={'100%'} mt={3}>
                  <Box alignItems="center">
                    <Box w="100%" maxWidth="300px">
                      <FormControl isRequired>
                        <Stack>
                          <Input
                            h={'12'}
                            type="text"
                            defaultValue=""
                            placeholder="Name"
                            value={name}
                            color={'black'}
                            onChangeText={(val: any) => setName(val)}
                            fontWeight={'semibold'}
                            borderColor={'black:alpha.30'}
                            bg={'gray.200:alpha.10'}
                            _focus={{borderColor: 'black'}}
                            fontSize={'md'}
                          />
                          <FormControl.HelperText></FormControl.HelperText>
                          <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                          >
                            Atleast 6 characters are required.
                          </FormControl.ErrorMessage>
                        </Stack>
                      </FormControl>
                      <FormControl isRequired>
                        <Stack>
                          <Input
                            type="text"
                            defaultValue=""
                            placeholder="Mobile number or email"
                            placeholderTextColor={'gray.400'}
                            fontWeight={'semibold'}
                            fontSize={'md'}
                            value={email}
                            onChangeText={(val: any) => setEmail(val)}
                            color={'black'}
                            borderColor={'black:alpha.30'}
                            bg={'gray.200:alpha.10'}
                            _focus={{borderColor: 'black'}}
                            h={'12'}
                          />
                          <FormControl.HelperText></FormControl.HelperText>
                          <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                          >
                            Atleast 6 characters are required.
                          </FormControl.ErrorMessage>
                        </Stack>
                      </FormControl>
                    </Box>
                  </Box>
                </VStack>
              </Box>
            </HStack>
            <VStack alignItems={'center'} space={5}>
              <Button w={'100%'} bg={'blue.600:alpha.90'} onPress={checkLogin}>
                <Text fontWeight={'bold'} color={'white'} fontSize={'md'}>
                  Log in
                </Text>
              </Button>
              <Text color={'blue.600'}>Forgot Password?</Text>
              <HStack
                w={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
                px={'1/4'}
              >
                <Divider bg="black:alpha.30" />
                <Text color={'black:alpha.70'} px={3}>
                  or
                </Text>
                <Divider bg="black:alpha.30" />
              </HStack>
              <Button
                bg={'white'}
                w={'90%'}
                rounded={'sm'}
                borderWidth={'1'}
                borderColor={'black:alpha.20'}
                py={2}
              >
                <Text
                  color={'black'}
                  onPress={() => {
                    navigation.navigate('Interface_facebook_create');
                  }}
                >
                  Create new account
                </Text>
              </Button>
            </VStack>
          </VStack>
          <VStack space={3} w={'100%'}>
            <HStack
              alignItems={'center'}
              justifyContent="space-between"
              w={'80%'}
              mx={'auto'}
              mt={30}
            >
              <VStack>
                <Center>
                  <Text color={'black:alpha.40'} fontWeight={'semibold'}>
                    English (US)
                  </Text>
                  <Text color={'black:alpha.40'} fontWeight={'semibold'}>
                    Francais (France)
                  </Text>
                  <Text color={'black:alpha.40'} fontWeight={'semibold'}>
                    dsf
                  </Text>
                  <Text color={'black:alpha.40'} fontWeight={'semibold'}>
                    Portuhues (Brasil)
                  </Text>
                </Center>
              </VStack>
              <VStack>
                <Center>
                  <Text color={'black:alpha.40'} fontWeight={'semibold'}>
                    Khmer
                  </Text>
                  <Text color={'black:alpha.40'} fontWeight={'semibold'}>
                    Treng Viet
                  </Text>
                  <Text color={'black:alpha.40'} fontWeight={'semibold'}>
                    Espanol
                  </Text>
                  <Text color={'black:alpha.40'} fontWeight={'semibold'}>
                    icon
                  </Text>
                </Center>
              </VStack>
            </HStack>
            <VStack justifyContent={'center'} alignItems={'center'} w={'100%'}>
              <Center width={'100%'}>
                <Text color={'black:alpha.40'}>Meta &copy; 2023</Text>
              </Center>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Center>
  );
};

export default Facebook;
