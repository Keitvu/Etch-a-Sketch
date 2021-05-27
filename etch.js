function createMatrixSize(size){

    //Creates a 2D matrix 
    let matrix = new Array(size);
    for(let column=0;column<matrix.length; column++){
        matrix[column] = new Array(size);
    }
    
    return matrix;
}


function createBoxInMatrix(matrix){
   
    //Select the overall container in the div
    const container = document.querySelector('#container');
    for(let column=0; column<matrix.length; column++){

        /*
        *Goes through each column in the matrix and creates a new div
        */
        const divColumn = document.createElement('div');
        divColumn.setAttribute('id', 'column');
        divColumn.style.display = 'inline-block';
        container.appendChild(divColumn);

        /*
        *Goes through each column and create a individual div(square) 
        *and puting it in the div of the column
        */
        for(let row =0; row<matrix[column].length; row++){
            const divRow = document.createElement('div');
            divRow.classList.add('square');
            matrix[column][row]= divRow;
            divColumn.appendChild(matrix[column][row]);
        }
    }
}

function changeBackground(){

// Goes through every sqaure and adds an event
// that if mouse over than change background color
   const square = document.querySelectorAll('.square');
    square.forEach((square) => {
        square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor = 'black';
        })
    })
}

function changeBoxSize(size){

    // Change the padding of each box to adjust for 
    // how many boxes in the general area of 320 px
    const square = document.querySelectorAll('.square');
    square.forEach((square) => {
        square.style.padding = 320/size + 'px';

    })
}

function button(){
    // Adds an event listener to the button to change the size of the matrix
    const btn = document.querySelector('button');
    btn.addEventListener('click', ()=>{
        let size = parseInt(prompt("Please enter another number: "));
        
        if(size>64){
            alert("Please enter a number between 1-64");
            size= parseInt(prompt("Please enter another number: "));
        }
        main(size)
    })
}


function main(userSize){
    // Clears what is originally in the div and add a new matrix with a that user size
    document.getElementById('container').innerHTML = "";
    let matrix = createMatrixSize(userSize);
    createBoxInMatrix(matrix);
    changeBoxSize(userSize);
    changeBackground();
}

main(16);
button()