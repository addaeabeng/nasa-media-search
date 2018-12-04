import React from 'react';
import api from '../../services/api';
import normalize from '../../services/normalize';
import Header from '../../components/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Gallery from '../../components/Gallery';
import GalleryItem from '../../components/GalleryItem';
import Loader from '../../components/Loader';
import VideoAudioItem from '../../components/GalleryItem/VideoAudioItem';
import './Search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            assets: [],
            isLoading: true
        };
    }

    componentDidMount() {
        const { match: { params: { query, type } } } = this.props;
        this.searchAssets(query, type);
    }

    searchAssets(query, type) {
        this.setState( { isLoading: true });

        // Api code here
        api.search(query, type).then(response => {
            this.setState({ isLoading: false });
            this.setState( { assets: normalize.search(response) } );
        })
            .catch( error => {
               this.setState( { isLoading: false } );
            });
    }

    handleSubmit = newquery => {
        const { history } = this.props;
        history.push(`/search/${newquery.query}/${newquery.type}`);
        this.searchAssets(newquery.query, newquery.type);
    };

    render() {

        const { match: { params: { query, type   } } } = this.props;
        const newquery = { 'query' : query, 'type' : type }
        const { assets, isLoading } = this.state;

        const galleryItems = assets.map(({ image, nasaId, title, mediaType }, i) => {
           const galleryItem = (
               <GalleryItem image={image} id={nasaId} key={nasaId} title={title} />
           );

           const videoAudio = (
               <VideoAudioItem id={nasaId} type={mediaType} key={nasaId} title={title} />
           )
           const isVideo = (mediaType === 'video');
           return (
               <div key={i} >
               {!isVideo && galleryItem}
               {isVideo && videoAudio}
               </div>
           );
        });

        const searchContent = () => {
            if (isLoading) return <Loader />;

            if(assets.length > 0) return <Gallery>{galleryItems}</Gallery>;

            if(assets.length === 0)
                return (
                    <p className="search__error-message">
                        Ooops, we haven't found anything in the space, please search with other term.
                    </p>
                );
        };
        return (
            <div className="search">
                <div className="search__header">
                    <Header>
                        <SearchBox
                            onSubmit={this.handleSubmit}
                            shadow={false}
                            query={newquery}

                        />
                    </Header>
                </div>
                <div className="search__content">{searchContent()}</div>
            </div>
        );
    }
}

export default Search;