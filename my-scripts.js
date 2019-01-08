//Create database count
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count",0)
}

// update HTML to match count
function update(){
	document.getElementById("count").innerHTML = Number(localStorage.getItem("count"))
}

update()

// add one to the count

function plusOne() {
	localStorage.setItem("count",(Number(localStorage.getItem("count")) + 1))
	update()

}

// make the reset button work
function reset() {
	if(confirm("Are you sure you want to reset?")){
		localStorage.setItem("count",0)
		update()
		
	}

}