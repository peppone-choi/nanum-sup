import { EventEmitter } from "events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

(() => {
  myEmitter.on("주문 완료", orderComplete);
  myEmitter.on("배달 시작", startDelivery);
  myEmitter.on("배달 완료", deliveryComplete);

  function orderStart() {
    console.log("주문 시작");
    myEmitter.emit("주문 완료");
  }

  function orderComplete() {
    console.log("주문 완료");
    myEmitter.emit("배달 시작");
  }

  function startDelivery() {
    console.log("배달 시작");
    myEmitter.emit("배달 완료");
  }

  function deliveryComplete() {
    console.log("배달이 완료되었습니다.");
  }

  orderStart();
})();
