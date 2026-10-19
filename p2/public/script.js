
const form = document.getElementById('productForm');
const idInput = document.getElementById('id');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const submit = document.getElementById('submit');
const cancel = document.getElementById('cancel');
const table = document.getElementById('products');
const message = document.getElementById('message');

async function loadProducts() {
    const response = await fetch('/api/products');
    const products = await response.json();

    table.replaceChildren();

    products.forEach((product, index) => {
        const row = document.createElement('tr');

        [index + 1, product.name, product.price].forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actions = document.createElement('td');

        const edit = document.createElement('button');
        edit.textContent = 'Edit';
        edit.className = 'edit';
        edit.onclick = () => {
            idInput.value = product.id;
            nameInput.value = product.name;
            priceInput.value = product.price;
            submit.textContent = 'Update Product';
            cancel.hidden = false;
            nameInput.focus();
        };

        const del = document.createElement('button');
        del.textContent = 'Delete';
        del.className = 'delete';
        del.onclick = async () => {
            if (confirm('Delete this product?')) {
                const result = await fetch('/api/products/' + product.id, {
                    method: 'DELETE'
                });

                if (result.ok) {
                    message.textContent = 'Product deleted successfully';
                    await loadProducts();
                }
            }
        };

        actions.append(edit, del);
        row.appendChild(actions);
        table.appendChild(row);
    });
}

form.onsubmit = async event => {
    event.preventDefault();

    const id = idInput.value;
    const product = {
        name: nameInput.value.trim(),
        price: priceInput.value
    };

    const response = await fetch(
        id ? '/api/products/' + id : '/api/products',
        {
            method: id ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        }
    );

    const result = await response.json();

    if (!response.ok) {
        message.textContent = result.message;
        return;
    }

    message.textContent = id
        ? 'Product updated successfully'
        : 'Product added successfully';

    form.reset();
    resetForm();
    await loadProducts();
};

function resetForm() {
    idInput.value = '';
    submit.textContent = 'Add Product';
    cancel.hidden = true;
}

cancel.onclick = () => {
    form.reset();
    resetForm();
    message.textContent = '';
};

loadProducts();
