import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contactability } from 'models/contactability.model';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-search-by-single-status',
  templateUrl: './search-by-single-status.component.html',
  styleUrls: ['./search-by-single-status.component.css'],
})
export class SearchBySingleStatusComponent implements AfterViewInit {
  displayedColumns = [
    'campaign.name',
    'clientIdentification',
    'clientName',
    'clientSurname',
    'clientPhone',
    'status',
  ];
  contactability?: Contactability[];
  dataSource: MatTableDataSource<Contactability>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  status = 'ASS';
  clicked = false;

  constructor(private contactabilityService: ContactabilityService) {
    this.dataSource = new MatTableDataSource<Contactability>([]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  searchProductByStatus() {
    this.contactabilityService.getByStatus(this.status).subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  setNewSearch() {
    this.dataSource.data = [];
  }
}
