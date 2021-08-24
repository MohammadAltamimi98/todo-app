import React from 'react';

const Pagination = ({ todosPerPage, totalTodos, paginate }) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNum.map(number => (
          <li key={number} className='item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;