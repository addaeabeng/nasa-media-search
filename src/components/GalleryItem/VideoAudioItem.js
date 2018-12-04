import React from 'react';
import api from '../../services/api';
import ReactPlayer from 'react-player';
import './VideoAudio.scss';
import {Link} from "react-router-dom";
import LazyLoad from "react-lazyload";

class VideoAudioItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filecollection: '',
            mediatype: ''
        };
    }

    componentDidMount() {
        if(this.props.id){
            api
                .files(this.props.id, this.props.type)
                .then( (response) => {

                    let mediatype = '';
                    if(response[0].indexOf('video/') > 0){
                        mediatype = 'video';
                    }
                    if(response[0].indexOf('image/') > 0){
                        mediatype = 'image';
                    }
                    if(response[0].indexOf('audio/') > 0){
                        mediatype = 'audio';
                    }

                    this.setState({ mediatype: mediatype } );
                    this.setState( { filecollection: response } );
                })
                .catch( error => {
                    console.log(error);
                });

        }
    }

    render(){
        const { filecollection, mediatype } = this.state;
        const { id, title } = this.props;

        const preview = (filecollection.length) ? filecollection.filter(video => video.indexOf('preview') > 0) : '';
        const image = (
            <article className="galleryitem">
                <Link className="galleryitem__wrapper" to={`/asset/${id}`} title={title}>
                    <div className="galleryitem__imagewrapper">
                        <LazyLoad height={200} once>
                            <img src={preview[1]} />
                        </LazyLoad>
                    </div>
                    {title && <p className="galleryitem__title">{title}</p>}
                </Link>
            </article>
        );

        const video = (
            <div className="player-wrapper">
            <ReactPlayer className="react-player" url={preview[0]} controls={false}  width='100%'  height='100%' />
            </div>
        )

        const isLoaded = (preview.length > 0);


        return (
            <div>
                {isLoaded && image}
            </div>
        )
    }

}

export default VideoAudioItem;