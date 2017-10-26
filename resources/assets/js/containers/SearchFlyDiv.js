import React, {Component} from 'react';
import styles from '../style/SearchFlyDiv.css'; 

class SearchFlyDiv extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            valueFrom: 'Gdańsk',
            valueTo: 'Warszawa',
            dateFrom: '',
            dateTo: '',
            checkboxChecked: false,
            currentDay: '',
            passengerNumber: '1'
        };
        this.checkboxChange = this.checkboxChange.bind(this);
        this.checkboxIsItChecked = this.checkboxIsItChecked.bind(this); // checbox dla podróży w jedną stronę
        this.checkboxToggle = this.checkboxToggle.bind(this); //checbox dla podróży w jedną stronę
        this.notToPastDate = this.notToPastDate.bind(this);  //walidacja kalendarza
        this.handleChangePassanger = this.handleChangePassanger.bind(this); // ilość pasażerów
        this.handleFormSubmit = this.handleFormSubmit.bind(this); 
        this.handleCityFrom = this.handleCityFrom.bind(this);
        this.handleCityTo = this.handleCityTo.bind(this);
        this.handleDateFrom = this.handleDateFrom.bind(this);
        this.handleDateTo = this.handleDateTo.bind(this);
    }

    render() {
    
        return (
        <div>
            <div id='searchFlyDiv' className='jumbotron'>
                <div id='formDiv'>
            {/*<form method="post" action="/showFlights">*/}
            {/*<form onSubmit={this.handleFormSubmit} method="post" action="getFlights.php">*/}
                    <form>
                        <table className='table'>
                            <tbody>
                                <tr>    
                                    <th>
                                    <label name='fromWhere'><h2>wylot </h2></label>                              
                                        <select required name='fromWhere' className='select' value={this.state.valueFrom} onChange={this.handleCityFrom}>
                                            {cities}  
                                        </select>
                                    </th>
                                    <th>
                                        <label name='toWhere'><h2>miejsce docelowe </h2></label>  
                                        <select required name='toWhere' className='select' value={this.state.valueTo} onChange={this.handleCityTo}>
                                            {cities} 
                                        </select>
                                    </th>
                                </tr>   
                                <tr>
                                    <th>
                                       <label name='depTime' id='dateFromText'><h2>data wylotu </h2></label>
                                        <input name='depTime' type='date' id='dateFrom' onClick={this.notToPastDate} min={this.state.currentDay} onChange={this.handleDateFrom} value={this.state.dateFrom}></input>
                                    </th>
                                    <th>
                                        <label name='dateTo'><h2>data powrotu </h2></label>
                                        <input type='date' id='dateTo' onClick={this.notToPastDate} min={this.state.currentDay} onChange={this.handleDateTo} value={this.state.dateTo} required name='dateTo'></input>
                                    </th>  
                                </tr>
                                <tr>
                                    <th id='oneWayCell'>
                                        <input type='checkbox' id='check' onClick={this.checkboxIsItChecked} defaultChecked={this.state.checkboxChecked} onChange={this.checkboxChange}></input>
                                        <label name='datecheckbox'><h2>&nbsp; podróż w jedną stronę </h2></label>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <label name='passengers'><h2>ilość pasażerów </h2></label>
                                        <input type='number' required defaultValue={this.state.passengerNumber} id='passangers' onChange={this.handleChangePassanger}/>
                                    </th>

                                </tr>
                                <tr>
                                    <th>  
                                        <input type='submit' value='lecimy!' onClick={this.handleFormSubmit}/>
                                       {/* <input type='submit' value='lecimy!'/ >/ >*/}
                                    </th>  
                                </tr>
                            </tbody>
                        </table>                           
                    </form>
                </div>             
            </div>
            <div className='row' id='fly'>              
            </div>
        </div>
        );
    }  
   
    handleCityFrom(evt) {
        this.setState({ valueFrom: evt.target.value });
    }
    handleCityTo(evt) {
        this.setState({ valueTo: evt.target.value });
    }  
    handleDateFrom(evt) {
        this.setState({ dateFrom: evt.target.value });
    }
    handleDateTo(evt) {
        this.setState({ dateTo: evt.target.value });
    }
    notToPastDate(evt) {
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth()+1;
        var year = today.getFullYear();
        if (month < 10) {
            month = '0' + month.toString();
        } 
        if (day < 10) {
            day = '0' + day.toString(); 
        }
        var current = year + '-' + month + '-' + day;

        this.setState({currentDay: current});        
    }

    checkboxChange(evt) {
         this.setState({ checkboxChecked: evt.target.checked }); 
    }

    checkboxIsItChecked() {

        if (this.state.checkboxChecked === true) {
        document.getElementById('dateTo').disabled = false;
        } else {
            document.getElementById('dateTo').disabled = true;
        }
    }
    checkboxToggle() {
        this.setState({ checkboxChecked: !this.state.checkboxChecked });
      }
    
    handleChangePassanger(evt) {
        this.setState({ passengerNumber: evt.target.value});
    } 
    handleFormSubmit(evt) {
        document.getElementById('fly').innerHTML = '';
        evt.preventDefault();
       
        var depFly = false;
        var arrFly = false;
        
        for (i=0; i < flyArr.length; i++) {
            
            var ticketsFrom = "<div class='row flights'><div class='destination col-md-4 col-xs-6'><h3> "+flyArr[i].depTime+"</h3><h3>"+flyArr[i].from+"  "+flyArr[i].depHours+" - "+flyArr[i].to+" "+flyArr[i].arrHours+"</h3></div><div class='price col-md-2 col-xs-6'><h2>"+flyArr[i].price * this.state.passengerNumber +" PLN/"+this.state.passengerNumber+"os.</h2></div><div class='luggage col-md-3 col-xs-6'><form><label name='smallLug'><h4>bagaż podręczny <input type='checkbox' value='smallLug' checked></input></h4></label><br><label name='bigLug'><h4>duży bagaż&nbsp;<input type='checkbox' value='bigLug'></input></h4></label></form></div><div class='booking col-md-3 col-xs-6'><button class='btn btn-success btn-lg' id='bookingBtn' onClick={this.test}>rezerwuj</button></div></div>";
            
            
             var ticketsTo = "<div class='row flights'><div class='destination col-md-4 col-xs-6'><h3> "+flyArr[i].depTime+"</h3><h3>"+flyArr[i].from+"  "+flyArr[i].depHours+" - "+flyArr[i].to+" "+flyArr[i].arrHours+"</h3></div><div class='price col-md-2 col-xs-6'><h2>"+flyArr[i].price * this.state.passengerNumber +" PLN/"+this.state.passengerNumber+"os.</h2></div><div class='luggage col-md-3 col-xs-6'><form><label name='smallLug'><h4>bagaż podręczny <input type='checkbox' value='smallLug' checked></input></h4></label><br><label name='bigLug'><h4>duży bagaż&nbsp;<input type='checkbox' value='bigLug'></input></h4></label></form></div><div class='booking col-md-3 col-xs-6'><button class='btn btn-success btn-lg' id='bookingBtn'onClick={this.test}>rezerwuj</button></div></div>";

            if (this.state.valueFrom === flyArr[i].from && this.state.valueTo == flyArr[i].to && this.state.dateFrom === flyArr[i].depTime) {    // przylot
                
                depFly = true;
                document.getElementById('fly').innerHTML += ticketsFrom;       
            }
            
            if (this.state.valueTo === flyArr[i].from &&  this.state.dateTo === flyArr[i].depTime) { //wylot
                
                arrFly = true;
                document.getElementById('fly').innerHTML += ticketsTo; 
            }
            
        }
        if (depFly === false) {
            document.getElementById('fly').innerHTML = "<h2><i class='icon-flight'></i>Przepraszamy, w tym dniu "+this.state.dateFrom+" nie latamy. :( </h2>";
        }
        if (depFly === false) {
            document.getElementById('fly').innerHTML = "<h2><i class='icon-flight'></i>Przepraszamy, w tym dniu "+this.state.dateFrom+" nie latamy. :( </h2>";
        }

        if (this.state.valueTo === this.state.valueFrom) {
                document.getElementById('fly').innerHTML = "<h2><i class='icon-flight'></i>Przepraszamy, wystąpił problem. :( </h2>";
        }
    }
    
    handleClick(e) {
        console.log('test');
    }
}   
    
class FlightDetails {
  constructor(from, to, price, depTime, depHours, arrHours) {
    this.from = from;
    this.to = to;
    this.price = price;
    this.depTime = depTime;
    this.depHours = depHours;  
    this.arrHours = arrHours;
  }
}

const flyArr = [
   new FlightDetails('Gdańsk','Warszawa',172,'2017-10-30', '11:35', '13:45'),
   new FlightDetails('Gdańsk','Warszawa',432,'2017-10-30', '11:35', '13:45'),
   new FlightDetails('Warszawa','Gdańsk',217,'2017-11-05', '9:05', '13:15'),
   new FlightDetails('Warszawa', 'Paryż', 242, '2017-10-31',  '10:00', '14:05'),
   new FlightDetails('Paryż', 'Warszawa', 651, '2017-11-02',  '5:30', '9:00'),
   new FlightDetails('Berlin', 'Londyn', 457, '2017-11-01',  '21:20', '24:30'),
   new FlightDetails('Lonydn', 'Berlin', 287, '2017-11-20',  '18:15', '22:20'),
   new FlightDetails('Londyn', 'Warszawa', 248, '2017-10-30',  '19:30', '22:15'),
   new FlightDetails('Warszawa', 'Londyn', 828, '2017-11-21',  '6:00', '8:45'),
   new FlightDetails('Gdańsk', 'Paryż', 574, '2017-10-27',  '20:30', '24:25'),
   new FlightDetails('Paryż', 'Gdańsk', 164, '2017-11-01',  '22:13', '2:35')
]

//lista miast wylot
    var i = 0;
    const citiesAll = ['Gdańsk', 'Warszawa', 'Berlin', 'Londyn', 'Paryż'];
    const cities = citiesAll.map((cities) =>
        <option key={i++}>{cities}</option>
    );

        

export default SearchFlyDiv;