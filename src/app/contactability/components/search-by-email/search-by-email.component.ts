import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contactability } from 'models/contactability.model';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-search-by-email',
  templateUrl: './search-by-email.component.html',
  styleUrls: ['./search-by-email.component.css']
})
export class SearchByEmailComponent implements OnInit {
  contactability?: Contactability[];
  displayedColumns = [
    'campaign',
    'identification',
    'names',
    'surnames',
    'phone',
    'status',
  ];
  public email: string = '';
  floatLabelControl = new FormControl('auto');
  clicked = false;

  constructor(private contactabilityService: ContactabilityService) {}

  ngOnInit(): void {
  }

  searchCantactabilityByEmail() {
    this.contactabilityService.getByEmail(this.email).subscribe((data) => {
      this.contactability = data;
    });
  }

  setNewSearch(){
    this.contactability = undefined;
  }

}
