//// Asynchronus Using callback

const getTodo = (callback) => {
    setTimeout(() => {
      callback({ text: "Time 1" });
    }, 1000);
  
    setTimeout(() => {
      callback({ text: "Time 2" });
    }, 2000);
  
    setTimeout(() => {
      callback({ text: "Time 3" });
    }, 3000);
  };
  getTodo((todo) => {
    console.log(todo.text);
  });