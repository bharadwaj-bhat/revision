const cont = document.querySelector(".container");

const arr = [];
var index = 1;

const arrMaker = () => {
  for (let i = 0; i < 300; i++) {
    arr[i] = `Student nj2_${i < 9 ? "00" : "0"}${i + 1}`;
  }
};
arrMaker();
// console.log(arr);

function addData(i = 1) {
  let list = document.createElement("ul");

  cont.addEventListener("scroll", () => {
    if (
      Number(cont.scrollTop) + Number(cont.clientHeight) >
      Number(cont.scrollHeight) - 10
    ) {
      index++;
      addData(index);
    }
  });

  arr.slice((1 - index) * 25, 25 * i).forEach((el) => {
    let li = document.createElement("p");
    li.innerHTML = el;
    list.appendChild(li);
  });
  cont.appendChild(list);
}

addData();
