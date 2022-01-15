import { Component } from 'react';

import './employees-add-form.css'
//import './employees-add-form.scss';

class EmployeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            salary: "",
            service:""
        }
    }

onValueChange = (e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}
onSubmit = (e)=>{
    e.preventDefault();
    if (this.state.name !== '' && this.state.name.length >= 3 && this.state.salary !== '' && this.state.service !== "") {
        this.props.onAdd(this.state.name,this.state.salary,this.state.service)
        this.setState({
            name:'',
            salary:'',
            service:''
        })
    }else{
        alert("Неправильно заполинена форма!")
    }
}


    render(){
    const{name,salary,service} = this.state   
        return(
            <div className = "app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form 
                className = "add-form d-flex"
                onSubmit = {this.onSubmit}>
                    <input type = "text"
                        className = "form-control new-post-label"
                        placeholder = "Как его зовут"
                        name='name' 
                        value={name}
                        onChange={this.onValueChange}/>
                    
                    <input type = "number"
                        className = "form-control new-post-label"
                        placeholder = "Сколько работает месяцев"
                        name='service' 
                        value={service}
                        onChange={this.onValueChange}/>
                    
                    <input type = "number"
                        className = "form-control new-post-label"
                        placeholder = "З/П в $"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
                        
                    <button type = "submit" 
                            className = "btn btn-outline-light"
                            onClick={this.onValueChange}>Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;



