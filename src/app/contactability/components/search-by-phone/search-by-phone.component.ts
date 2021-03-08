import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contactability } from 'models/contactability.model';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-search-by-phone',
  templateUrl: './search-by-phone.component.html',
  styleUrls: ['./search-by-phone.component.css'],
})
export class SearchByPhoneComponent implements OnInit {
  public phone: string = '';

  @Output('openNotFoundSnackBar')
  openNotFoundSnackBar: EventEmitter<any> = new EventEmitter();
  @Output('openSuccessSanckBar')
  openSuccessSanckBar: EventEmitter<any> = new EventEmitter();

  constructor(private contactabilityService: ContactabilityService) {}

  ngOnInit(): void {}

  searchContactabilityByPhone(dataSource: MatTableDataSource<Contactability>) {
    this.contactabilityService.getByPhone(this.phone).subscribe(
      (data) => {
        dataSource.data = data;
        this.openSuccessSanckBar.emit();
      },
      (error) => this.openNotFoundSnackBar.emit()
    );
  }
}
