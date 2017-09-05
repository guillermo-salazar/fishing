import * as React from "react";
import * as ReactDOM from "react-dom";

class NYTroutFishing extends React.Component<any, any> {
  constructor(props){
    super(props);
    this.state = {
      fishing_stocks: this.props.fishing_stocks
    }
  }
  render(){
    return(
    <div>
      hello {this.state.fishing_stocks[0].county}
    </div>);
  }
}


const TROUTSTOCK = [
  {
    "county": "Columbia",
    "date": "Mid April",
    "dec_region": "4",
    "number": "1380",
    "size_inches": "8 to  9 ",
    "species_name": "Brown Trout",
    "town": "Ghent, Kinderhook, Chatham",
    "waterbody": "Kline Kill",
    "year": "2016"
  },
  {
    "county": "Essex",
    "date": "May",
    "dec_region": "5",
    "number": "2500",
    "size_inches": "8 to  9 ",
    "species_name": "Brown Trout",
    "town": "Jay & Keene",
    "waterbody": "East Branch Ausable River",
    "year": "2016"
  },
  {
    "county": "Essex",
    "date": "Mid April",
    "dec_region": "5",
    "number": "3450",
    "size_inches": "8 to  9 ",
    "species_name": "Brown Trout",
    "town": "Jay & Keene",
    "waterbody": "East Branch Ausable River",
    "year": "2016"
  },
  {
    "county": "Essex",
    "date": "Spring",
    "dec_region": "5",
    "number": "3000",
    "size_inches": "8 to  9 ",
    "species_name": "Rainbow Trout",
    "town": "Jay & Keene",
    "waterbody": "East Branch Ausable River",
    "year": "2016"
  }
]

ReactDOM.render(
  <NYTroutFishing fishing_stocks={TROUTSTOCK}/>,
  document.getElementById('app')
  );