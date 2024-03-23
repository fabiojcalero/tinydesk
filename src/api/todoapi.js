import client from "./client";

export const apiAddTodo = (data) => {
  const promise = new Promise((resolve) => {
    client
      .post("/home/todos", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return promise;
};

export const apiDeleteTodo = (payload) => {
  client.delete("/home/todos", { data: payload }).catch((error) => {
    console.log(error);
  });
};

export const apiUpdateTodo = (data) => {
  client.put("/home/todos", data).catch((error) => {
    console.log(error);
  });
};

export const apiChangeTodoPosition = (data) => {
  client.put("/home/todos/order", data).catch((error) => {
    console.log(error);
  });
};
