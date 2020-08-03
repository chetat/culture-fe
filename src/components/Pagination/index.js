import React, { Component, Fragment, useState} from 'react';
import PropTypes from 'prop-types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) {
    let i = from;

    const range = [];

    while (i < to) {
        range.push(i)
        i += step;
    }
    return range;
}




const Pagination = (props) => {
    const [currentPage, setCurrentPage] = useState(0);

    const { total = null, pageLimit=20, pageNeighbors = 0 } = props;
    pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
    total = typeof total === 'number' ? total : 0;

    pageNeighbors = typeof pageNeighbors === 'number' ? Math.max(0, Math.min(pageNeighbors, 2)) : 0;

    total = Math.ceil(total / pageLimit)

    setCurrentPage(1)
}

Pagination.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    pageLimit: PropTypes.number,
    pageNeighbours: PropTypes.number,
    onPageChanged: PropTypes.func
  };
  
  export default Pagination;