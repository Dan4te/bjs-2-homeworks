//Задача № 1

function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
  
    function wrapper(...args) {
      wrapper.allCount++;
      if (!timeoutId) {
      func(...args);
      wrapper.count++;
    }
  
    clearTimeout(timeoutId);
  
    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay)
  }
  
    return wrapper;
  }

  module.exports = {
    debounceDecoratorNew, 
  }
  

//Задача № 2

function cachingDecoratorNew(func) {
  let cache = [];
  
  return (...args) => {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кеша: " + objectInCache.value);
      return "Из кеша: " + objectInCache.value;
    }

    let result = func(...args);
    cache.push({hash: hash, value: result});
    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
}

module.exports = {
  cachingDecoratorNew
}
