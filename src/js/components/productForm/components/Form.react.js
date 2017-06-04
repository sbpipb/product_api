import React from 'react'
import ReactDOM from 'react-dom'
// import Formsy from 'formsy-react'

class ProductForm extends React.Component {
  constructor() {
    super()
  }

  submit() {

  }

  enableButton = () => {

  }

  disableButton = () => {

  }

  // render() {
  //   return (
  //     <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
  //       <MyOwnInput name="email" validations="isEmail" validationError="This is not a valid email" required/>
  //       <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
  //     </Formsy.Form>
  //   );
  // }

  render() {<form>
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email">
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div className="form-group">
      <label for="exampleInputFile">File input</label>
      <input type="file" id="exampleInputFile">
      <p className="help-block">Example block-level help text here.</p>
    </div>
    <div className="checkbox">
      <label>
        <input type="checkbox"> Check me out
      </label>
    </div>
    <button type="submit" className="btn btn-default">Submit</button>
  </form>}
}
export default ProductForm
//
// const MyAppForm = React.createClass({
//   getInitialState() {
//     return {
//       canSubmit: false
//     }
//   },
//   enableButton() {
//     this.setState({
//       canSubmit: true
//     });
//   },
//   disableButton() {
//     this.setState({
//       canSubmit: false
//     });
//   },
//   submit(model) {
//     someDep.saveEmail(model.email);
//   },
//
// });
