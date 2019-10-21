import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signchange } from '../actions/sign'



// const SignContainer = ({ props, match }) => {
//     /*
//     TypeError: Cannot read property 'signstate' of undefined
//     SignContainer
//     src/containers/SignContainer.js:10
//     7 | 
//     8 | const SignContainer = ({props, match}) => {
//     9 |     console.log('SignContainer');
//     > 10 |     console.log(props.signstate.signstate);
//     11 |     
//     12 |     const {category} = match.params;
//     13 |     console.log(category);
//     */

//     console.log('SignContainer');
//     // console.log(props.signstate.signstate);
//     console.log(match);
//     console.log(props);

//     const { category } = match.params;
//     console.log(category);

//     return (
//         <div>
//             SignContainer <br />
//             {/* {props.signstate.signstate.toString()} */}
//         </div>
//     )
// }


const SignContainer = (props) => {
    

    console.log('SignContainer');
    console.log(props);

    const {category} = props;
    console.log(category);
    console.log(props.signstate.signstate);


    return (
        <div>
            SignContainer <br />
            {props.signstate.signstate.toString()}
        </div>
    )
}


const mapStateToProps = (state, props) => ({
    signstate: state.sign,

    // https://stackoverflow.com/questions/49213602/how-to-get-id-params-to-redux-action-from-react-router
    category:props.match.params.category
})

const mapDispatchToProps = dispatch => ({
    signchange: () => dispatch(signchange()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignContainer)