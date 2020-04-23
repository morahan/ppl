import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#44ace8',
    alignItems: 'center',
    padding: "5%"
  },

  Head: {
    //: "35%",
  },

  Logo: {
    height: 117, width: 117, alignSelf: "center", paddingTop: 100
  },

  Welcome: {
    color: "#ffff",
    fontSize: 38,
    textAlign: 'center',
    textShadowColor: "#000"
  },

  LogIn: {
    backgroundColor: 'whitesmoke',
    // alignItems: 'bottom',
    justifyContent: 'center',
    borderRadius: 17,
    height: '25%',
  },

  Btn: {
    shadowColor: 'whitesmoke',
  },

  Text: {
    color: "#000",
    textAlign: 'center',
  },

  Input: {
    alignItems: 'center',
    width: "80%",
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    padding: '10%',
    alignSelf: 'center',
  }
});

export default styles;