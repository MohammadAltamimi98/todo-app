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
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;