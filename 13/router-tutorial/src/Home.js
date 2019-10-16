import React from 'react';
import {connect } from 'react-redux';
import {tact, fact} from './modules/auth';

const Home = ({sign, tact, fact}) => {

  if(sign===true){
    fact();
  }else{
    tact();
  }

  return (
    <div>
      <h1>Home</h1>
      <div>{sign}</div>
    </div>
  );
};

export default connect(
  state => ({
    sign:state.sign
  }),
  {
    tact,
    fact
  }

)(Home);
