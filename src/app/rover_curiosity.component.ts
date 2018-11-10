import { Component } 		  from '@angular/core';
import { Response } 		  from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { RoverService }   from './rover.service';

@Component({
	selector: 'curiosity_rover',
	templateUrl: './rover.component.html',
	styleUrls: ['./rover.component.css']
})

export class CuriosityRoverComponent {
	private paramTracker:object 		= {};
	public roverName 								= "Curiosity";
	public photoCollection:object[] = [];

	constructor(
			private roverService: RoverService,
			private route: ActivatedRoute
	) {
		this.route.queryParams.subscribe(params => {
			if(params !== this.paramTracker) {
				this.ngOnInit();
			}
			
			this.paramTracker = params
		});
	};

	ngOnInit() {
		this.roverService.getPhotos(this.roverName).subscribe(
			(response: Response) => {
				this.photoCollection = response.json().photos;
			}
		);
	}
}
