import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  links = [
    {
      subHeader: 'Contactabilidad',
      paths: [
        {
          description: 'contactability/add',
          value: 'contactability/add',
        },
        {
          description: 'contactability/update-status',
          value: 'contactability/update-status',
        },
        {
          description: 'Buscar por estado',
          value: 'contactability/search-by-single-status',
        },
        {
          description: 'Buscar por nombre y apellido',
          value: 'contactability/search-by-name-surname',
        },
        {
          description: 'Buscar por identificacion',
          value: 'contactability/search-by-identification',
        },
        {
          description: 'Buscar por identificacion y campaña',
          value: 'contactability/search-by-campaign-id-client-id',
        },
        {
          description: 'Buscar por numero de teléfono',
          value: 'contactability/search-by-phone',
        },
        {
          description: 'Buscar por email',
          value: 'contactability/search-by-email',
        },
        {
          description: 'Buscar por campaña',
          value: 'contactability/search-by-campaign',
        },
      ],
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
