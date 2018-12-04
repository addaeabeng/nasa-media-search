import React from 'react';
import Header from '../../components/Header';
import SearchBox from '../../components/SearchBox';
import api from '../../services/api';
import normalize from '../../services/normalize';
import Loader from '../../components/Loader';
import GoBackButton from '../../components/GoBackButton';
import './Asset.css';
import AssetDisplay from "./AssetDisplay";

class Asset extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            asset: {},
            isLoading: true
        };
    }
    componentDidMount() {
        const { match: { params: { id } } } = this.props;

        api
            .asset(id)
            .then(response => {
                let assetinfo = normalize.asset(response);
                this.setState({ isLoading: false });
                this.setState({ asset: assetinfo });
            })
            .catch(error => {
                this.setState({ isLoading: false });
            });
    }

    handleSubmit = query => {
        const { history } = this.props;
        history.push(`/search/${query.query}/${query.type}`);
    };

    getFiles(id, type){
        api
            .files(id, type)
            .then( (response) => {
                return  response;
            })
            .catch( error => {
                console.log(error);
            });
    };

    render() {
        const {
            isLoading,
            asset: {
                image,
                title,
                nasaId,
                mediaType,
                description,
                secondaryCreator: author,
                dateCreated: date
            }
        } = this.state;

        const meta = [new Date(date).toLocaleDateString(), author].filter(n => !!n);

        const isImage = (mediaType !== 'video');

        const assetContent = (
            <div className="asset__content">
                <div className="asset__image">
                    <img src={image} alt={title} title={title} />
                </div>
                <div className="asset__data">
                    {title && <h1 className="asset__title">{title}</h1>}
                    {meta.length && <p className="asset__meta">{meta.join(', ')}</p>}
                    {description && <p className="asset__description">{description}</p>}
                    <GoBackButton text="back to search" />
                </div>
            </div>
        );

        const assetVideo = (
            <div>
            <AssetDisplay id={nasaId} type={mediaType} meta={meta} title={title} description={description} />
            </div>
        )

        return (
            <div className="asset">
                <div className="asset__header">
                    <Header>
                        <SearchBox shadow={false} onSubmit={this.handleSubmit} />
                    </Header>
                </div>
                {isLoading && <Loader />}
                {!isLoading && isImage && assetContent}
                {!isLoading && !isImage && assetVideo}
            </div>
        );
    }
}

export default Asset;