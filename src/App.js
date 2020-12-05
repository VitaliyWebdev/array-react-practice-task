import React, {Component} from 'react';
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import CouplesTogether from "./components/CouplesTogether";
class App extends Component {

    mans = [
        { id:1, name:'Vitya', age:22, wife_id:2 },
        { id:2, name:'Oleg', age:33, wife_id:1 },
        { id:3, name:'Alex', age:44, wife_id:3 },

    ];
    womens = [
        { id:1, name:'Olga', age:18, husband_id:3 },
        { id:2, name:'Inna', age:15, husband_id:1 },
        { id:3, name:'Sasha', age:14, husband_id:2 },

    ];

    state={together:[]};

     mass = [];
    handler = (arr1,arr2)=>{

        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
             if(arr1[i].wife_id===arr2[j].husband_id){
                this.mass.push({
                    girls:arr1[i],
                    boys:arr2[j]
                })
             }

            }

        }
        this.setState({together:this.mass})
    }


    render() {


        return (
            <div>
             <div>{this.mans.map((value,index) => (<Mens item={value} key={index}/>))}</div>

                <div>{this.womens.map((value,index) => (<Womens item={value} key={index}/>))}</div>

                <button onClick={()=>{this.handler(this.mans,this.womens)}}>Meried Couples</button>
                <div className={'couples'}>
                    {
      this.state.together.map((value,index) => (<CouplesTogether item={value} key={index}/>))
                    }
                </div>
            </div>
        );
    }
}

export default App;