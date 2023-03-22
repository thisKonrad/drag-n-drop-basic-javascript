/* Drag_n_Drop_API main Script JS */

const dragItems = document.querySelectorAll('.drag-all');
const dropTargets = document.querySelectorAll('.drop-all');

/* loop through all the items and add the drag events addicted to the functions below */
dragItems.forEach( dragItem => {
    dragItem.addEventListener('dragstart', dragStart);
    dragItem.addEventListener('dragover', dragOver);
});

/* dragstart :: get the dragggable item by id */
function dragStart(event){
    event.dataTransfer.setData ('text/plain', event.target.id)
    console.log('start')};

/** dragover :: always preventDefault() this event for enable
* to drag it on every type of target. 
* by default the browser only moves or copy the item 
* to an contenteditable, input-field or textarea. ..(same reason for the drop event(-below))
*/
function dragOver(event){
    event.preventDefault()
    console.log('over')};

/* "same" procedure for the drop event functions */
dropTargets.forEach( dropTarget =>{
    dropTarget.addEventListener('dragenter', dragEnter)
    dropTarget.addEventListener('dragleave', dragLeave)
    dropTarget.addEventListener('drop', dropDown)
})

/* dragenter: */
function dragEnter(event){
    event.currentTarget.style = 'background-color: violet';
    console.log('enter')};

/* dragleave: */
function dragLeave(event){
    event.console.log('leave')};

/* drop: */
function dropDown(event){
    event.preventDefault();
    event.currentTarget.style = "background-color:rgb(185, 185, 185)";
	const data = event.dataTransfer.getData ('text/plain');
    const dropItem = document.getElementById(data);
	event.target.append(dropItem)
}
