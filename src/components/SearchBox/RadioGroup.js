import React from 'react';
import './RadioGroup.scss';

class RadioGroup extends React.Component {

    handleTypeChange = e => {
      this.props.onSelectType(e);
    };

    render(){
        return (
            <div className="radio-options">
                <ul className="radio-options__list">
                    <li className="radio-options__list-item radio-options-list-item" >
                        <input className="radio-options__option" type="radio" id="image" name="type" value="image"  onChange={this.handleTypeChange} />
                        <label htmlFor="image">Images</label>
                        <div className="check"></div>
                    </li>
                    <li className="radio-options__list-item radio-options-list-item">
                        <input className="radio-options__option" type="radio" id="audio" name="type" value="audio" onChange={this.handleTypeChange} />
                        <label htmlFor="audio">Audio</label>
                        <div className="check"></div>
                    </li>
                    <li className="radio-options__list-item radio-options-list-item">
                        <input className="radio-options__option" type="radio" id="video" name="type" value="video" onChange={this.handleTypeChange} />
                        <label htmlFor="video">Video</label>
                        <div className="check"></div>
                    </li>
                </ul>

             </div>

        )
    }
}

export default RadioGroup;