
import React, { useState } from 'react';
import styles from './pagination.module.css';

function Paggination({ totalPages }) {
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber); //Math.min(Math.max(pageNumber, 1), totalPages)
    };

    return (
        <div className={styles.paginationContainer}>
            <div className={styles.paginationButtons}>
                <div onClick={prevPage} style={{ borderRadius: '3px 0px 0px 3px' }} /*disabled={currentPage === 1}*/ className={styles.paginationButton}>
                    {'<'}
                </div>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    // <button className={styles.paginationButton}>
                    <a
                        key={page}
                        href={`#${page}`}
                        onClick={() => goToPage(page)}
                        className={`${styles.paginationLink} ${page === currentPage ? styles.active : ''}`}
                    >
                        {page}
                    </a>
                    // </button>
                ))}
                <div onClick={nextPage} style={{ borderRadius: '0px 3px 3px 0px' }} /*disabled={currentPage === totalPages}*/ className={styles.paginationButton}>
                    {'>'}
                </div>
            </div>
        </div>
    );
}
export default Paggination
