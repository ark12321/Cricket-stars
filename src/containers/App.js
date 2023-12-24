import React,{Component} from 'react';
import CardList from '../components/CardList';
import { Cricketers } from '../Cricketers';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from'../components/Scroll';

class App extends Component {
  constructor()
  {
    super();
    this.state=
               {
                Cricketers: Cricketers,
                searchfield: ''
               }
  }

  // componentDidMount()
  // {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({Cricketers: users})
  //   );
  // }

  onSearchChange=(event)=>
  {
    this.setState({ searchfield: event.target.value })
    
    //console.log(filteredCricketers);
  }

  render(){
    const filteredCricketers=this.state.Cricketers.filter(Cricketer =>{
      return Cricketer.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if(this.state.Cricketers.length===0)
    {
      return <h1>Loading</h1>
    }else {
  return (
    <div className='tc'> 
      <h1 className='f1'>Search your favourite Cricketer</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <Scroll> 
      <CardList Cricketers={filteredCricketers} />
      </Scroll> 
    </div>
  );
    }
  }

}

export default App;
