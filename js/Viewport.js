import React, {Component} from 'react';
import SlideList from './SlideList';
import SlideEditor from './SlideEditor';

/**
 * TODO
 * 1. remove slide
 * 2. select slide
 * 3. edit slide from right hand panel
 * 4. add description in slide
 * 5. css styling
 */

class Viewport extends Component {
    constructor(props) {
        super(props);
        this.slideIds = 0;

        const firstSlide = this.createSlide();
        this.state = {
            slides: [firstSlide],
            selected: firstSlide.id
        };
    }

    createSlide() {
        const id = ++this.slideIds;

        return {
            id: id,
            title: `Untitled ${id}`
        };
    }

    findSlide(id) {
        return this.state.slides.filter(slide => slide.id === id)[0];
    }

    getSelectedSlide() {
        return this.findSlide(this.state.selected);
    }

    onAdd(slideIdToAddAfter) {
        const insertAt = this.state.slides.indexOf(this.findSlide(slideIdToAddAfter)) + 1;
        const newSlide = this.createSlide();
        const slides = Array.from(this.state.slides);

        slides.splice(insertAt, 0, newSlide);

        const newState = {
            slides: slides,
            selected: newSlide.id
        };

        this.setState(newState);
    }

    onRemove() {

    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-3">
                    <SlideList onAdd={this.onAdd.bind(this)} onRemove={this.onRemove.bind(this)} slides={this.state.slides}/>
                </div>
                <div className="col-sm-9">
                    <SlideEditor slide={this.getSelectedSlide()}/>
                </div>
            </div>
        );
    }
}

export default Viewport;