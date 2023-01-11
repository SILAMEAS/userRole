import {setDATA} from '@src/redux/counter/CounterSlice';
import {RootState} from '@src/redux/Store';
import {
  Button,
  Center,
  ChevronLeftIcon,
  CircleIcon,
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
import {useDispatch, useSelector} from 'react-redux';
// import {Platform} from 'react-native';
const Facebook_create = ({navigation}: any) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  // const Create_Acc = async () => {

  //   try {
  //     const res = await fetch(URL + '/user/check', {
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json;charset=UTF-8',
  //       },
  //       body: JSON.stringify(email),
  //     });

  //     const data = await res.json();
  //     console.log('*----------------' + data.email);
  //     if (data.email === email) {
  //       console.log(data.email + '/' + email);
  //       navigation.navigate('View_CRUD');
  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  const Toast = useToast();
  const displach = useDispatch();
  const datas = useSelector((state: RootState) => state.counter.DATA);
  const URL = 'http://10.2.50.9:3001';
  const Create_Acc = async () => {
    const dataa = {
      name,
      email,
      UserRole: 'USER',
    };
    console.log('--------');
    console.log(dataa);

    if (dataa.name !== '' && dataa.email !== '') {
      try {
        const res = await fetch(URL + '/user/create', {
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify(dataa),
        });
        const data = await res.json();

        if (data && data.email === dataa.email) {
          displach(setDATA([...datas, data]));
          Toast.show({
            title: 'Created Account',
            variant: 'solid',
            description: 'Thanks for signing up with us.',
            bg: 'amber.400',
          });
        } else {
          Toast.show({
            title: 'Failed create Account',
            variant: 'solid',
            description: 'Email ready used',
            bg: 'red.800',
          });
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert("All field can't empty");
    }
  };

  return (
    <Stack w={'100%'} safeArea space={'30%'}>
      <HStack
        w={'100%'}
        justifyContent={'space-between'}
        bg={'blue.900:alpha.90'}
        h={'10'}
        alignItems={'center'}
        px={2}
      >
        <Text
          color={'white'}
          onPress={() => {
            navigation.navigate('Interface_facebook');
          }}
        >
          <ChevronLeftIcon color={'white'} />
        </Text>
        <Text fontSize={'lg'} fontWeight={'bold'}>
          Join Facebook
        </Text>
        <HStack>
          <CircleIcon color="green.500" />
        </HStack>
      </HStack>
      <VStack justifyContent={'center'} w={'100%'} mt={2}>
        <Center>
          <Heading fontSize={'xl'}>Want create Account ?</Heading>
          <Text color={'black'}>
            if you want to create account complete this form below.
          </Text>
          <HStack w={'100%'} justifyContent={'center'} space={2}>
            <FormControl isRequired w={'45%'}>
              <Stack>
                <FormControl.Label> Name</FormControl.Label>
                <Input
                  type="text"
                  value={name}
                  onChangeText={(val: any) => {
                    setName(val);
                  }}
                  placeholder="Jonh"
                  placeholderTextColor={'gray.400'}
                  fontWeight={'semibold'}
                  fontSize={'md'}
                  color={'black'}
                  borderWidth={'2'}
                  _focus={{borderColor: 'black'}}
                  h={'12'}
                  borderColor={'black:alpha.10'}
                />
                <FormControl.HelperText></FormControl.HelperText>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>
            <FormControl isRequired w={'45%'}>
              <Stack>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  type="text"
                  defaultValue=""
                  placeholder="xxxx@gmail.com"
                  placeholderTextColor={'gray.400'}
                  fontWeight={'semibold'}
                  fontSize={'md'}
                  color={'black'}
                  borderColor={'black:alpha.10'}
                  _focus={{borderColor: 'black'}}
                  h={'12'}
                  value={email}
                  onChangeText={(val: any) => {
                    setEmail(val);
                  }}
                />
                <FormControl.HelperText></FormControl.HelperText>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>
          </HStack>
          <Button
            bg={'blue.600:alpha.90'}
            rounded={'md'}
            mt={3}
            w={'60%'}
            py={'1.5'}
          >
            <Text fontWeight={'bold'} fontSize={'lg'} onPress={Create_Acc}>
              Create Acc
            </Text>
          </Button>
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
        </Center>
      </VStack>
    </Stack>
  );
};

export default Facebook_create;
