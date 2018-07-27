import React from 'react'
import SearchIcon from '../../assets/images/search.png'
import './styles.css'

export default class Header extends React.PureComponent {
    render() {
        return (
            <section className="header-container">
                <h1>Doctors</h1>
                <img id="search-icon" src={SearchIcon} alt="search icon" />
                <input id="search-input" onChange={this.props.onSearch} placeholder="Search doctors by name" />
            </section>
        )
    }
}