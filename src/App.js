import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';



class App extends React.Component {
  state = {
    Person: {
      fullName: "Amdouni Chouaib",
      bio: "wen developer and futer DevOps engineering",
      imgSrc: 'https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/120752484_3696419707058072_2912036694375473463_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dreEfj4wIAwAX-xU7ei&_nc_ht=scontent.ftun16-1.fna&oh=f4778e4a898b800cc0d13f40a42a032e&oe=613B805E',
      profession: "3 years of freelance"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <div >
        {this.state.show && (
          <>
          <center><h1 style={{color:"red"}}>{this.state.Person.fullName}</h1>
            <h1 style={{color:"blue"}}>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="Naruto" width="20%" height="20%" style={{borderRadius:"20px"}}></img>
            <h1 style={{color:"blue"}}>{this.state.Person.profession}</h1>
          
            <br></br></center>  
          </>
        )}
           
        <center><Button  variant="contained" color="primary" onClick={this.handleShowPerson}>click here</Button></center>
      </div>
    );
  }
}

export default App;
