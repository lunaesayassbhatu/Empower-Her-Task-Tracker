document.querySelectorAll('.task-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const card = this.closest('.task-card');
        const description = card.querySelector('.task-input').value.trim();
        const name = card.querySelector('.name-input').value.trim();
        const deadline = card.querySelector('.deadline-input').value.trim();
        const license = card.querySelector('.license-input').value.trim();
        const taxPayment = card.querySelector('.tax-input').value;

        if (description === '' || name === '' || deadline === '') {
            alert('Please enter a valid name, task, and deadline.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = `${description} - ${name} (Deadline: ${deadline}, License: ${license}, Tax: ${taxPayment})`;
        listItem.innerHTML += '<button class="remove-btn">Remove</button>';

        // Add event listener for the remove button in newly added task
        listItem.querySelector('.remove-btn').addEventListener('click', function() {
            card.querySelector('.task-list').removeChild(listItem);
            saveTasks(); // Update local storage after removal
        });

        card.querySelector('.task-list').appendChild(listItem);
        saveTasks(); // Update local storage after adding a new task

        // Clear input fields after submission
        this.querySelector('.task-input').value = '';
        this.querySelector('.name-input').value = '';
        this.querySelector('.deadline-input').value = '';
        this.querySelector('.license-input').value = '';
        this.querySelector('.tax-input').value = 'pending'; // Reset tax payment status
    });
});
