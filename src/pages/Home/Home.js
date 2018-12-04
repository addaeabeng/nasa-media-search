import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import './Home.css';
import nasaLogo from "../../assets/nasa-img-search.svg";

export class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false,
        };
    }


    handleSubmit = query => {
        const { history } = this.props;
        let type = query.type;
        if(!query.type){
            type = 'image';
        }

        if(!query.query){
            this.setState( { error: {'message' : 'Please enter a search term' } })
            return;
        }

        if(!query.type){
            this.setState( { error: {'message' : 'Please select a media type' } })
            return;
        }

        history.push(`/search/${query.query}/${type}`);
    };

    render() {

        const error = this.state.error;
        const errorMessage = (
            <div style={{color: 'red' }}>{error.message}</div>
        );
        return (
            <div className="home">
                <div className="content">
                    <div className="home__logo">
                        <img
                            className="logo-image"
                            src={nasaLogo}
                            alt="NASA Image search"
                            title="NASA Image search"
                            height="64"
                        />
                    </div>
                    <SearchBox onSubmit={this.handleSubmit}  />
                    {error && errorMessage}
                </div>
            </div>
        )
    }
}

export default withRouter(Home);