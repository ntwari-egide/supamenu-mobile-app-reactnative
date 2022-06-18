//@ts-nocheck
import React from 'react';
import {
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
  FlatList,
  NativeBaseProvider,
} from 'native-base';
import { BottomNavigation, Text } from 'react-native-paper';
import 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
import { List } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Login: undefined;
  Dashboard: undefined;
  Payed: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

function CustomNavigationBar() {
  return (
    <Appbar.Header>
      <Appbar.Content title="My awesome app" />
    </Appbar.Header>
  );
}

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;


const HomeScreen = () => {
  const [expanded, setExpanded] = React.useState(true);

  const navigation = useNavigation<HomeScreenProp>();

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={{ backgroundColor: 'white', height: 900 }}>
      <Text style={{ padding: 30, color: '#F0A13A' }}>Nearby Restourant</Text>

      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: 'row',
          backgroundColor: '#F2F2F2',
          marginHorizontal: 30,
          borderRadius: 10,
          marginTop: 10,
        }}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 10 }}
          source={{
            uri: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
        <View
          style={{ marginLeft: 20 }}
          onPress={() => navigation.navigate('Details')}>
          <Text style={{ color: '#7F7F7F', fontWeight: 600, marginTop: 5 }}>
            Choose Kigali
          </Text>
          <Text
            style={{
              color: '#88898C',
              fontWeight: 400,
              marginTop: 10,
              fontSize: 12,
            }}>
            World,Africa,Pizzeria,Coffee,..{' '}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: 'row',
          backgroundColor: '#F2F2F2',
          marginHorizontal: 30,
          borderRadius: 10,
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('Details')}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 10 }}
          source={{
            uri: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: '#7F7F7F', fontWeight: 600, marginTop: 5 }}>
            Choose Kigali
          </Text>
          <Text
            style={{
              color: '#88898C',
              fontWeight: 400,
              marginTop: 10,
              fontSize: 12,
            }}>
            World,Africa,Pizzeria,Coffee,..{' '}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: 'row',
          backgroundColor: '#F2F2F2',
          marginHorizontal: 30,
          borderRadius: 10,
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('Details')}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 10 }}
          source={{
            uri: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: '#7F7F7F', fontWeight: 600, marginTop: 5 }}>
            Choose Kigali
          </Text>
          <Text
            style={{
              color: '#88898C',
              fontWeight: 400,
              marginTop: 10,
              fontSize: 12,
            }}>
            World,Africa,Pizzeria,Coffee,..{' '}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: 'row',
          backgroundColor: '#F2F2F2',
          marginHorizontal: 30,
          borderRadius: 10,
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('Details')}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 10 }}
          source={{
            uri: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: '#7F7F7F', fontWeight: 600, marginTop: 5 }}>
            Choose Kigali
          </Text>
          <Text
            style={{
              color: '#88898C',
              fontWeight: 400,
              marginTop: 10,
              fontSize: 12,
            }}>
            World,Africa,Pizzeria,Coffee,..{' '}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: 'row',
          backgroundColor: '#F2F2F2',
          marginHorizontal: 30,
          borderRadius: 10,
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('Details')}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 10 }}
          source={{
            uri: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: '#7F7F7F', fontWeight: 600, marginTop: 5 }}>
            Choose Kigali
          </Text>
          <Text
            style={{
              color: '#88898C',
              fontWeight: 400,
              marginTop: 10,
              fontSize: 12,
            }}>
            World,Africa,Pizzeria,Coffee,..{' '}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: 'row',
          backgroundColor: '#F2F2F2',
          marginHorizontal: 30,
          borderRadius: 10,
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('Details')}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 10 }}
          source={{
            uri: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: '#7F7F7F', fontWeight: 600, marginTop: 5 }}>
            Choose Kigali
          </Text>
          <Text
            style={{
              color: '#88898C',
              fontWeight: 400,
              marginTop: 10,
              fontSize: 12,
            }}>
            World,Africa,Pizzeria,Coffee,..{' '}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const DetailsScreen = (props) => {
  return (
    <SafeAreaProvider style={{ backgroundColor: 'black' }}>
      <View style={{ marginTop: 100 }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#F7941C',
            fontWeight: 900,
            fontSize: 25,
          }}>
          Choose Kigali
        </Text>

        <View
          style={{ flexDirection: 'row', marginHorizontal: 40, marginTop: 50 }}>
          <View
            style={{
              marginHorizontal: 20,
              borderRightColor: '#F7941C',
              borderRightWidth: 1,
              paddingRight: 30,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="space-shuttle" size={30} color="#F7941C" />
              <Text style={{ color: 'white', fontSize: 24, marginLeft: 10 }}>
                N8
              </Text>
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                marginLeft: 10,
                marginTop: 20,
                fontWeight: 900,
              }}>
              Ordered
            </Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', marginLeft: 34 }}>
              <Icon name="space-shuttle" size={30} color="#F7941C" />
            </View>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                opacity: 0.6,
                marginLeft: 10,
                marginTop: 20,
                fontWeight: 900,
              }}>
              Call Waiter
            </Text>
          </View>
        </View>

        <Text
          style={{
            textAlign: 'center',
            color: '#F7941C',
            fontWeight: 900,
            fontSize: 25,
            marginTop: 60,
            marginBottom: 40,
          }}>
          menu
        </Text>

        <View style={{ marginLeft: 60 }}>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                width: 200,
                marginLeft: 50,
                opacity: 0.8,
                fontWeight: 300,
              }}>
              Appetizer
            </Text>
            <Icon name="angle-right" size={30} color="white" />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                width: 200,
                marginLeft: 50,
                opacity: 0.8,
                fontWeight: 300,
              }}>
              Starter
            </Text>
            <Icon name="angle-right" size={30} color="white" />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                width: 200,
                marginLeft: 50,
                opacity: 0.8,
                fontWeight: 300,
              }}>
              Main
            </Text>
            <Icon name="angle-right" size={30} color="white" />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                width: 200,
                marginLeft: 50,
                opacity: 0.8,
                fontWeight: 300,
              }}>
              Dessert
            </Text>
            <Icon name="angle-right" size={30} color="white" />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                width: 200,
                marginLeft: 50,
                opacity: 0.8,
                fontWeight: 300,
              }}>
              Drink
            </Text>
            <Icon name="angle-right" size={30} color="white" />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const DishesScreen = () => (
  <Text style={{ padding: 30, color: 'green' }}>Dishes Content goes here</Text>
);

const HistoryScreen = () => (
  <Text style={{ padding: 30, color: 'green' }}>History Content goes here</Text>
);

const CartScreen = () => (
  <Text style={{ padding: 30, color: 'green' }}>Cart Content goes here</Text>
);

// type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

type SignupScreenProp = StackNavigationProp<RootStackParamList, "Signup">

const SignupScreen = () => {
  const navigation = useNavigation<SignupScreenProp>();
  return (
    <View style={styles.body}>
      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <Text style={{ fontWeight: 800, fontSize: 35 }}>Supa</Text>
          <Text
            style={{
              color: 'rgb(237, 146, 29)',
              fontWeight: 800,
              fontSize: 35,
            }}>
            Menu
          </Text>
        </View>
        <Text
          style={{
            color: 'rgb(80, 93, 131)',
            textAlign: 'center',
            marginTop: 20,
            fontWeight: 600,
          }}>
          Welcome ...
        </Text>

        <Text
          style={{
            color: 'rgb(80, 93, 131)',
            textAlign: 'center',
            marginTop: 20,
            fontWeight: 600,
          }}>
          Please fill in information{' '}
        </Text>

        {/* form goes here */}
        <View style={{ marginTop: 30 }}>
          <TextInput
            style={styles.input}
            // onChangeText={onChangeEmail}
            placeholder="Full Name"
            // value={email}
            placeholderTextColor="rgb(216, 216, 216)"
          />

          <TextInput
            style={styles.input}
            // onChangeText={onChangeEmail}
            placeholder="Phone Number"
            // value={email}
            placeholderTextColor="rgb(216, 216, 216)"
          />

          <TextInput
            style={styles.input}
            // onChangeText={onChangePassWord}
            placeholder="Your Email"
            // value={password}
            placeholderTextColor="rgb(216, 216, 216)"
          />

          <Button
            style={styles.signInButton}
            mode="contained"
            onPress={() => navigation.navigate('Login')}>
            Proceed
          </Button>
        </View>

        <Text style={{ textAlign: 'center', color: 'gray', marginTop: 20 }}>
          Or
        </Text>
        <Text style={{ textAlign: 'center', color: 'gray', marginTop: 20 }}>
          If you have a PMG account
        </Text>

        <Button
          style={styles.signInButton}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Sign In
        </Button>
        <View
          style={{
            flexDirection: 'row',
            borderColor: 'rgb(242, 242, 242)',
            marginTop: 20,
            borderWidth: 1,
            borderRadius: 3,
            paddingVertical: 15,
            paddingHorizontal: 8,
            marginHorizontal: 20,
          }}>
          <Icon name="google" size={30} color="black" />
          <Text
            style={{
              fontWeight: 500,
              color: 'rgb(179, 185, 203)',
              marginTop: 3,
              textAlign: 'center',
              marginHorizontal: 50,
            }}>
            Login with Google
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            borderColor: 'rgb(242, 242, 242)',
            borderWidth: 1,
            borderRadius: 3,
            paddingVertical: 15,
            paddingHorizontal: 8,
            marginHorizontal: 20,
          }}>
          <Icon name="facebook" size={30} color="#0295E0" />
          <Text
            style={{
              fontWeight: 500,
              color: 'rgb(179, 185, 203)',
              marginTop: 3,
              textAlign: 'center',
              marginLeft: 50,
            }}>
            Login with facebook
          </Text>
        </View>
      </View>
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  const [loginDetails, setLoginDetails] = React.useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (text) => {
    setLoginDetails({
      ...loginDetails,
      ['email']: text,
    });
  };

  const handlePassChange = (text) => {
    setLoginDetails({
      ...loginDetails,
      ['password']: text,
    });
  };

  const handleFormSubmit = async () => {
    await axios
      .post(`http://196.223.240.154:8099/supapp/api/auth/signin`, loginDetails)
      .then((response) => console.log('Request: ', response));
  };

  return (
    <View style={styles.body}>
      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <Text style={{ fontWeight: 700, fontSize: 35 }}>Supa</Text>
          <Text
            style={{
              color: 'rgb(237, 146, 29)',
              fontWeight: 700,
              fontSize: 35,
            }}>
            Menu
          </Text>
        </View>
        <Text
          style={{
            color: 'rgb(80, 93, 131)',
            textAlign: 'center',
            marginTop: 20,
            fontWeight: 600,
          }}>
          Welcome ...
        </Text>

        {/* form goes here */}
        <View style={{ marginTop: 30 }}>
          <TextInput
            style={styles.input}
            onChangeText={handleEmailChange}
            placeholder="Your Email"
            name="email"
            value={loginDetails.email}
            placeholderTextColor="rgb(216, 216, 216)"
          />

          <TextInput
            style={styles.input}
            onChangeText={handlePassChange}
            name="password"
            placeholder="Your Password"
            secureTextEntry={true}
            value={loginDetails.password}
            placeholderTextColor="rgb(216, 216, 216)"
          />

          <Button
            style={styles.signInButton}
            mode="contained"
            onPress={() => navigation.navigate('Dashboard')}>
            Sign In
          </Button>
        </View>
      </View>
    </View>
  );
};

const WelcomeDashboard = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home', color: 'white' },
    {
      key: 'notification',
      title: 'Notification',
      icon: 'bell',
      color: 'white',
    },
    { key: 'dishes', title: 'Dishes', icon: 'history', color: 'white' },
    { key: 'history', title: 'History', icon: 'history', color: 'white' },
    { key: 'cart', title: 'Cart', icon: 'shopping-cart', color: 'white' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    notification: DetailsScreen,
    dishes: DishesScreen,
    history: PaymentSuccessfull,
    cart: CartScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="#F0A13A"
      inactiveColor="black"
      // renderIcon={renderIcon}
    />
  );
};

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{ color: '#000', fontSize: 40, fontWeight: '800' }}>
          Supa
        </Text>
        <Text style={{ color: '#fff', fontSize: 40, fontWeight: '800' }}>
          Menu
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const PaymentSuccessfull = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'black', minHeight: 900, paddingTop: 100 }}>
      <Text
        style={{
          color: '#F7941C',
          textAlign: 'center',
          marginTop: 180,
          fontSize: 22,
          fontWeight: '600',
          marginRight: 20,
        }}>
        Payment Success, Yayy!
      </Text>

      <Text
        style={{
          marginHorizontal: 50,
          marginTop: 40,
          textAlign: 'center',
          color: 'white',
          fontSize: 18,
          fontWeight: '500',
          marginRight: 20,
        }}>
        We will send your order details in contact no. and registered email
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <Text
          style={{
            color: '#D07B52',
            fontSize: 18,
            fontWeight: '600',
            marginRight: 20,
          }}>
          Click Details
        </Text>
        <Icon name="long-arrow-right" size={30} color="white" />
      </View>

      <Button
        style={styles.signInButton}
        mode="contained"
        onPress={() => navigation.navigate('Login')}>
        Download Invoice
      </Button>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <Text
          style={{
            color: 'white',
            textlign: 'center',
            fontSize: 40,
            fontWeight: '600',
          }}>
          Supa
        </Text>
        <Text
          style={{
            color: '#F7941C',
            textlign: 'center',
            fontSize: 40,
            fontWeight: '600',
          }}>
          Menu
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const Example = () => {
  const [loading, setloading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 600);
  }, []);

  return loading ? (
    <WelcomePage />
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Payed" component={PaymentSuccessfull} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={WelcomeDashboard} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <Example />;
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgb(237, 146, 29)',
    height: '100vh',
    fontFamily: 'Roboto',
  },
  formContainer: {
    backgroundColor: 'white',
    marginTop: 60,
    height: 700,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    fontFamily: 'Roboto',
  },

  headerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    margin: 12,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: 'rgb(216, 216, 216)',
    borderRadius: 8,
    paddingLeft: 15,
    fontWeight: 600,
  },

  signInButton: {
    height: 50,
    marginHorizontal: 20,
    marginTop: 30,
    fontWeight: 600,
    alignContent: 'center',
    paddingTop: 10,
    backgroundColor: 'rgb(237, 146, 29)',
    textTransform: 'capitalise',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7941C',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontFamily: 'Roboto',
  },
});
