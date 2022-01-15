import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: 'Stepan' , salary : 0 , increase : true, rise : false , id : 1,service : 12},
                {name: 'Ivan' , salary : 2432 , increase : false, rise : true , id : 2,service : 15},
                {name: 'Feofan' , salary : 132 , increase : true, rise : false, id : 3,service : 11}
            ],
            term: '',
            filter : ''
        }
        this.maxId = 4;
    }


    deleteItem = (id)=>{
        this.setState(({data}) =>{
            
            /* 1 способ удаление элемента не нарушая иммутабельность
            const index = data.findIndex(elem => elem.id == id);
            const before = data.slice(0,index);
            const after = data.slice(index + 1);

            const newArr = [...before , ...after];

            return {
                data:newArr
            }*/
            // 2 способ
            return {
                data:data.filter(item => item.id !== id)
            }

        })
    }
    addItem = (name,salary,service)=>{
        const newItem = {
            name,
            salary,
            service,
            increase:false,
            rise:false,
            id:this.maxId++
        }
        this.setState(({data})=>{
            const newArr = [...data,newItem]
            return{
                data:newArr
            }
        })
    }
    /* Вместо этих 2 функций можна использовать 1 функцию onToggleProp
    onToggleIncrease = (id)=>{
        console.log(`Increase this ${id}`)
        /* 1 способ 
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index];
            const newItem = {...old , increase : !old.increase};
            const newArr = [...data.slice(0,index), newItem , ...data.slice(index + 1)] 

            return{
                data:newArr
            }
        }
    })
        //2 способ
        this.setState(({data})=>({
            data:data.map(item =>{
                if (item.id === id) {
                    return{...item , increase : !item.increase}
                }       
                return item;
            })
        }))
    }

    onToggleRise = (id)=>{
        this.setState(({data})=>({
            data:data.map(item =>{
                if (item.id === id) {
                    return{...item , rise : !item.rise}
                }       
                return item;
            })
        }))
    }*/

    onToggleProp = (id , prop)=>{
        this.setState(({data})=>({
            data:data.map(item =>{
                if (item.id === id) {
                    return{...item , [prop] : !item[prop]}
                }       
                return item;
            })
        }))
    }

    changeSalary = (id , e)=>{
        const salary = e.target.value
        this.setState(({data})=>({
            data:data.map(item =>{
                if (item.id === id) {
                    return{...item,salary}
                }
                    return item
            })
        }))
    }


    searchEmp = (items,term)=>{
        if (items.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }


    onUpdateSearch = (term)=>{
        this.setState({term});
    }

    filterPost = (items,filter)=>{
        if (filter === 'rise') {
            return items.filter(items => items.rise)
        }
        if (filter === 'salary') {
            return items.filter(items => items.salary > 1000)
        }
        if (filter === 'increase') {
            return items.filter(items => items.increase)
        }
        if (filter === 'service') {
            return items.filter(items => items.service >= 12)
        }
        return items
    }

    onFilterSelect = (filter)=>{
        this.setState({filter});
    }


    render(){
        const {data,term,filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data,term) , filter);


        return(
            <div className="app">
                <AppInfo 
                    employees = {employees} increased = {increased}/>
                <div className='search-panel'> 
                    <SearchPanel
                        onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter 
                        filter = {filter}
                        onFilterSelect = {this.onFilterSelect}/>
                </div>
                <EmployeesList 
                    data = {visibleData}
                    onDelete = {this.deleteItem}
                    onToggleProp =  {this.onToggleProp}
                    changeSalary={this.changeSalary}/>
                <EmployeesAddForm onAdd = {this.addItem}/>
            </div>
        );
    }
}

export default App;






















