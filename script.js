const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


/* This code does the same thing as the previous one, but it uses the toggle method on the clicked
 panel's classList instead of removing and adding the class manually. The toggle method will add the
  class if it doesn't exist and remove it if it does. Also, it is using the event object's 
  currentTarget property to reference the clicked panel, instead of using the variable panel
   which was used before.*/

/*const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', (event) => {
        panels.forEach(panel => panel.classList.remove('active'));
        event.currentTarget.classList.toggle('active');
    });
});*/