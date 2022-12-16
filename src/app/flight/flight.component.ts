import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



import { User } from '@/_models';
import { UserService, AuthenticationService, FlightServices } from '@/_services';

@Component({ templateUrl: 'flight.component.html' })
export class FlightComponent implements OnInit {
    currentUser: User;
    searchForm: FormGroup;
    users = [];

    flights = []

    allFlights = []



    constructor(
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private flightServices: FlightServices
    ) {
        // redirect to home if already logged in
    }

    ngOnInit() {
        this.allFlights = [{
            name: "flight1",
            location: "banglore",
        },
        {
            name: "flight2",
            location: "banglore",
        },
        {
            name: "flight3",
            location: "delhi",
        }, {
            name: "flight4",
            location: "delhi",
        }]
        console.log(this.allFlights)
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id)
    //         .pipe(first())
    //         .subscribe(() => this.loadAllUsers());
    // }

    // private loadAllUsers() {
    //     this.userService.getAll()
    //         .pipe(first())
    //         .subscribe(users => this.users = users);
    // }

    handleChange(e) {
        console.log(e)
        console.log(this.allFlights.filter(item => (item.location === e)))
        this.flights = this.allFlights.filter(item => (item.location === e))
    }

    book(e) {
        let flightF = [] 
        
        flightF.push({
            id: 1,
            name: e.name,
            status: true,
            city: e.location
        })

        let oldFlight =  localStorage.getItem("bookflight") ? JSON.parse(localStorage.getItem("bookflight")) : [] 
        

        localStorage.setItem("bookflight", JSON.stringify([...flightF, ...oldFlight]) )
        this.flightServices.register({
            id: 1,
            name: e,
            status: true,
            city: e
        })
            .pipe(first())
            .subscribe()
    }
}