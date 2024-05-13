const obj = { 
    values: ['value1', 'value2', 'value3']
  };
  
  function getValues(obj) {
    return obj.values;
  }
  
  const values = getValues(obj);
  console.log(values); // Output: ['value1', 'value2', 'value3']