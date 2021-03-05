import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contactability } from 'models/contactability.model';
import { ListByCampaignComponent } from './components/list-by-campaign/list-by-campaign.component';
import { SearchByEmailComponent } from './components/search-by-email/search-by-email.component';
import { SearchByIdentificationComponent } from './components/search-by-identification/search-by-identification.component';
import { SearchByNameSurnameComponent } from './components/search-by-name-surname/search-by-name-surname.component';
import { SearchByPhoneComponent } from './components/search-by-phone/search-by-phone.component';
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
    {
      name: 'Buscar por campaña',
      value: '3',
    },
    {
      name: 'Buscar por email',
      value: '4',
    },
    {
      name: 'Buscar por número de teléfono',
      value: '5',
    },
    {
      name: 'Buscar por cedula',
      value: '6',
    },
  ];
  selectedSearchMethod: string;
  isSearchPerformed: boolean;

  @ViewChild(SearchBySingleStatusComponent)
  searchByStatusComponent!: SearchBySingleStatusComponent;
  @ViewChild(SearchByNameSurnameComponent)
  searchByNameSurnameComponent!: SearchByNameSurnameComponent;
  @ViewChild(ListByCampaignComponent)
  listByCampaignComponent!: ListByCampaignComponent;
  @ViewChild(SearchByEmailComponent)
  searchByEmailComponent!: SearchByEmailComponent;
  @ViewChild(SearchByPhoneComponent)
  searchByPhoneComponent!: SearchByPhoneComponent;
  @ViewChild(SearchByIdentificationComponent)
  searchByIdentificationComponent!: SearchByIdentificationComponent;

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
      case '2':
        this.searchByNameSurnameComponent.searchProductByNameAndSurname(
          this.dataSource
        );
        break;
      case '3':
        this.listByCampaignComponent.searchContactabilityByCampaign(this.dataSource);
        break;
      case '4':
        this.searchByEmailComponent.searchContactabilityByEmail(this.dataSource);
        break;
      case '5':
        this.searchByPhoneComponent.searchContactabilityByPhone(this.dataSource);
        break;
      case '6':
        this.searchByIdentificationComponent.searchContactabilityByIdentification(this.dataSource);
        break;
    }
    this.isSearchPerformed = !this.isSearchPerformed;
  }

  setNewSearch() {
    this.dataSource.data = [];
    this.isSearchPerformed = !this.isSearchPerformed;
  }
}
