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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  campaignId: number = 0;
  campaignsList: Campaign[] = [];

  constructor(
    private contactabilityService: ContactabilityService,
    private campaignService: CampaignService
    ) {}

  ngOnInit(): void {
    this.listCampaigns();
  }

  searchContactabilityByCampaign(dataSource: MatTableDataSource<Contactability>) {
    this.contactabilityService.getByCampaign(this.campaignId).subscribe((data) => {
      dataSource.data = data;
    },
    (error) => {
      dataSource.data = [];
    });
  }

  listCampaigns() {
    this.campaignService.getCampaigns().subscribe((data) => {
      this.campaignsList = data
    })
  }

}
