import React, {Component} from 'react';

class SlideEditor extends Component {
    render() {
        const slide = this.props.slide;

        return (
            <div>
                <div className="tool-bar"> 
                    <div className="bg-color">
                        <ul>
                            <li className="red"></li>
                            <li className="blue"></li>
                            <li className="yellow"></li>
                        </ul>
                    </div>
                </div>
                <div className="slide-editor slide-preview">
                    <h1 ref={ref => this.titleDOMNode = ref} contentEditable="true" onBlur={this.saveTitle.bind(this)}>
                        {slide.title}
                    </h1>
                    <p ref={ref => this.descriptionDOMNode = ref} contentEditable="true" onBlur={this.saveDescription.bind(this)}>
                        {slide.description}
                    </p>
                </div>
            </div>
        );
    }
    
    

    saveTitle() {
        this.save('title', this.titleDOMNode.textContent);
    }
    
    saveDescription() {
        this.save('description', this.descriptionDOMNode.textContent);
    }

    save(key, value) {
        this.props.onEdit(this.props.slide.id, key, value);
    }
}

export default SlideEditor;