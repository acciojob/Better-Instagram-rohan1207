//your code here
document.addEventListener("DOMContentLoaded",()=>{
	const images=document.querySelectorAll(".image");
	let draggedElement=null;
	images.forEach(image=>{
		image.addEventListener("dragstart",(event)=>{
			draggedElement=event.target;
			event.target.classList.add("selected");
		});

		image.addEventListener("dragend",(event)=>{
			event.target.classList.remove("selected");
		})
		image.addEventListener("dragover",(event)=>{
			event.preventDefault();
		});

		image.addEventListener("drop",(event)=>{
			event.preventDefault();
			if(draggedElement&&draggedElement!==event.target){
				 let tempBg = window.getComputedStyle(draggedElement).backgroundImage;
                draggedElement.style.backgroundImage = window.getComputedStyle(event.target).backgroundImage;
                event.target.style.backgroundImage = tempBg;
			}
		});
		
	});
});