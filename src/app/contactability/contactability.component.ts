import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Contactability } from 'models/contactability.model';
import { ListByCampaignComponent } from './components/list-by-campaign/list-by-campaign.component';
import { SearchByCampaignIdClientIdComponent } from './components/search-by-campaign-id-client-id/search-by-campaign-id-client-id.component';
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
      name: 'Buscar por CI/RUC',
      value: '6',
    },
    {
      name: 'Buscar por CI/RUC y campaña',
      value: '7',
    },
  ];
  selectedSearchMethod: string;
  isSearchPerformed: boolean;
  currentSearch: Function;

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
  @ViewChild(SearchByCampaignIdClientIdComponent)
  searchByCampaignIdClientIdComponent!: SearchByCampaignIdClientIdComponent;

  constructor(
    private contactabilityService: ContactabilityService,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<Contactability>([]);
    this.selectedSearchMethod = '';
    this.isSearchPerformed = false;
    this.currentSearch = () => {};
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
        this.currentSearch = this.searchByStatusComponent.searchProductByStatus;
        break;
      case '2':
        this.searchByNameSurnameComponent.searchProductByNameAndSurname(
          this.dataSource
        );
        this.currentSearch = this.searchByNameSurnameComponent.searchProductByNameAndSurname;
        break;
      case '3':
        this.listByCampaignComponent.searchContactabilityByCampaign(
          this.dataSource
        );
        this.currentSearch = this.listByCampaignComponent.searchContactabilityByCampaign;
        break;
      case '4':
        this.searchByEmailComponent.searchContactabilityByEmail(
          this.dataSource
        );
        this.currentSearch = this.searchByEmailComponent.searchContactabilityByEmail;
        break;
      case '5':
        this.searchByPhoneComponent.searchContactabilityByPhone(
          this.dataSource
        );
        this.currentSearch = this.searchByPhoneComponent.searchContactabilityByPhone;
        break;
      case '6':
        this.searchByIdentificationComponent.searchContactabilityByIdentification(
          this.dataSource
        );
        this.currentSearch = this.searchByIdentificationComponent.searchContactabilityByIdentification;
        break;
      case '7':
        this.searchByCampaignIdClientIdComponent.searchContactabilityByCampaignIdClientId(
          this.dataSource
        );
        this.currentSearch = this.searchByCampaignIdClientIdComponent.searchContactabilityByCampaignIdClientId;
        break;
    }
    this.isSearchPerformed = !this.isSearchPerformed;
  }

  updateStatus(id: number, status: string) {
    this.contactabilityService.updateStatus(id, status).subscribe(
      (data) => {
        this.openSnackBar('Éxito: Se ha actualizado el estado', 'Cerrar');
        console.log('update successful');
      },
      (error) => {
        this.openSnackBar(
          'Error: No se ha podido actualizar el estado',
          'Cerrar'
        );
        console.log('error while uodating product');
      }
    );
  }

  setNewSearch() {
    this.dataSource.data = [];
    this.isSearchPerformed = !this.isSearchPerformed;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openNotFoundSnackBar() {
    this._snackBar.open('No se han encontrado registros', 'Cerrar', {
      duration: 5000,
    });
  }

  openSuccessSanckBar() {
    this._snackBar.open('Registros encontrados', 'Cerrar', {
      duration: 5000,
    });
  }
}
