import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contactability } from 'models/contactability.model';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-search-by-name-surname',
  templateUrl: './search-by-name-surname.component.html',
  styleUrls: ['./search-by-name-surname.component.css'],
})
export class SearchByNameSurnameComponent implements OnInit {
  name: string;
  surname: string;

  @Output('openNotFoundSnackBar')
  openNotFoundSnackBar: EventEmitter<any> = new EventEmitter();
  @Output('openSuccessSanckBar')
  openSuccessSanckBar: EventEmitter<any> = new EventEmitter();

  constructor(private contactabilityService: ContactabilityService) {
    this.name = 'NOMBRE';
    this.surname = 'APELLIDO';
  }

  ngOnInit(): void {}

  searchProductByNameAndSurname(
    dataSource: MatTableDataSource<Contactability>
  ): void {
    this.contactabilityService
      .getByNameAndSurname(this.name, this.surname)
      .subscribe(
        (data) => {
          dataSource.data = data;
          this.openSuccessSanckBar.emit();
        },
        (error) => this.openNotFoundSnackBar.emit()
      );
  }
}
