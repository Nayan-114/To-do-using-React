import React from 'react';

const ListComponent = (props) =>
{
    return (
    <>
        <div className = 'todo_style'>
            <i className="fa fa-times" aria-hidden="true"
            onClick={ () => 
                    {
                        props.onSelect(props.id)
                    }
                } />
            <li> {props.listVal} </li>
        </div>
    </>
    )
}
export default ListComponent;