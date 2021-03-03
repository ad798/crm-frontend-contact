import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contactability } from 'models/contactability.model';
import { SearchBySingleStatusComponent } from './components/search-by-single-status/search-by-single-status.component';
import { ContactabilityService } from './services/contactability.service';

@Component({
  selector: 'app-contactability',
  templateUrl: './contactability.component.html',
  styleUrls: ['./contactability.component.css'],
})
export class ContactabilityComponent implements AfterViewInit {
  displayedColumns = [
    'campaign.name',
    'clientIdentification',
    'clientName',
    'clientSurname',
    'clientPhone',
    'status',
  ];

  dataSource: MatTableDataSource<Contactability>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  contactability?: Contactability[];
  searchMethods = [
    {
      name: 'Buscar por estado',
      value: '1',
    },
    {
      name: 'Buscar por nombre y apellido',
      value: '2',
    },
  ];
  selectedSearchMethod: string;
  isSearchPerformed: boolean;

  @ViewChild(SearchBySingleStatusComponent)
  searchByStatusComponent!: SearchBySingleStatusComponent;

  constructor(private contactabilityService: ContactabilityService) {
    this.dataSource = new MatTableDataSource<Contactability>([]);
    this.selectedSearchMethod = '';
    this.isSearchPerformed = false;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applySearchMethod() {
    switch (this.selectedSearchMethod) {
      case '1':
        this.searchByStatusComponent.searchProductByStatus(this.dataSource);
        break;
    }
    this.isSearchPerformed = !this.isSearchPerformed;
  }

  setNewSearch() {
    this.dataSource.data = [];
    this.isSearchPerformed = !this.isSearchPerformed;
  }
}
