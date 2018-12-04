import React from 'react';
import PropTypes from 'prop-types';
import SearchBoxIcon from './SearchBoxIcon';
import CheckBoxGroup from './RadioGroup';
import './SearchBox.css';

class SearchBox extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        query: PropTypes.object,
        shadow: PropTypes.bool
    };

    static defaultProps = {
        onSubmit: () => {},
        query: {},
        shadow: true
    };

    constructor(props) {
        super(props);

        const { query } = this.props;

        this.state = {
            query: query.query || '',
            type: query.type,
        };
    }

    handleChange = e => {
        const target = e.target;
        const value =  target.value;
        const name = target.name;

        if(target.type === 'checkbox' && target.checked){
            this.setState({
                [name] : value,
            });
        } else {
            this.setState({
                [name]: value,
            });
        }

    };

    handleSubmit = e => {
        if (e) e.preventDefault();

        const { onSubmit } = this.props;
        let query  = {
            'query' : this.state.query,
            'type' : this.state.type
        };

        if (query) {

            onSubmit(query);
        }
    };

    render() {
        const { query } = this.state;

        return (
            <form
                className="searchbox" onSubmit={this.handleSubmit}
            >
                <CheckBoxGroup onSelectType={this.handleChange} />
                <div className="searchbox__input-container">
                <input name="query" value={query.query} onChange={this.handleChange} className="searchbox__input" placeholder="Search this space..."/>
                <button className="searchbox__submitbutton">
                    <SearchBoxIcon/>
                </button>
                </div>
            </form>
        );
    }
}

export default SearchBox;