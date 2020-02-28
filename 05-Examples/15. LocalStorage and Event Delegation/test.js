const taskList = document.querySelector('.tasks');
const addTasks = document.querySelector('.add-tasks');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// 添加一个task
function addTask(e) {
	e.preventDefault();
	const text = this.querySelector('[name=task]').value;
	const task = {
		text,
		done: false
	};
	tasks.push(task);
	showTask(tasks, taskList);
	// 保存task数组到本地存储
	localStorage.setItem('tasks', JSON.stringify(tasks));
	this.reset();
}

// 渲染 task
function showTask(tasks = [], taskList) {
	taskList.innerHTML = tasks
		.map((task, i) => {
			return `
        <li>
          <input type="checkbox" data-index=${i} id="task${i}" ${task.done ? 'checked' : ''} />
          <label for="task${i}">${task.text}</label>
        </li>
      `;
		})
		.join('');
}

function toggleDone(e) {
	const el = e.target;
	// 过滤掉不是 CheckBox 的元素
	if (!el.matches('input')) return;
	const index = el.dataset.index;
	// 更新 task 的 done 属性
	tasks[index].done = !tasks[index].done;
	console.log(tasks[index].done);
	localStorage.setItem('tasks', JSON.stringify(tasks));
	showTask(tasks, taskList);
}

addTasks.addEventListener('submit', addTask);

taskList.addEventListener('click', toggleDone);
showTask(tasks, taskList);
