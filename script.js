function toggleTheme(){
  document.body.classList.toggle("dark");
}

function submitForm(e){
  e.preventDefault();
  alert("Form Submitted Successfully");
}

function pay(method){
  let num=document.getElementById("payNumber").value;
  if(!num){alert("Enter number first");return;}
  let amt=prompt("Enter amount");
  if(amt) alert("Rs."+amt+" via "+method+" (frontend demo)");
}

/* Scroll animation */
const sections=document.querySelectorAll("section");
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add("show");
  });
},{threshold:0.15});

sections.forEach(s=>obs.observe(s));