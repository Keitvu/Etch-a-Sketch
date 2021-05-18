function createMatrixSize(){

    let matrix = new Array(16);
    
    //Creates a 2D array
    for(let column=0;column<matrix.length; column++){
        matrix[column] = new Array(16);
    }
    
    return matrix;
}


function createDivInMatrix(matrix){
   
    //Select the overall container in the div
    const container = document.querySelector('#container');
    for(let column=0; column<matrix.length; column++){

        /*
        *Goes through each column in the matrix and creates a new div and setting the id to the column
        */
        const divColumn = document.createElement('div');
        divColumn.setAttribute('id', 'column'+column);
        container.appendChild(divColumn);

        /*
        *Goes through each column and create a individual div and puting it in the div of the column
        */
        for(let row =0; row<matrix[column].length; row++){
            const divRow = document.createElement('div');
            matrix[column][row]= divRow;
            divColumn.appendChild(matrix[column][row]);
        }
    }
}

function createBox(matrix){

    const container = document.querySelector('#container');


}

let matrix = createMatrixSize();
createDivInMatrix(matrix);