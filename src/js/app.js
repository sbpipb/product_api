import React from 'react';
import ReactDOM from 'react-dom'
import moment from 'moment';
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
import Formsy from 'formsy-react';

class Layout extends React.Component {
  productListing = (props) => {
    let elements = [1, 2, 3, 4].map( function(item) {
       return <li key={item}>{item} </li>
     })
    return (
      <ul>{elements}</ul>
    )
  }

  defaultTemplate = (props) => {
    let list = this.productListing()
    return (
      <div>
        {list}
      </div>

    )
  }

  render() {
    return (this.defaultTemplate())
  }

}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app)
