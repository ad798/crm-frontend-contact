import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
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
  displayedColumns = [
    'campaign.name',
    'clientIdentification',
    'clientName',
    'clientSurname',
    'clientPhone',
    'status',
  ];
  contactability?: Contactability;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  campaignId: number = 0;
  clientId: string = '';
  clicked = false;
  campaignsList: Campaign[] = [];

  constructor(
    private contactabilityService: ContactabilityService,
    private campaignService: CampaignService
    ) {}

  ngOnInit(): void {
    // this.contactabilityForm = this.fb.group({
    //   campaigns: this.campaignService.getCampaigns()
    // });
    this.listCampaigns();
  }



  searchContactabilityByCampaignIdClientId() {
    this.contactabilityService.getByCampaignIdClientId(this.campaignId, this.clientId).subscribe((data) => {
      this.contactability = data;
    });
  }

  listCampaigns() {
    this.campaignService.getCampaigns().subscribe((data) => {
      this.campaignsList = data
    })
  }

  setNewSearch() {
    this.contactability = undefined;
  }
}
