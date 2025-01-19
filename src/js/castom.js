// pagination.js

export function createPagination({ totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationContainer = document.querySelector('.pagination');

  function updatePagination(currentPage) {
    const firstPage = Math.max(currentPage - 2, 1);
    const lastPage = Math.min(currentPage + 2, totalPages);

    paginationContainer.innerHTML = ''; // Clear previous pagination

    // Prev button
    if (currentPage > 1) {
      const prevButton = createPageButton('←', currentPage - 1);
      paginationContainer.appendChild(prevButton);
    }

    // Page buttons
    for (let i = firstPage; i <= lastPage; i++) {
      const pageButton = createPageButton(i, i);
      if (i === currentPage) {
        pageButton.classList.add('active');
      }
      paginationContainer.appendChild(pageButton);
    }

    // Next button
    if (currentPage < totalPages) {
      const nextButton = createPageButton('→', currentPage + 1);
      paginationContainer.appendChild(nextButton);
    }
  }

  function createPageButton(text, pageNumber) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('page-button');
    button.addEventListener('click', () => onPageChange(pageNumber));
    return button;
  }

  // Initial load
  updatePagination(1);
}
