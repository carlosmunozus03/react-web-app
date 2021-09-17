import React, {Component} from "react";

class Search extends Component {
    searchRef = React.createRef();
    getSearch = (e) => {
        e.preventDefault();
        // Get the input value
        const term = this.searchRef.current.value;
        // Send to the principal component
        this.props.searchData(term);
    }

    render() {
        return (
            <form onSubmit={this.getSearch}>
                <div className="row">
                    <div className='form-group col-md-8'>
                        <input ref={this.searchRef}
                               type="text"
                               className='form-control-lg'
                               placeholder='search something'/>
                    </div>
                </div>
                <div className="row">
                    <div className='form-group col-md-4'>
                        <input type="submit"
                               className='btn btn-lg btn-danger form-control-lg btn-block' value='Search'/>
                    </div>
                </div>
            </form>
        )
    }
}

export default Search;