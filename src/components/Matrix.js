import React from 'react';

const Matrix = (e) => {
    
  const toggleRed = (e) => {
      let count = 0;
      let arr = [];
      let length = e.target.parentElement.children.length;

      for(let i = 0; i< length; i++) {
        if(e.target.parentElement.children[i].className === 'grid-item-change') {
            count ++;
            arr.push(i);
        }
      }

      if(count > 1) {
        let j = arr[0];
        e.target.parentElement.children[j].className = 'grid-item';
        e.target.className = 'grid-item-change';
        arr.shift();
      } else {
        e.target.className = 'grid-item-change';
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
