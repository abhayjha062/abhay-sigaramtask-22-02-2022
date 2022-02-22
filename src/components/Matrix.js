import React from 'react';

const Matrix = (e) => {
    
  const toggleRed = (e) => {
      //console.log(e.target.parentElement.children);
      let count = 0;
      let arr = [];
      let length = e.target.parentElement.children.length;
      e.target.className = 'grid-item-change';
      //console.log(e.target.parentElement.children[0].className);
      for(let i = 0; i< length; i++) {
        if(e.target.parentElement.children[i].className == 'grid-item-change') {
            count ++;
            arr.push(i);
        }

        if(count > 2) {
            e.target.parentElement.children[i].className = 'grid-item';

        }
      }
      

  }
  return (
      <div className="grid-container" onClick={toggleRed}>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>  
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>  
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>  
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>  
        <div className="grid-item"></div>    
      </div>
  )
}

export default Matrix;
