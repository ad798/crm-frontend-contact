import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contactability } from 'models/contactability.model';
import { catchError } from 'rxjs/operators';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-search-by-single-status',
  templateUrl: './search-by-single-status.component.html',
  styleUrls: ['./search-by-single-status.component.css'],
})
export class SearchBySingleStatusComponent implements OnInit {
  selectedStatus = 'ASS';

  constructor(private contactabilityService: ContactabilityService) {}

  ngOnInit() {}

  searchProductByStatus(dataSource: MatTableDataSource<Contactability>): void {    
    this.contactabilityService.getByStatus(this.selectedStatus).subscribe(
      (data) => {
        dataSource.data = data;
      },
      (error) => {
        dataSource.data = [];
      }
    );
    
  }
}
