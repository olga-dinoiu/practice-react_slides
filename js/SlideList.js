import React from 'react';

const SlideList = ({slides, onAdd, onRemove, onSelect, selected, onDuplicate}) => (
    <ul className="slide-list">
        {slides.map(slide => (
            <li className="slide-list-item" key={slide.id}>
                <div style={{backgroundColor: slide.backgroundColor, backgroundImage: slide.backgroundImage}} onClick={() => onSelect(slide.id)} className={`slide-thumbnail slide-preview ${slide.id === selected ? 'active' : ''}`}>
                    
                    <h6>{slide.title}</h6>
                    <p>{slide.description}</p>
                </div>
                <div className="row">
                    <button onClick={slides.length > 1 ? () => onRemove(slide.id) : null} className={`col-sm-1 btn btn-danger ${slides.length === 1 ? 'disabled' : ''}`}><img src="img/delete-bin-icon.png" alt="Delete Slide"/></button>
                    <button onClick={() => onAdd(slide.id)} className="col-sm-1 btn btn-success"><img src="img/add-icon.png" alt="Add New Slide"/></button>
                    <button onClick={() => onDuplicate(slide)} className="col-sm-1 btn btn-info"><img src="img/duplicate-icon.png" alt="Duplicate Slide"/></button>
                </div>
            </li>
        ))}
    </ul>
);

export default SlideList;