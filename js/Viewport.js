import React, {Component} from 'react';
import SlideList from './SlideList';
import SlideEditor from './SlideEditor';

/**
 * TODO
 * - duplicate slide
 * - css styling
 */

class Viewport extends Component {
    constructor(props) {
        super(props);
        this.slideIds = this.getLocalStored('slideIds', 0);

        const localState = this.getLocalStored('state', null);

        if (localState == null) {
            const firstSlide = this.createSlide();

            this.state = {
                slides: [firstSlide],
                selected: firstSlide.id
            };
        } else {
            this.state = localState;
        }
    }

    getLocalStored(key, defaultValue) {
        const localStored = JSON.parse(localStorage.getItem(key));

        if (localStored != null) {
            return localStored;
        }

        return defaultValue;
    }

    setLocalStored(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    setState(newState) {
        super.setState(newState, () => {
            this.setLocalStored('state', this.state);
        });
    }

    createSlide() {
        const id = ++this.slideIds;

        this.setLocalStored('slideIds', this.slideIds);

        return {
            id: id,
            title: `Untitled ${id}`,
            description: `Click to add a description`,
            backgroundColor: 'white',
            backgroundImage: ''
        };
    }

    findSlide(id) {
        return this.state.slides.filter(slide => slide.id === id)[0];
    }

    getSelectedSlide() {
        return this.findSlide(this.state.selected);
    }

    duplicateSlide(slide) {
        const newSlide = this.createSlide();
        const id = newSlide.id;

        Object.assign(newSlide, slide, {
            id: id
        });

        return newSlide;
    }

    add(newSlide, slideIdToAddAfter) {
        const insertAt = this.state.slides.indexOf(this.findSlide(slideIdToAddAfter)) + 1;
        const slides = Array.from(this.state.slides);

        slides.splice(insertAt, 0, newSlide);

        const newState = {
            slides: slides,
            selected: newSlide.id
        };

        this.setState(newState);
    }

    onDuplicate(slide) {
        this.add(this.duplicateSlide(slide), slide.id);
    }

    onAdd(slideIdToAddAfter) {
        this.add(this.createSlide(), slideIdToAddAfter);
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

    /**
     * @param id - Id of the slide that was edited
     * @param key - Title or description or whatever was edited
     * @param value - Value of the title or description
     */
    onEdit(id, key, value) {
        console.info(`Slide ${id} has been updated with "${key}" being "${value}"`);

        const slideEdited = this.findSlide(id);

        slideEdited[key] = value;

        this.setState({});
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
                        onDuplicate={this.onDuplicate.bind(this)}
                    />
                </div>
                <div className="col-sm-8">
                    <SlideEditor slide={this.getSelectedSlide()} onEdit={this.onEdit.bind(this)}/>
                </div>
                <div className="col-sm-8">
                </div>
            </div>
        );
    }
}

export default Viewport;