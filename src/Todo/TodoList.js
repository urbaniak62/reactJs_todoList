import React, { Component } from 'react';


class TodoList extends Component{

    constructor (){
        super();
        this.state = {
            utilisateurInput: " ",
            renseignement: [ ]
        }
    }

    onChange(e){
        console.log(e.target.value);
        this.setState({
            utilisateurInput: e.target.value
        }, ()=>console.log(this.state.utilisateurInput) );
    }

    add(e){
        e.preventDefault();
        this.setState({
            renseignement: [...this.state.renseignement, this.state.utilisateurInput]
        }, ()=>console.log(this.state.renseignement));
    }

    deleteTodo(e){
        e.preventDefault();
        const tab = this.state.renseignement;
        const cible= tab.indexOf(e.target.value);
        tab.splice(cible,1);
        this.setState({
            renseignement : tab
        });
    }

    montrerTodo(){
        return this.state.renseignement.map((rens)=>{
            return <div key={rens} className="list-group-item">
                    {rens} <button className="btn btn-danger" onClick={this.deleteTodo.bind(this)}> X</button>
                   </div>             
        })
    }

    render(){
        return (
            <div>
                <h1 align="center">Todo List</h1>
                <form className="form-row align-items-center">
                    <input 
                        className="form-control mb-2"
                        value={this.state.utilisateurInput}
                        type="text" 
                        placeholder="renseigner la liste"
                        onChange={this.onChange.bind(this)} 
                    />

                    <button
                        onClick={this.add.bind(this)} 
                        className="btn btn-primary" 
                    >ajouter</button>
                </form>

                <div className="list-group">
                    {this.montrerTodo()}
                </div>

            </div>
         );
    }
    
}

export default TodoList;







