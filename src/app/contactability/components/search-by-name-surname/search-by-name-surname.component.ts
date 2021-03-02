import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contactability } from 'models/contactability.model';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-search-by-name-surname',
  templateUrl: './search-by-name-surname.component.html',
  styleUrls: ['./search-by-name-surname.component.css'],
})
export class SearchByNameSurnameComponent implements AfterViewInit {
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

  name: string;
  surname: string;
  clicked = false;
  
  constructor(private contactabilityService: ContactabilityService) {
    this.dataSource = new MatTableDataSource<Contactability>([]);
    this.name = 'Alan';
    this.surname = 'Quimbita';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  searchProductByNameAndSurname() {
    this.contactabilityService
      .getByNameAndSurname(this.name, this.surname)
      .subscribe((data) => {
        this.dataSource.data = data;
      });
  }

  setNewSearch() {
    this.dataSource.data = [];
  }
}
