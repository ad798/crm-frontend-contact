import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Campaign } from 'models/campaign.model';
import { Contactability } from 'models/contactability.model';
import { CampaignService } from '../../services/campaign.service';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-list-by-campaign',
  templateUrl: './list-by-campaign.component.html',
  styleUrls: ['./list-by-campaign.component.css']
})
export class ListByCampaignComponent implements OnInit {

  displayedColumns = [
    'campaign.name',
    'clientIdentification',
    'clientName',
    'clientSurname',
    'clientPhone',
    'status',
  ];
  contactability?: Contactability;
  dataSource: MatTableDataSource<Contactability>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  campaignId: number = 0;
  clientId: string = '';
  clicked = false;
  campaignsList: Campaign[] = [];

  constructor(
    private contactabilityService: ContactabilityService,
    private campaignService: CampaignService
    ) {
      this.dataSource = new MatTableDataSource<Contactability>([]);
    }

  ngOnInit(): void {
    this.listCampaigns();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  searchContactabilityByCampaign() {
    this.contactabilityService.getByCampaign(this.campaignId).subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  listCampaigns() {
    this.campaignService.getCampaigns().subscribe((data) => {
      this.campaignsList = data
    })
  }

  setNewSearch() {
    this.dataSource.data = [];
  }

}
