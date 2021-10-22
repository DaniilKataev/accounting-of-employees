import './employees-list-item.css';

const EmployeesListItem = ({item, togglePremium, deleteItem, editSalary}) => {
    
    const {name, salary, id, premium} = item;
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">{name}</span>
            <input onChange={() => changeInput(id, editSalary)} type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        onClick={() => togglePremium(id)}
                        className="btn-cookie btn-sm ">
                    <i className={premium? "fas fa-cookie": "fas"}></i>
                </button>

                <button type="button"
                        onClick={() => deleteItem(id)}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

function changeInput(id, editSalary) {
    const input = document.querySelectorAll(`ul>li>input`)[id-1];
    let value = input.value.replace(/\$/, "");
    value = value.replace(/^0/, "");
    if (!value) {
        value = 0;
    }
    input.value = value+"$";
    editSalary(id, value);
}

export default EmployeesListItem;