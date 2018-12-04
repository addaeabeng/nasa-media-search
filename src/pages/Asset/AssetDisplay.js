import React from 'react';
import api from '../../services/api';
import ReactPlayer from 'react-player';
import './Asset.css';
import "./audiovideoasset.css";
import '../../components/GoBackButton'
import GoBackButton from "../../components/GoBackButton/GoBackButton";

class AssetDisplay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filecollection: '',
            mediatype: ''
        };
    }

    componentDidMount(prevProps, prevState, snapshot) {
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
        const { title, meta, description } = this.props;

        const image = (
            <img src={filecollection[0]} />
        );

        const video = (
            <div className="player-wrapper">
                <ReactPlayer url={filecollection[0]} controls={true} className="react-player" width='100%'  height='100%' />
            </div>
        );


        return (
            <div className="audiovisualasset">
                <div className="audiovideoasset__content">
                    <GoBackButton text="return to search" />
                    <div className="audiovideoasset__player">
                        {(mediatype === 'image') &&  image}
                        {(mediatype === 'video' ) &&  video}
                    </div>
                    <div className="audiovideoasset__data">
                        {title && <h1 className="audiovideoasset__title">{title}</h1>}
                        {meta.length && <p className="audiovideoasset__meta">{meta.join(', ')}</p>}
                        {description && <p className="audiovideoasset__description">{description}</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default AssetDisplay;