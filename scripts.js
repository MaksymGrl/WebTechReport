function updateZoom(value) {
    var allIfames = document.querySelectorAll('.iframe')
    allIfames.forEach(iframe => iframe.style.width = `${100 / value}%`)
    allIfames.forEach(iframe => iframe.style.height = `${100 / value}%`)
}

function showLab(labNumber) {
var allNavs = document.querySelectorAll('.content-nav');
var allSections = document.querySelectorAll('.content-section');


allNavs.forEach(nav => nav.style.display = 'none');
allSections.forEach(section => section.style.display = 'none');


var selectedNav = document.getElementById('contentNav' + labNumber);
if (selectedNav) {
    selectedNav.style.display = 'flex';
    selectedNav.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'block'; 
    });
}
}

function toggleVisibility(sectionId) {
hideAllSections();
var section = document.getElementById(sectionId);
if (section) {
    section.style.display = (section.style.display === 'none' ? 'block' : 'none');
}
}

function hideAllSections() {
var sections = document.querySelectorAll('.content-section');
sections.forEach(section => {
    section.style.display = 'none';
});
}



/////////////////////////// TASK 1, LAB5

const A = [2, 4, 6, 8, 10, 12, 14, 16, 9, 20];
const B = [4, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calculateC(A, B) {
return A.map((a, i) => {
    let value = a !== B[i] ? 1 / (a - B[i]) : 1;
    return parseFloat(value.toFixed(3));
});
}

function swapMaxAndFirst(arr) {
let maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
    }
}
[arr[0], arr[maxIndex]] = [arr[maxIndex], arr[0]];
}

function bubbleSort(arr) {
let len = arr.length;
for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}
}

function performOperations() {
const C = calculateC(A, B);
const originalC = [...C];

swapMaxAndFirst(C);
const swappedC = [...C];

bubbleSort(C);
const sortedC = [...C];

document.getElementById('output').innerHTML = `
    <p>Масив A: ${A.join(', ')}</p>
    <p>Масив B: ${B.join(', ')}</p>
    <p>Початковий масив C: ${originalC.join(', ')}</p>
    <p>Масив C після підіміни максимального і пешого: ${swappedC.join(', ')}</p>
    <p>Масив C після сортування бульбашками: ${sortedC.join(', ')}</p>
`;
}
/////////////

/////////////////////////// TASK 2, LAB5
let output = document.getElementById('output2');
document.getElementById('editor').addEventListener('input', updateOutput);


function formatText(style) {
    const editor = document.getElementById('editor');
    let selectedText = window.getSelection().toString();
    if (!selectedText) return;

    let newText = '';

    switch (style) {
        case 'bold':
            newText = `<strong>${selectedText}</strong>`;
            break;
        case 'italic':
            newText = `<em>${selectedText}</em>`;
            break;
        case 'underline':
            newText = `<u>${selectedText}</u>`;
            break;
        case 'normal':
            newText = selectedText.replace(/<\/?[^>]+(>|$)/g, "");
            break;
    }

    output.innerHTML = editor.innerHTML.replace(selectedText, newText);
}

function changeColor(color) {
    const editor = document.getElementById('editor');
    let selectedText = window.getSelection().toString();
    if (!selectedText) return;

    let newText = `<span style="color: ${color};">${selectedText}</span>`;
    output.innerHTML = editor.innerHTML.replace(selectedText, newText);

}

function changeCase(caseType) {
    const editor = document.getElementById('editor');
    let selectedText = window.getSelection().toString();
    if (!selectedText) return;

    let newText = '';
    if (caseType === 'uppercase') {
        newText = selectedText.toUpperCase();
    } else if (caseType === 'lowercase') {
        newText = selectedText.toLowerCase();
    }

    output.innerHTML = editor.innerHTML.replace(selectedText, newText);
}

function updateOutput() {
    const editorContent = document.getElementById('editor').innerHTML;
    output.innerHTML = editorContent
}
//////////////

/// TASK 4, LAB5.1
const concerts = {
Київ: new Date("2020-04-01"),
Умань: new Date("2025-07-02"),
Вінниця: new Date("2020-04-21"),
Одеса: new Date("2025-03-15"),
Хмельницький: new Date("2020-04-18"),
Харків: new Date("2025-07-10"),
};

const currentDate = new Date();

const upcomingConcertCities = Object.entries(concerts)
.filter(([city, date]) => date > currentDate)
.sort(([, dateA], [, dateB]) => dateA - dateB)
.map(([city]) => city);
console.log("5.1 завдання 4");
console.log(upcomingConcertCities);
//////////////////////

/// TASK 6, LAB5.1
const medicines = [
{ name: "Noshpa", price: 170 },
{ name: "Analgin", price: 55 },
{ name: "Quanil", price: 310 },
{ name: "Alphacholine", price: 390 },
];

const applyDiscountAndAddId = (medicines) => {
return medicines.map((medicine, index) => {
    let discountedPrice = medicine.price;

    if (medicine.price > 300) {
        discountedPrice = medicine.price * 0.7; // Знижка 30%
    }

    return {
        id: index + 1,
        name: medicine.name,
        price: discountedPrice.toFixed(2) // Обмежуємо до двох знаків після коми
    };
});
};

const discountedMedicines = applyDiscountAndAddId(medicines);
console.log("5.1 завдання 6");
console.log(discountedMedicines);
///////////////////////

/// TASK 8, LAB5.1
function Storage(initialItems) {
this.items = initialItems;

this.getItems = function() {
    return this.items;
};

this.addItem = function(item) {
    this.items.push(item);
};

this.removeItem = function(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
        this.items.splice(index, 1);
    }
};
}

const arr = ["apple", "banana", "mango"];
const storage = new Storage(arr);
console.log("5.1 завдання 8");
// Використання методів
console.log(storage.getItems()); 

storage.addItem("lime");
console.log(storage.getItems());

storage.removeItem("banana");
console.log(storage.getItems());
///////////////////////

////////////////// TASK 10, LAB5.1
function checkBrackets(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {
        if (brackets[char]) {
            // Якщо символ - це відкрита дужка, додаємо її до стека
            stack.push(char);
        } else if (Object.values(brackets).includes(char)) {
            // Якщо символ - це закрита дужка, перевіряємо чи відповідає вона останній відкритій дужці
            if (brackets[stack.pop()] !== char) {
                return false;
            }
        }
    }

    // Якщо стек порожній, то всі дужки правильно закриті
    return stack.length === 0;
}

// Приклади використання
console.log("5.1 завдання 10")
console.log(checkBrackets("function someFn() { return { key: 'value' }; }")); // true
console.log(checkBrackets("function someFn() { return { key: 'value' }"));   // false
console.log(checkBrackets("if (a > b) { console.log(a); } else { console.log(b); }")); // true
console.log(checkBrackets("[{()}]")); // true
console.log(checkBrackets("[{(])}")); // false
//////////////////////////////////////



////////////////// TASK 2, LAB6
document.getElementById('6swapButton').addEventListener('click', function() {
        const input1 = document.getElementById('6input1');
        const input2 = document.getElementById('6input2');
        const temp = input1.value;
        input1.value = input2.value;
        input2.value = temp;
    });
//////////////////////////////////////



////////////////// TASK 4, LAB6
const square = document.getElementById('square');
const decreaseButton = document.getElementById('decreaseButton');
const increaseButton = document.getElementById('increaseButton');

decreaseButton.addEventListener('click', () => {
    const currentWidth = square.offsetWidth;
    const currentHeight = square.offsetHeight;
    square.style.width = `${currentWidth - 15}px`;
    square.style.height = `${currentHeight - 15}px`;
});

increaseButton.addEventListener('click', () => {
    const currentWidth = square.offsetWidth;
    const currentHeight = square.offsetHeight;
    square.style.width = `${currentWidth + 15}px`;
    square.style.height = `${currentHeight + 15}px`;
});
//////////////////////////////////////


////////////////// TASK 6, LAB6
const doubleButton = document.getElementById('6doubleButton');
const numberListItems = document.querySelectorAll('#numberList li');

doubleButton.addEventListener('click', () => {
    numberListItems.forEach(item => {
        item.textContent = Number(item.textContent) * 2;
    });
});
//////////////////////////////////////




////////////////// TASK 8, LAB6
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: email,
        password: password,
    };

    console.log(formData);

    form.reset();
});
//////////////////////////////////////

////////////////// TASK 9, LAB6
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

changeColorButton.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
});
//////////////////////////////////////

////////////////// TASK 10, LAB6
const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = ''; // Очищення значення інпуту
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    // Очищення контейнера перед створенням нових елементів
    destroyBoxes();

    const boxesFragment = document.createDocumentFragment();
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        size += 10;
        boxesFragment.appendChild(box);
    }

    boxesContainer.appendChild(boxesFragment);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}
//////////////////////////////////////