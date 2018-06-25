function sum(...args){
  return args.reduce((acc, el) => {
    return acc + el;
  });
}

Function.prototype.myBind = function (context, ...args){
  return (...otherArgs) => this.apply(context, args.concat(otherArgs));
};


function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num){
    numbers.push(num);
    if (numbers.length === numArgs){
      return numbers.reduce((acc, el) => {return acc + el;});
    }else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function (argNums) {
  let nums = [];
  const that = this;
  function _curriedSums(numb) {
    nums.push(numb);
    if (nums.length === argNums) {
      return that(...nums);
    } else {
      return _curriedSums;
    }
  } 
  return _curriedSums;
};

Function.prototype.curry3 = function (numArgs3) {
  let numbers3 = []; 
  const that = this;
  function _curry3(numbs3){
    numbers3.push(numbs3);
    if (numbers3.length === numArgs3){
      return that.apply(null, numbers3);
    }else{
      return _curry3;
    }
  }
  return _curry3;
};