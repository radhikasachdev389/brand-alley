function shopCollection(){document.querySelector("#shop").scrollIntoView({behavior:"smooth"});}
function addToCart(button){
  button.textContent="Added ✓";
  button.classList.add("added");
  const count=document.getElementById("bag-count");
  count.textContent=String(Number(count.textContent||0)+1);
  setTimeout(()=>{button.textContent="Add to bag";button.classList.remove("added")},1600);
}
document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",e=>{
    const target=document.querySelector(link.getAttribute("href"));
    if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"});}
  });
});