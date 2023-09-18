window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task-form');
    const input= document.querySelector('#new-task-input');
    const list_el=document.querySelector('#tasks');
    
    form.addEventListener('submit',(e)  =>{
        e.preventDefault();
        const task=input.value;
        if (!task){
            alert('Please enter a task!!');
            return; 
        }
        // This is for adding task  
        const task_el = document.createElement('div');
        task_el.classList.add('task');
        const task_content_el =document.createElement('div');
        task_content_el.classList.add('content');
        task_el.appendChild(task_content_el);
        const task_el_input= document.createElement('input');
        task_el_input.classList.add('text');
        task_el_input.type='text';
        task_el_input.value=task;
        task_el_input.setAttribute('readonly','readonly');
        task_content_el.appendChild(task_el_input);
        //Creating action div
        const task_el_action= document.createElement('div');
        task_el_action.classList.add('actions');
        // This is for adding edit button
        const btn_edit =document.createElement('button');
        btn_edit.classList.add('edit');
        btn_edit.innerHTML='Edit';
        // This is for adding edit button
        const img_del =document.createElement('img');
        img_del.src="trash.png";
        img_del.width=20; 
        img_del.height=20; 
        //appending both btn in action div
        task_el_action.appendChild(btn_edit);
        task_el_action.appendChild(img_del);
        task_el.appendChild(task_el_action);
        list_el.appendChild(task_el);
        input.value="";

        btn_edit.addEventListener('click',()=>{
          if(btn_edit.innerText.toLowerCase() == "edit"){
            task_el_input.removeAttribute('readonly');
            task_el_input.focus();
            btn_edit.innerText="Save";

          }else{
            task_el_input.setAttribute("readonly","readonly");
            btn_edit.innerText = "Edit";
            console.log('Trial')
          }
        })
        img_del.addEventListener('click',()=>{
            list_el.removeChild(task_el);
        }) 
        
    })
})