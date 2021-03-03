import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contactability } from 'models/contactability.model';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-search-by-phone',
  templateUrl: './search-by-phone.component.html',
  styleUrls: ['./search-by-phone.component.css']
})
export class SearchByPhoneComponent implements OnInit {
  contactability?: Contactability[];
  displayedColumns = [
    'campaign',
    'identification',
    'names',
    'surnames',
    'phone',
    'status',
  ];
  public phone: string = '';
  floatLabelControl = new FormControl('auto');
  clicked = false;

  constructor(private contactabilityService: ContactabilityService) {}

  ngOnInit(): void {
  }

  searchCantactabilityByPhone() {
    this.contactabilityService.getByPhone(this.phone).subscribe((data) => {
      this.contactability = data;
    });
  }

  setNewSearch(){
    this.contactability = undefined;
  }

}
