import React, {Component} from 'react';
import SlideList from './SlideList';
import SlideEditor from './SlideEditor';

/**
 * TODO
 * - edit slide from right hand panel
 * - add description in slide
 * - css styling
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

    onRemove(id) {
        const deleteAt = this.state.slides.indexOf(this.findSlide(id));
        const slides = Array.from(this.state.slides);

        slides.splice(deleteAt, 1);

        const newState = {
            slides: slides,
            selected: this.state.selected
        };

        if (this.state.selected == id) {
            newState.selected = slides[Math.min(deleteAt, slides.length - 1)].id
        }

        this.setState(newState);
    }

    onSelect(id) {
        this.setState({
            selected: id
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-3">
                    <SlideList 
                        onSelect={this.onSelect.bind(this)} 
                        onAdd={this.onAdd.bind(this)}
                        onRemove={this.onRemove.bind(this)} 
                        slides={this.state.slides}
                        selected={this.state.selected}
                    />
                </div>
                <div className="col-sm-9">
                    <SlideEditor slide={this.getSelectedSlide()}/>
                </div>
            </div>
        );
    }
}

export default Viewport;