import React, {Component} from 'react';

class SlideEditor extends Component {
    render() {
        const slide = this.props.slide;

        return (
            <div className="slide-editor slide-preview">
                <h1 ref={ref => this.titleDOMNode = ref} contentEditable="true" onBlur={this.saveTitle.bind(this)}>
                    {slide.title}
                </h1>
            </div>
        );
    }

    saveTitle() {
        this.save('title', this.titleDOMNode.textContent);
    }

    save(key, value) {
        this.props.onEdit(this.props.slide.id, key, value);
    }
}

export default SlideEditor;