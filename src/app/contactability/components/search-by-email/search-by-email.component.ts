import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Contactability } from 'models/contactability.model';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-search-by-email',
  templateUrl: './search-by-email.component.html',
  styleUrls: ['./search-by-email.component.css']
})
export class SearchByEmailComponent implements OnInit {
  public email: string = '';

  constructor(private contactabilityService: ContactabilityService) {}

  ngOnInit(): void {
  }

  searchCantactabilityByEmail(dataSource: MatTableDataSource<Contactability>) {
    this.contactabilityService.getByEmail(this.email).subscribe((data) => {
      dataSource.data = data;
    });
  }

}
