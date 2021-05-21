import React,{Component} from 'react'


const INITIAL = {
    list:[1,2 ,3,4]
}

class Array extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:'',
            list:[],
            remove:""
        }
    }

    onClear = () =>{
      this.setState({
          list:[],
          remove:"",
          value:""
      })
    };

    onReset = () =>{
        this.setState({
            ...INITIAL
        })
    };

    onAddItem = () => {
        if(this.state.value !== '')
        {
           this.setState(state =>{
               const list = state.list.concat(state.value);
               return{
                   list,
                   value:'',
                   remove:""
               };
           })
        }else{
            alert("iltimos polyani to`ldiring")
        }
    };

    update = (e) =>{
            this.setState({
                value:e.target.value
            })

    };



    onRemove = () =>{

        this.setState(state =>{
            const [first, ...rest] = state.list
            return{
                list:rest
            }
        })
    };

    remove = (i) =>{

        this.setState(state => {
            const list = state.list.filter((item,j) => i != j)
            return{
                list
            }
        })

    };

    render() {
        return (
            <div>
                <ul>
                    {(this.state.list || []).map((item,index) =>(
                        <div>
                            <li key={item}>{item}</li>
                            <button type="button" onClick={this.onRemove}>Remove Item</button>
                        </div>
                    ))}
                </ul>
                <input type="text" onChange={this.update} value={this.state.value}/>
                <input type="text" name="remove" value={this.state.remove}/>
                <button onClick={this.onClear}>Clear</button>
                <button onClick={this.onReset}>Rest All Data</button>
                <button onClick={this.onAddItem}>Add Item</button>
                <button onClick={this.remove}>Delete It</button>
            </div>
        );
    }

}
export default Array;