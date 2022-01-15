import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css';

const EmployeesList = ({data,onDelete,onToggleProp,changeSalary})=>{

    const elem = data.map(item =>{
        const {id, ...itemProps} = item;
        return(
            <EmployeesListItem 
            key = {id} 
            {...itemProps} // либо name ={item.name} salary ={item.salary} increase={item.increase} чтобы исправить ошибку key нужно key = {item.id} либо другой вариант
            onDelete = {()=> onDelete(id)}
            onToggleProp = {(e)=> onToggleProp(id , e.currentTarget.getAttribute('data-toggle'))}
            changeSalary = {(e)=>changeSalary(id,e)}/>
        );
    });
    return(
        <ul className = "app-list list-group">
            {elem};
        </ul>
    );
}

export default EmployeesList;