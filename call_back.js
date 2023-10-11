function add(num1, num2, callback) {

  if(num1==0){

    
  }
  callback(num1 + num2);
}

add(12, 23, (sum) => {
  console.log(sum);
});
