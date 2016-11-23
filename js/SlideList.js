import React from 'react';

const SlideList = ({slides, onAdd, onRemove, onSelect, selected}) => (
    <ul className="slide-list">
        {slides.map(slide => (
            <li className="slide-list-item" key={slide.id}>
                <div style={{backgroundColor: slide.backgroundColor, backgroundImage: slide.backgroundImage}} onClick={() => onSelect(slide.id)} className={`slide-thumbnail slide-preview ${slide.id === selected ? 'active' : ''}`}>
                    
                    <h6>{slide.title}</h6>
                    <p>{slide.description}</p>
                </div>
                <div className="row">
                    <button onClick={slides.length > 1 ? () => onRemove(slide.id) : null} className={`col-sm-6 btn btn-danger ${slides.length === 1 ? 'disabled' : ''}`}>-</button>
                    <button onClick={() => onAdd(slide.id)} className="col-sm-6 btn btn-success">+</button>
                </div>
            </li>
        ))}
    </ul>
);

export default SlideList;