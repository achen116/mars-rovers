import { Component }    from '@angular/core';
import { Router }       from '@angular/router';
import { NgForm }       from '@angular/forms';
import { RoverService } from './rover.service';

@Component({
	selector: 'filters',
	templateUrl: './filters.component.html',
	styleUrls: ['./filters.component.css']
})

export class FiltersComponent {
	public date:string = this.roverService.earthDate;

	constructor(
		private roverService: RoverService,
		private router: Router
	) {};

	public onSubmit(filtersForm: NgForm) {
		const route = this.router.url.split('?')[0]
		
		this.roverService.earthDate = filtersForm.value.date;

		this.router.navigate(
			[route],
			{ queryParams: { date: this.roverService.earthDate } }
		)
	};
}
