import React from "react";
import './filters.css';
import SwitchButton from "../../atoms/SwitchButton/SwitchButton";
import Dropdown from "../../atoms/Dropdown/Dropdown";

function Filters(props) {
    const { handleToggle,pageDefaultValue, itemsDefaultValue ,isOn, changePage, changeNumberProducts } = props;
    return (
        <div className='filters-container'>
            <div className='filters-switchContainer'>
                <p>Mostrar solo activos</p>
                <SwitchButton
                    handleToggle={handleToggle}
                    name='prueba'
                    isOn={isOn}
                />
            </div>
            <div className='filters-dropdownContainer'>
                <Dropdown pageDefaultValue={pageDefaultValue} text='Ir a página' changeFunction={changePage} />
                <Dropdown itemsDefaultValue={itemsDefaultValue} text='Productos por página' changeFunction={changeNumberProducts} />
            </div>
        </div>
    )
}

export default Filters;