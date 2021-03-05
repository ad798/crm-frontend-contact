import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contactability } from 'models/contactability.model';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-search-by-identification',
  templateUrl: './search-by-identification.component.html',
  styleUrls: ['./search-by-identification.component.css']
})
export class SearchByIdentificationComponent implements OnInit {
  public identification: string = '';

  constructor(private contactabilityService: ContactabilityService) {}

  ngOnInit(): void {
  }

  searchProductByIdentification(dataSource: MatTableDataSource<Contactability>) {
    this.contactabilityService.getByIdentification(this.identification).subscribe((data) => {
      dataSource.data = data;
    });
  }

}
