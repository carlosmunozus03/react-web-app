import React, {Component} from "react";
import Search from "./components/Search";

class App extends Component {
    searchData = (term) => {
        console.log(term);
    }

    render() {
        return (
            <div className='app container'>
                <div className='jumbotron'>
                    <p className='lead text-center'>Search Image</p>
                    <Search
                        searchData={this.searchData}/>
                </div>
            </div>
        )
    }
}

export default App;
