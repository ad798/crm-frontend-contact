import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contactability } from 'models/contactability.model';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-search-by-identification',
  templateUrl: './search-by-identification.component.html',
  styleUrls: ['./search-by-identification.component.css']
})
export class SearchByIdentificationComponent implements OnInit {
  contactability?: Contactability[];
  displayedColumns = [
    'campaign',
    'identification',
    'names',
    'surnames',
    'phone',
    'status',
  ];
  public identification: string = '';
  floatLabelControl = new FormControl('auto');
  clicked = false;

  constructor(private contactabilityService: ContactabilityService) {}

  ngOnInit(): void {
  }

  searchProductByIdentification(identification: string) {
    this.contactabilityService.getByIdentification(identification).subscribe((data) => {
      this.contactability = data;
    });
  }

  setNewSearch(){
    this.contactability = undefined;
  }

}
