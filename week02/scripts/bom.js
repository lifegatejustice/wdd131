
// Selecting required elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Target the ul element with id 'list'

// Add event listener to the button for adding chapters
button.addEventListener('click', function() {
    // Check if input is not empty
    if (input.value.trim() !== '') {
        // Create list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        // Set content for list item and delete button
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        
        // Append the delete button to the list item
        li.append(deleteButton);
        // Append the list item to the ul list
        list.append(li);
        
        // Add event listener to delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);  // Remove the li item from the list
        });
        
        // Clear the input and set focus back
        input.value = '';
    }
    
    // Set focus back to input whether or not an item was added
    input.focus();
});


