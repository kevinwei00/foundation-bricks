import React from 'react';
import css from '../../styles/base/components/blocks/_list-block.module.scss';

const ListBlock = ({ items, icon }) => {
  if (!items) {
    return null;
  }

  return (
    <div className={`list-block ${css.style}`}>
      <ul className='list-container'>
        {items.map((item, index) =>
          <li key={index} className='list-item'>
            {icon && <figure className='list-icon'><img src={icon}/></figure>}
            <span className='list-text' dangerouslySetInnerHTML={{ __html: item }}/>
          </li>)}
      </ul>
    </div>
  );
};

export default ListBlock;
