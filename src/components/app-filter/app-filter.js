
import './app-filter.css'

const AppFilter = (props)=>{
    const buttonsData = [
        {name : 'all' , label : 'Все сотрудники' , colored: false},
        {name : 'rise' , label : 'На повышение' , colored: false},
        {name : 'salary' , label : 'З/п больше 1000 чего-то' , colored: false},
        {name : 'increase' , label : 'Получат премию' , colored: true},
        {name : 'service' , label : 'Работают больше года' , colored: false}
    ];

    const buttons = buttonsData.map(({name,label,colored})=>{
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : "btn btn-outline-light"
        const color = colored ? {color : 'orange'} : null
        return (
            <button 
                className = {`btn ${clazz}`}
                onClick={()=>props.onFilterSelect(name)}
                key={name}
                style={color}
                type = "button">
                    {label}
            </button>
        )
    })

    return(
        <div className = "btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;