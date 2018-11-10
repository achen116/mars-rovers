import { Injectable } from '@angular/core';
import { Http } 			from '@angular/http';
import { apiKey } 		from './env';

@Injectable()

export class RoverService {
	private nasaQuery:string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
	public today:Date        = new Date();
	public day:string 			 = ('0' + this.today.getDate()).slice(-2);
	public earthDate:string  = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.day
	
	constructor(private http: Http) {};

	public getPhotos(roverName) {
		const roverQuery = this.nasaQuery + roverName + '/photos?earth_date=' + this.earthDate + '&api_key=' + apiKey;

		return this.http.get(roverQuery)
	};
}