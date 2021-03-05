import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Campaign } from 'models/campaign.model';
import { Contactability } from 'models/contactability.model';
import { CampaignService } from '../../services/campaign.service';
import { ContactabilityService } from '../../services/contactability.service';

@Component({
  selector: 'app-search-by-campaign-id-client-id',
  templateUrl: './search-by-campaign-id-client-id.component.html',
  styleUrls: ['./search-by-campaign-id-client-id.component.css']
})
export class SearchByCampaignIdClientIdComponent implements OnInit {
  campaignId: number = 0;
  clientId: string = '';
  campaignsList: Campaign[] = [];

  constructor(
    private contactabilityService: ContactabilityService,
    private campaignService: CampaignService
    ) {}

  ngOnInit(): void {
    this.listCampaigns();
  }

  searchContactabilityByCampaignIdClientId(dataSource: MatTableDataSource<Contactability>) {
    this.contactabilityService.getByCampaignIdClientId(this.campaignId, this.clientId).subscribe((data) => {
      dataSource.data = [data];
    });
  }

  listCampaigns() {
    this.campaignService.getCampaigns().subscribe((data) => {
      this.campaignsList = data
    })
  }
}
