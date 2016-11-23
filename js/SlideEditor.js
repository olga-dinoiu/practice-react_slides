import React, {Component} from 'react';

class SlideEditor extends Component {
    render() {
        const slide = this.props.slide;
        const colors = [
            'white',
            'rgba(255, 0, 0, 0.5)',
            'yellow'
        ];
        const patterns = [
            'img/remove.png',
            'img/blue-pattern.jpg',
            'img/green-pattern.jpg',
            'img/pink-pattern.jpg'
        ];

        return (
            <div className="slide-editor">
                <div className="tool-bar">
                    <div className="bg-color">
                        <ul>
                            {colors.map(color => (
                                <li style={{backgroundColor: color}} onClick={() => {
                                    this.saveBackgroundColor(color);
                                }}></li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-pattern">
                        <ul>
                            {patterns.map(pattern => (
                                <li style={{backgroundImage: 'url(' + pattern + ')'}} onClick={() => {
                                    if (pattern == patterns[0]) {
                                        this.saveBackgroundImage('');
                                    } else {
                                        this.saveBackgroundImage(pattern);
                                    }
                                }}></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="slide-preview"
                     style={{backgroundColor: slide.backgroundColor, backgroundImage: slide.backgroundImage }}>
                    <h1 ref={ref => this.titleDOMNode = ref} contentEditable="true" onBlur={this.saveTitle.bind(this)}>
                        {slide.title}
                    </h1>
                    <p ref={ref => this.descriptionDOMNode = ref} contentEditable="true"
                       onBlur={this.saveDescription.bind(this)}>
                        {slide.description}
                    </p>
                </div>
            </div>
        );
    }


    saveBackgroundColor(color) {
        this.save('backgroundColor', color);
    }

    saveBackgroundImage(pattern) {
        this.save('backgroundImage', 'url(' + pattern + ')');
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