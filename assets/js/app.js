// Open preview Modal////
const preview = document.querySelector(".preview");
const chartContainerContainer = document.querySelector(".chartContainerContainer");
const previewClose = document.querySelector(".preview-close");
const previewSvg = document.querySelector(".preview-svg");

preview.addEventListener("click", () => {
  chartContainerContainer.classList.add("open");
  preview.style.background = "#2B2D2F";
  previewSvg.style.fill = "#249CFF";
});
previewClose.addEventListener("click", () => {
  chartContainerContainer.classList.remove("open");
  preview.style.background = "#ffffff";
  previewSvg.style.fill = "#2B2D2F";
});

// Open Help Modal////
const helpBtn = document.querySelector(".help-btn");
const helpSvg = document.querySelector(".helpSvg");
const helpArrow = document.querySelector(".help-arrow");
const ContextualMenu = document.querySelector(".ContextualMenu");
helpBtn.addEventListener("click", () => {
  ContextualMenu.classList.toggle("open");
  helpBtn.classList.toggle("bg-dark");
  helpSvg.classList.toggle("text-brand");
  helpArrow.classList.toggle("text-brand");
});
//Open Tool Sibilings////
const selectionBtn = document.querySelector(".selectionBtn");
const toolSibilings = document.querySelector(".tool-Sibilings");
const selectionBtn2 = document.querySelector(".selectionBtn2");
const toolSibilings2 = document.querySelector(".tool-Sibilings2");
const selectionBtn3 = document.querySelector(".selectionBtn3");
const toolSibilings3 = document.querySelector(".tool-Sibilings3");
// function openToolSibiling(btn, cla) {

// }
selectionBtn.addEventListener("click", () => {
  toolSibilings.classList.toggle("open");
  toolSibilings.classList.toggle("bounce-ani");
  toolSibilings2.classList.remove("open");
  toolSibilings2.classList.remove("bounce-ani");
  toolSibilings3.classList.remove("open");
  toolSibilings3.classList.remove("bounce-ani");
});
selectionBtn2.addEventListener("click", () => {
  toolSibilings2.classList.toggle("open");
  toolSibilings2.classList.toggle("bounce-ani");
  toolSibilings.classList.remove("open");
  toolSibilings.classList.remove("bounce-ani");
  toolSibilings3.classList.remove("open");
  toolSibilings3.classList.remove("bounce-ani");
});
selectionBtn3.addEventListener("click", () => {
  toolSibilings3.classList.toggle("open");
  toolSibilings3.classList.toggle("bounce-ani");
  toolSibilings.classList.remove("open");
  toolSibilings.classList.remove("bounce-ani");
  toolSibilings2.classList.remove("open");
  toolSibilings2.classList.remove("bounce-ani");
});

// floatingDialog////

const floatingDialog = document.querySelector(".floatingDialog");
const floatingDialogBtn = document.querySelector(".floatingDialog-btn");
const floatingDialogClose = document.querySelector(".floatingDialog-close");
const floatingDialogSvg = document.querySelector(".floatingDialog-svg");

floatingDialogBtn.addEventListener("click", () => {
  floatingDialog.classList.add("open");
  floatingDialogBtn.classList.add("bg-brand");
  floatingDialogSvg.style.stroke = "#fff";
});
floatingDialogClose.addEventListener("click", () => {
  floatingDialog.classList.remove("open");
  floatingDialogBtn.classList.remove("bg-brand");
  // previewSvg.style.fill = "#2B2D2F";
  floatingDialogSvg.style.stroke = "#C5C9CB";
});

// floatingDialog2////

const floatingDialog2 = document.querySelector(".floatingDialog2");
const floatingDialogBtn2 = document.querySelector(".floatingDialog-btn2");
const floatingDialogClose2 = document.querySelector(".floatingDialog-close2");
const floatingDialogSvg2 = document.querySelector(".floatingDialog-svg2");

floatingDialogBtn2.addEventListener("click", () => {
  floatingDialog2.classList.add("open");
  floatingDialogBtn2.classList.add("bg-brand");
  floatingDialogSvg2.style.stroke = "#fff";
});
floatingDialogClose2.addEventListener("click", () => {
  floatingDialog2.classList.remove("open");
  floatingDialogBtn2.classList.remove("bg-brand");
  // previewSvg.style.fill = "#2B2D2F";
  floatingDialogSvg2.style.stroke = "#C5C9CB";
});
// floatingDialog3////

const floatingDialog3 = document.querySelector(".floatingDialog3");
const floatingDialogBtn3 = document.querySelector(".floatingDialog-btn3");
const floatingDialogClose3 = document.querySelector(".floatingDialog-close3");
const floatingDialogSvg3 = document.querySelector(".floatingDialog-svg3");

floatingDialogBtn3.addEventListener("click", () => {
  floatingDialog3.classList.add("open");
  floatingDialogSvg3.style.stroke = "#1690ed";
});
floatingDialogClose3.addEventListener("click", () => {
  floatingDialog3.classList.remove("open");
  // previewSvg.style.fill = "#2B2D2F";
  floatingDialogSvg3.style.stroke = "#C5C9CB";
});

// Edit Modal///
const editBtn = document.querySelector('.editBtn')
const editModal = document.querySelector('.editModal')
const draggableList = document.querySelector('.draggableList')

editBtn.addEventListener('click', () =>{
  editModal.classList.toggle('open')
  draggableList.classList.toggle('borderbrand');
  editBtn.classList.toggle('open')

  
  // draggableList.classList.toggle('border');



})
// Focal Point/// 
const focalPointBtn = document.querySelector('.focalPointBtn')
const focalPoint =document.querySelector('.focalPoint')
const focalPointClose =document.querySelector('.focalPoint-close')
focalPointBtn.addEventListener('click', () =>{
  focalPoint.style.right = '0px'
})
focalPointClose.addEventListener('click', () =>{
  focalPoint.style.right = '-24rem'

});

// Image/// 
const imageBtn = document.querySelector('.imageBtn')
const image =document.querySelector('.image')
const imageClose =document.querySelector('.image-close')
imageBtn.addEventListener('click', () =>{
  image.style.right = '0px'
  console.log(5);
})
imageClose.addEventListener('click', () =>{
  image.style.right = '-24rem'

})
// Icon /// 
const iconBtn = document.querySelector('.iconBtn')
const icon =document.querySelector('.icon')
const iconClose =document.querySelector('.icon-close')
iconBtn.addEventListener('click', () =>{
  icon.style.right = '0px'
  console.log(5);
})
iconClose.addEventListener('click', () =>{
  icon.style.right = '-24rem'

})

// Button /// 
const buttonBtn = document.querySelector('.buttonBtn')
const button =document.querySelector('.button')
const buttonClose =document.querySelector('.button-close')
buttonBtn.addEventListener('click', () =>{
  button.style.right = '0px'
  console.log(5);
})
buttonClose.addEventListener('click', () =>{
  button.style.right = '-24rem'
})

// selectionPanel //
const sectionBtn = document.querySelector('.sectionBtn')
const sectionPanle =document.querySelector('.sectionPanle')
const sectionClose =document.querySelector('.section-close')
sectionBtn.addEventListener('click', () =>{
  sectionPanle.style.right = '0px'
  console.log(5);
})
sectionClose.addEventListener('click', () =>{

  sectionPanle.style.right = '-24rem'

})