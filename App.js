import React from 'react';
import {
  Animated, View, Image, TouchableOpacity, Easing, 
} from 'react-native';


const App = () => {

  const [val, setVal] = React.useState(0);
  
const spinValue =  new Animated.Value(val);
 const rotateImage = () => {
    setVal(val + 1);
  };

 const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg']
  });
  
  return (

    <>
    <View>
    <Animated.View>
              <Animated.Image
        style={{transform: [{rotate: spin}], height: 400, width: 400,  alignSelf: 'center', marginTop: 80}}
        source={require('./src/assets/harshil.jpeg')} />
        </Animated.View>
        <TouchableOpacity style={{paddingRight: 4, marginTop: 100}} onPress={rotateImage}>
                <Image style={{width: 60, height: 60,  alignSelf: 'center'}}
                source={require('./src/assets/rotate.png')}/>
                </TouchableOpacity>
    </View>
     
    </>
  );
};


export default App;
