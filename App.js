import React, {Component} from 'react';
import { View, StatusBar, Text, TouchableOpacity } from 'react-native';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hitung: 0,
     };
 }

masukkanAngka = (value) => {
  if(this.state.hitung == 0)
  {
     this.setState({hitung: value})
  }
  else{
    this.setState({hitung: this.state.hitung + '' + value});
  }
}

hitungHasil = () => {
  let hasil = eval(this.state.hitung);
  this.setState({hitung: hasil})
}

  render(){
    return(
      <View style={{flex:1, backgroundColor: '#eeeeee'}}>
        <StatusBar backgroundColor="#121212"barStyle="light-content"/>

        <View style={{backgroundColor: '#eeeeee'}}>
          <Text style={{color: '#121212',fontSize: 20, textAlign: 'center'}}>Kalkulator VSCode React Native</Text>
        </View>

        <View style={{flex: 1.1, justifyContent: 'center', marginHorizontal: 10, backgroundColor: '#eeeeee'}}>
          <Text style={{color: '#121212',fontSize: 40, textAlign: 'right'}}>{this.state.hitung}</Text>
        </View>

        <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
        <View style={{flexDirection: 'row', marginVertical: 8}}>
          <View style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}>
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}></Text>
          </View>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.setState({hitung: 0})}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff6d00'}}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka('/')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff6d00'}}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka('*')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff6d00'}}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 8}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
            onPress={() => this.masukkanAngka(7)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#212121'}}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka(8)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#212121'}}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka(9)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#212121'}}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka('-')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff6d00'}}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 8}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
            onPress={() => this.masukkanAngka(4)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#212121'}}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka(5)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#212121'}}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka(6)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#212121'}}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka('+')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff6d00'}}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 8}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
            onPress={() => this.masukkanAngka(1)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#212121'}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka(2)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#212121'}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka(3)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#212121'}}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka('.')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff6d00'}}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 8}}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center', padding: 10}}
            onPress={() => this.masukkanAngka('(')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#212121'}}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka(0)}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#212121'}}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.masukkanAngka(')')}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#212121'}}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', justifyContent: 'center',  padding: 10}}
            onPress={() => this.hitungHasil()}
          >
            <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#ff6d00'}}>=</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

export default App;