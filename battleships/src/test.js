let temp = new Array(10).fill(0);
temp = temp.map(t => {  
    return new Array(10).fill('H');
})

temp[4][4] = 'G';
console.log(temp);