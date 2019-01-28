import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md  bg-info " id="header">

                <div className="container-fluid">

                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Flight</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Hotels</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}

function Main() {
    return (
        <div className="container-fluid">


            <div className="row my-4">

                <Sidebar/>

                <div className="col-10">
                    
                    <table className="w-100">
                        <thead className="border border-info">
                        <td></td>
                        <td>Рейс</td>
                        <td>Откуда</td>
                        <td>Куда</td>
                        <td>Цена</td>
                        <td>Дата</td>
                        <td>Купить билет</td>

                        </thead>
                        <tbody>
                        {GenerateFlights()}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

function Sidebar() {
    return (
        <nav className=" col-2 bg-light nav">
            <ul>
                <li><a href="https://www.turkishairlines.com/">Turkish Airlines</a></li>
                <li><a href="https://www.aeroflot.ru">Aeroflot</a></li>
                <li><a href="https://www.lufthansa.com">Luftganza</a></li>
                <li><a href="https://www.united.com/en/us">United</a></li>
                <li><a href="https://www.airfrance.com">Air France</a></li>
                <li><a href="https://en.belavia.by/">Belavia</a></li>
                <li><a href="https://www.flydubai.com">Fly Dubai</a></li>
            </ul>
        </nav>
    );
}

function GenerateFlights() {
    const cities = ['Hong Kong', 'New York City', 'Dubai', 'Shanghai', 'Tokyo',
        'Shenzhen', 'Chicago', 'Jakarta', 'Singapore', 'Toronto', 'Kuala Lumpur', 'Panama City', 'Miami', 'Melbourne', 'Osaka'];
    const flightsPrefixes = ['TK', 'U', 'SU', 'B2', 'FZ'];

    let table = []
    const createDate = function () {
        let day = randomFunc(28);
        return day + '.03.19'
    };

    const randomFunc = function (n) {
        return Math.floor(Math.random() * n + 1);
    };

    const createFlightNum = function () {
        return String(flightsPrefixes[randomFunc(4)]) + String(randomFunc(8999) + 1000)
    };

    for (let city of cities) {
        table.push(<Flight flightNum={createFlightNum()} to={city} price={randomFunc(600) + 100} USD
                           date={createDate()}/>)
    }

    return table
}


function Flight(props) {
    return (
        <tr className="border border-info">
            <td><img
                src="https://dl1.cbsistatic.com/i/r/2018/11/23/88ab496a-733c-4717-9cb5-ef6ad0080b67/thumbnail/64x64/c2c27f6c42f5c09dee0ff13ab7c8e501/imgingest-9193562550314800663.png"></img>
            </td>
            <td><i className="fas fa-fighter-jet"> {props.flightNum}</i></td>
            <td><i className="fas fa-plane-departure"> Bishkek</i></td>
            <td><i className="fas fa-plane-arrival"> {props.to}</i></td>
            <td><i className="fas fa-dollar-sign"> {props.price}</i></td>
            <td><i className="far fa-calendar-check text-danger"> {props.date}</i></td>
            <td><i className="fas fa-shopping-cart"> <a href="#">Купить билет</a></i></td>
        </tr>
    );
}

function Footer() {
    return (
        <footer className="footer bg-info">
            <div className="container-fluid">
                <p className="pt-5 pb-5">Copyright &copy; Website, 2018</p>
            </div>

        </footer>
    );
}

export default App;
