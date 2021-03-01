import { Component, OnInit } from '@angular/core';
import { Contactability } from 'models/contactability.model';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-search-by-single-status',
  templateUrl: './search-by-single-status.component.html',
  styleUrls: ['./search-by-single-status.component.css'],
})
export class SearchBySingleStatusComponent implements OnInit {
  contactability?: Contactability[];
  displayedColumns = [
    'campaign',
    'identification',
    'names',
    'surnames',
    'phone',
    'status',
  ];
  status = 'ASS';
  clicked = false;

  constructor(private contactabilityService: ContactabilityService) {}

  ngOnInit(): void {}

  searchProductByStatus() {
    this.contactabilityService.getByStatus(this.status).subscribe((data) => {
      this.contactability = data;
      console.log(data);
    });
  }

  setNewSearch(){
    this.contactability = undefined;
  }
}
