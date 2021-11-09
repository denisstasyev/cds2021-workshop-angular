import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService
  ) {}

  selectedLocationId = -1;
  location: Location | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.selectedLocationId = +params['id'];
      this.location = this.locationService.getLocationById(
        this.selectedLocationId
      );
    });
  }
}
