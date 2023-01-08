import React, { useState , useEffect , Component } from 'react';
import { View , Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Sample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, key: 'test1', checked: false },
                { id: 2, key: 'test1', checked: false }
            ]
        };
    }

    onCheckChanged(id) {
        const data = this.state.data;

        const index = data.findIndex(x => x.id === id);
        data[index].checked = !data[index].checked;
        this.setState(data);
    }

    render() {
        return (<View>
            {
                this.state.data.map((item,key) => <CheckBox title={item.key} key={key}  checked={item.checked} onPress={()=>this.onCheckChanged(item.id)}/>)
            }
        </View>)
    }
}

// export default function App()
// {
//   const [dataa , setData] = useState([
//                     { id: 1, key: 'test1', checked: true },
//                     { id: 2, key: 'test1', checked: false }
//                 ])

//                 // useEffect(() => 
//                 // {
//                 //   // if(dataa)
//                 //   // {
//                 //   //   console.log(dataa)
//                 //   // }
                 
//                 // }, [dataa])

//                 const [rerender, setRerender] = useState(false);
//                 useEffect(()=>{
//                   console.log("re render function is hitting")
//                     setRerender(!rerender);
//                 }, [dataa]);
//                 function onCheckChanged(id){
//                           const data = dataa;
//                           console.log(data)
//                           const index = data.findIndex(x => x.id === id);
//                           data[index].checked = !data[index].checked;
//                           setData(data);
//                           console.log(data)
//                           // alert("hello world ")
//                       }
//                       return (<View>
                        
//                         <Text>{String(dataa[0]["checked"]) }</Text>
                        
//                                     {
//                                        dataa.map((item,key) => <CheckBox title={item.key} key={key}  checked={item.checked} onPress={()=>onCheckChanged(item.id)}/>)
//                                    }
                                   
//                               </View>)
// }