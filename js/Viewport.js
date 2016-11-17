import React from 'react';


//=======================
//         CLASSES
// ======================

const Slide = () => (
    <div className="the-slide" />
);

const Navigation  = () => (
        <ul className="nav-list">
                <li className="preview-item" >
                    <Slide className="preview" />
                    <Btn name="+" /*onClick={addSlide} */ />
                    <Btn name="-" /*onClick={deleteSlide} */ />
                </li>
        </ul>
)


const SlideList = () => (
    <ul className="slide-list">
        <li className="slide-item active"><Slide /></li>
    </ul>
);

const Viewport  = () => (
   <div className="container">
      <Navigation />
      <SlideList />
   </div>
);



// ====================
//      FUNCTIONS
// ====================

function Btn(props) {
    return (
        <button className="btn">{props.name} </button>
    )
};




export default Viewport;