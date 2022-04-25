let header = document.querySelector('#page-header')
header.style.color = "navy"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}

let row = document.querySelector('.row')
row.style.backgroundColor = "darkgray"

let mid = document.querySelector('#mid')
mid.style.backgroundColor = "lightgray"
// Select some elements...