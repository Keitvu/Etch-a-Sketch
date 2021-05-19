function createMatrixSize(){

    let matrix = new Array(16);
    
    //Creates a 2D array
    for(let column=0;column<matrix.length; column++){
        matrix[column] = new Array(16);
    }
    
    return matrix;
}


function createBoxInMatrix(matrix){
   
    //Select the overall container in the div
    const container = document.querySelector('#container');
    for(let column=0; column<matrix.length; column++){

        /*
        *Goes through each column in the matrix and creates a new div and setting the id to the column
        */
        const divColumn = document.createElement('div');
        divColumn.setAttribute('id', 'column'+column);
        divColumn.style.display = 'flex';
        container.appendChild(divColumn);

        /*
        *Goes through each column and create a individual div and puting it in the div of the column
        */
        for(let row =0; row<matrix[column].length; row++){
            const divRow = document.createElement('div');
            
            divRow.style.padding = '10px';
            divRow.style.width =  '1px';
            divRow.style.border = '1px solid black';

            matrix[column][row]= divRow;
            divColumn.appendChild(matrix[column][row]);
        }
    }
}

let matrix = createMatrixSize();
createBoxInMatrix(matrix);