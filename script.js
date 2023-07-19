const outputOperasi = document.querySelector(".output-operasi");
const outputKalkulasi = document.querySelector(".output-kalkulasi");

const fungsionalitas = document.querySelectorAll(".fungsionalitas");
const operasiAll = document.querySelectorAll(".operasi");
const numAll = document.querySelectorAll(".num");

let value = [];
let valKalk = "";
let valOpr = [];

const showOpr = (operasi) => {
  outputOperasi.textContent += operasi;
};
const showKalk = (num) => {
  valKalk += num;
};

numAll.forEach((num) => {
  num.addEventListener("click", () => {
    showKalk(num.textContent);
    outputKalkulasi.textContent = valKalk;
  });
});

operasiAll.forEach((operasi) => {
  operasi.addEventListener("click", () => {
    valOpr.push(operasi.textContent);

    value.push(outputKalkulasi.textContent);

    if (value.length >= 2)
      value.push(
        eval(
          `${Number(value[value.length - 2])}${
            valOpr.length >= 2 ? valOpr[valOpr.length - 2] : operasi.textContent
          }${Number(value[value.length - 1])}`
        )
      );

    if (operasi.textContent == "=") {
      outputOperasi.textContent = "";
    } else {
      showOpr(`${outputKalkulasi.textContent} ${operasi.textContent} `);
    }
    outputKalkulasi.textContent = value[value.length - 1];
    valKalk = "";
  });
});

fungsionalitas.forEach((fungsionalitas) => {
  fungsionalitas.addEventListener("click", () => {
    switch (fungsionalitas.textContent) {
      case "Del":
        valKalk = valKalk.slice(0, -1);
        outputKalkulasi.textContent = valKalk;
        break;

      case "Cl":
        valKalk = "";
        outputKalkulasi.textContent = valKalk;
        outputOperasi.textContent = "";
        value = [];
        break;
    }
  });
});
