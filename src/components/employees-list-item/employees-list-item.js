
import './employees-list-item.css'


const EmployeesListItem = (props) =>{

        const{name,salary,onDelete,onToggleProp,increase,rise,service,changeSalary} = props;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (rise) {
            classNames += ' like';
        }
        return(
            <li className = {classNames}>
                <span className = "list-group-item-label" 
                data-toggle = "rise"
                style={{fontSize: 24}}
                onClick={onToggleProp}>{name},работает : {service} месяцев</span>
                <input type = "text" className = "list-group-ittem-input" defaultValue = {salary + "$"} onInput={changeSalary}/>
                <div className = "d-flex justify-content-center align-item-center">
                    <button 
                        type = "button"
                        className = "btn-cookie btn-sm"
                        data-toggle = "increase"
                        onClick={onToggleProp}>
                        <i className = "fas fa-cookie"></i>    
                    </button>
    
                    <button
                        type = "button"
                        className = "btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className = "fas fa-trash"></i>    
                    </button>
                    <i className = "fas fa-star"></i>
                </div>
            </li>
        );
    } 

export default EmployeesListItem;