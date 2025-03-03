let count = 0;
document.getElementById("btn-1").addEventListener("click", function (event) {
  event.preventDefault;
  const x = getInnerTextById("card-num");
  setInnerTextByIdAndValue("card-num", x);
  const y = getInnerTextById2("increase-num");
  setInnerTextByIdAndValue("increase-num", y);
  handleToggle("btn-1");
  history("history", "pb-1");
  count++;
  congrats(count);
});
document.getElementById("btn-2").addEventListener("click", function (event) {
  event.preventDefault;
  const x = getInnerTextById("card-num");
  setInnerTextByIdAndValue("card-num", x);
  const y = getInnerTextById2("increase-num");
  setInnerTextByIdAndValue("increase-num", y);
  handleToggle("btn-2");
  history("history", "pb-2");
  count++;
  congrats(count);
});
document.getElementById("btn-3").addEventListener("click", function (event) {
  event.preventDefault;
  const x = getInnerTextById("card-num");
  setInnerTextByIdAndValue("card-num", x);
  const y = getInnerTextById2("increase-num");
  setInnerTextByIdAndValue("increase-num", y);
  handleToggle("btn-3");
  history("history", "pb-3");
  count++;
  congrats(count);
});
document.getElementById("btn-4").addEventListener("click", function (event) {
  event.preventDefault;
  const x = getInnerTextById("card-num");
  setInnerTextByIdAndValue("card-num", x);
  const y = getInnerTextById2("increase-num");
  setInnerTextByIdAndValue("increase-num", y);
  handleToggle("btn-4");
  history("history", "pb-4");
  count++;
  congrats(count);
});
document.getElementById("btn-5").addEventListener("click", function (event) {
  event.preventDefault;
  const x = getInnerTextById("card-num");
  setInnerTextByIdAndValue("card-num", x);
  const y = getInnerTextById2("increase-num");
  setInnerTextByIdAndValue("increase-num", y);
  handleToggle("btn-5");
  history("history", "pb-1");
  count++;
  congrats(count);
});
document.getElementById("btn-6").addEventListener("click", function (event) {
  event.preventDefault;
  const x = getInnerTextById("card-num");
  setInnerTextByIdAndValue("card-num", x);
  const y = getInnerTextById2("increase-num");
  setInnerTextByIdAndValue("increase-num", y);
  handleToggle("btn-6");
  history("history", "pb-6");
  count++;
  congrats(count);
});
