import './style.css'
import Todo from './Todo'

const setChange = (index, setList, todoList) => {
    let newList = [...todoList];
    newList[index].Status = !newList[index].Status;
    setList(newList);
}

const todoSettings = (index, setList, todoList) => {
    let newList = [...todoList];
    newList.splice(index, 1);
    setList(newList);
}

function Todos(props) {
    const { todoList, setList } = props;
    const date = new Date();
    return (
        <div className="content">
            <ul>
                {
                    todoList.map((item, index) => {
                        if (date.getUTCDate() == item.Date.split("/")[0]) {
                            return (
                                <Todo onClick={() => { todoSettings(index, setList, todoList) }} myTodo={item} setChange={() => setChange(index, setList, todoList)} key={index} />
                            )
                        }
                        return null;
                    })
                }
            </ul>
        </div>
    )
}

export default Todos;