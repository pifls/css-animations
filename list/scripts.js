let add_item = document.getElementById('add-item');
add_item.addEventListener("click", () => {
    console.log("xd");
    let list = document.getElementById('list');
    let newItem = document.createElement('li');
    newItem.innerHTML = 'new item';
    list.appendChild(newItem);
    setTimeout(() => {
        newItem.className = 'item';
    }, 10);
});